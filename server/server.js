// const { instrument } = require("@socket.io/admin-ui")
const io = require("socket.io")(3001, {
  cors: {
    origin: ["http://localhost:3000", "https://admin.socket.io"],
  },
})
let players = {
  1: "Player 001 (Host)",
}

const oddGameList = [
  "Marbles",
  "RedLightGreenLight",
  "Trivia2",
  "Trivia3",
  "ThePopularThing",
]
const evenGameList = ["TugOfWar"]

// function getNextGame()
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
    // console.log(hostId, "is", message, "in room", roomId)
    io.to(socket.id).emit("join-confirmation", {
      roomId,
      playerId: socket.id,
      playerName,
    })
    io.emit("add-player", { id: hostId, name: playerName })
    io.to(hostId).emit("to-lobby", "Trivia")
  })

  socket.on("join", (roomId) => {
    socket.join(socket.id)
    let playerName = pickName()
    let playerId = socket.id
    // console.log(socket.id, "joined room", roomId)
    io.emit("add-player", { id: playerId, name: playerName })
    io.to(socket.id).emit("join-confirmation", {
      roomId,
      playerId: socket.id,
      playerName,
    })
    io.to(socket.id).emit("to-lobby", "Trivia")
  })

  socket.on("answer", (answer) => {
    console.log(socket.id, "sent", answer.content, "to", hostId)
    // io.to(hostId).emit("answer", answer)
    if (answer.content) {
      io.to(socket.id).emit("to-lobby", "Red Light, Green Light")
    } else {
      io.to(socket.id).emit("game-over")
      players.remove(socket.id)
    }
  })

  socket.on("start-round", () => {
    io.emit("redirect", "/game")
  })
})

// instrument(io, { auth: false })
