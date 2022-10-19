const pickGame = require("./gameLogic")
const io = require("socket.io")(3001, {
  cors: {
    origin: ["http://localhost:3000", "https://admin.socket.io"],
  },
})
const players = {}

// picking games assets
const playedGames = []
const gameList = [
  "Marbles",
  "Trivia 2",
  "Trivia",
  // "The Popular Thing",
  // "Tug of War"
]
let nextGame = "Red Light, Green Light"
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

function pickName() {
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

let hostId = "1"

io.on("connection", (socket) => {
  socket.on("host", () => {
    socket.join("1")
    socket.join(socket.id)
    let playerName = "Player 001 (Host)"
    let roomId = generateRoomId()
    io.to(socket.id).emit("join-confirmation", {
      roomId,
      playerId: hostId,
      playerName,
    })
    players["1"] = playerName
    console.log(players)
    io.emit("sync-players", players)
    io.to(hostId).emit("to-lobby", nextGame)
  })

  socket.on("join", (roomId) => {
    socket.join(socket.id)
    let playerName = pickName()
    players[socket.id] = playerName
    console.log(players)
    io.emit("sync-players", players)
    io.to(socket.id).emit("join-confirmation", {
      roomId,
      playerId: socket.id,
      playerName,
    })
    io.to(socket.id).emit("to-lobby", nextGame)
  })

  // TODO: FIX THE INFINITE LOOP
  socket.on("answer", (answer) => {
    if (answer.content) {
      if (!nextGame) {
        console.log("You Win!")
        io.to(socket.id).emit("you-win")
        delete players[socket.id]
      } else {
        io.to(socket.id).emit("to-lobby", nextGame)
      }
      console.log(players)
      if (players == {}) {
        gameList.concat(playedGames)
        playedGames = []
        console.log("The Calamari Game has concluded.")
      }
    } else {
      io.to(socket.id).emit("redirect", "/gameover")
      delete players[socket.id]
      console.log(players)
      io.emit("sync-players", players)
    }
  })

  socket.on("start-round", () => {
    nextGame = pickGame(gameList, playedGames)
    io.emit("redirect", "/game")
  })
})
