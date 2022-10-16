const { instrument } = require("@socket.io/admin-ui")
const io = require("socket.io")(3001, {
  cors: {
    origin: ["http://localhost:3000", "https://admin.socket.io"],
  },
})
const oddGameList = [
  "Marbles",
  "RedLightGreenLight",
  "Trivia2",
  "Trivia3",
  "ThePopularThing",
]
const evenGameList = ["TugOfWar"]

// function getNextGame()

function pickName() {
  const randNames = [
    "Player 456",
    "Player 067",
    "Motion-Sensing Girl",
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
    "Egg and Soda",
    "Ddukbokki",
    "Sketchy Surgeon",
    "Pink Bow",
    "Shady Invitation",
    "Money Pig",
    "Claw Machine",
    "Square Guard",
    "Circle Guard",
    "Triangle Guard",
    "Lonely Marble",
    "Contraband Lighter",
    "Red Hair Dye",
    "Pastel Staircase",
    "Birthday Toy Gun",
  ]
  return randNames[Math.floor(Math.random() * randNames.length) + 1]
}
function generateRoomId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let roomId = ""
  for (let i = 0; i < 4; i++) {
    roomId += chars[Math.floor(Math.random() * chars.length)]
  }
  return roomId
}

let hostId
let roomId

io.on("connection", (socket) => {
  console.log(socket.id, "connected")

  socket.on("host", (message) => {
    socket.join(socket.id)
    hostId = socket.id
    roomId = generateRoomId()
    console.log(hostId, "is", message, "in room", roomId)
    io.to(hostId).emit("host-confirmation", {
      roomId,
      id: hostId,
      name: "Player 001 (Host)",
    })
    io.to(hostId).emit(
      "to-lobby",
      true,
      roomId,
      "Trivia",
      false,
      "Player 001 (Host)"
    )
  })
  socket.on("join", (room) => {
    socket.join(roomId)
    socket.join(socket.id)
    let playerName = pickName()
    console.log(socket.id, "joined room", roomId)
    io.to(socket.id).emit("join-confirmation", {
      hostId,
      roomId,
      id: socket.id,
      name: playerName,
    })
    io.to(socket.id).emit(
      "to-lobby",
      false,
      roomId,
      "Trivia",
      false,
      playerName
    )
    io.to(hostId).emit("player-joined", {
      id: socket.id,
      name: playerName,
    })
  })
  socket.on("answer-to-server", (answer) => {
    console.log(socket.id, "sent", answer.content, "to", hostId)
    // io.to(hostId).emit("answer", answer)
    if (answer.content) {
      io.to(socket.id).emit(
        "to-lobby",
        false,
        roomId,
        "Red Light Green Light",
        answer.content,
        answer.playerName
      )
    } else {
      io.to(socket.id).emit("game-over")
    }
  })
  socket.on("player-list-server", (players) => {
    io.emit("player-list", players)
  })
  socket.on("start-round", () => {
    io.emit("redirect", "/game")
  })
})

instrument(io, { auth: false })
