const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3001
const INDEX = "/client/public/index.html"

const server = express()
  .use(express.static(path.join(__dirname, "build")))
  .get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
})

// SERVER VARIABLES
const randNames = [
  "Player 456",
  "Player 067",
  "Motion-Sensing Doll",
  "Traitor Guard",
  "The Salesman",
  "Human Furniture",
  "Eagle-Masked VIP",
  "Panther-Masked VIP",
  "Bull-Masked VIP",
  "Lion-Masked VIP",
  "Squid",
  "Umbrella Dalgona",
  "Red Envelope",
  "Blue Envelope",
  "Tyler Maxwell",
  "Cursed Coffin",
  "Fallen Contestant",
  "Glass Bridge",
  "Egg and Soda Breakfast",
  "Ddukbokki",
  "Sketchy Surgeon",
  "Pink Bow",
  "Shady Invitation",
  "Money Pig",
  "Claw Machine",
  "Square-Masked Guard",
  "Circle-Masked Guard",
  "Triangle-Masked Guard",
  "Lonely Marble",
  "Contraband Lighter",
  "Red Hair Dye",
  "Pastel Staircase",
  "Birthday Toy Gun",
  "Glass Shard",
  "Murder Attempt Knife",
  "Iconic Green Tracksuit",
  "Execution Playground",
  "Green Voting Button",
  "Red Voting Button",
]
const gameList = [
  "Marbles",
  "Trivia 2",
  "Trivia",
  "Glass Bridge",
  // "The Popular Thing",
  "Tug of War",
]
const playedGames = []
const players = {}
const eliminatedPlayers = {}
let numPlayersFinished = 0
let numPlayers = 0
// let nextGame = "Red Light, Green Light"
let nextGame = "Glass Bridge"
let hostId = "1"

// SOCKET LISTENERS
io.on("connection", (socket) => {
  console.log("Client connected")
  socket.on("host", () => {
    socket.join("1")
    socket.join(socket.id)
    let playerName = "Player 001 (Host)"
    let roomId = generateRoomId()
    players["1"] = playerName
    playerSync()
    io.to(socket.id).emit("join-confirmation", {
      roomId,
      playerId: hostId,
      playerName,
    })
    sendToLobby(socket.id)
  })

  socket.on("join", (roomId) => {
    socket.join(socket.id)
    let playerName = getRandName()
    players[socket.id] = playerName
    playerSync()
    io.to(socket.id).emit("join-confirmation", {
      roomId,
      playerId: socket.id,
      playerName,
    })
    sendToLobby(socket.id)
  })

  // TODO: FIX THE INFINITE LOOP
  socket.on("answer", (answer) => {
    if (!answer.team) {
      evaluateSoloGame(answer, socket)
    } else {
      numPlayersFinished++
      if (numPlayersFinished === numPlayers) {
      }
    }
    checkGameEnd()
  })

  socket.on("start-round", () => {
    numPlayers = Object.keys(players).length
    nextGame = pickGame(gameList, playedGames)
    io.emit("redirect", "/game")
  })
})

// GAME LOGIC LAYER
function getRandName() {
  let name = randNames[Math.floor(Math.random() * randNames.length) + 1]
  return name
}

function generateRoomId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let roomId = ""
  for (let i = 0; i < 4; i++) {
    roomId += chars[Math.floor(Math.random() * chars.length)]
  }
  return roomId
}

const pickGame = (gameArray, playedGamesArray) => {
  if (gameArray.length == playedGamesArray.length) return null
  let pickedGame = gameArray[Math.floor(Math.random() * gameArray.length)]
  while (playedGamesArray.includes(pickedGame)) {
    pickedGame = gameArray[Math.floor(Math.random() * gameArray.length)]
  }
  playedGamesArray.push(pickedGame)
  return pickedGame
}

function sendToLobby(playerId, team = null) {
  io.to(playerId).emit("to-lobby", nextGame, team)
}

function evaluateSoloGame(answer, socket) {
  if (answer.content) {
    if (!nextGame) {
      console.log("You Win!")
      io.to(socket.id).emit("you-win")
      delete players[socket.id]
      playerSync()
    } else {
      if (nextGame !== "Tug of War") {
        sendToLobby(socket.id)
      }
    }
  } else {
    io.to(socket.id).emit("redirect", "/gameover")
    eliminatePlayer(socket)
    playerSync()
  }
}

function eliminatePlayer(socket) {
  eliminatedPlayers[socket.id] = players[socket.id]
  delete players[socket.id]
}

function playerSync() {
  io.emit("sync-players", players, eliminatedPlayers)
}

function checkGameEnd() {
  if (players == {}) {
    gameList.concat(playedGames)
    playedGames = []
    console.log("The Calamari Game has concluded.")
  }
}
