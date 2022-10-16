import React, { useState } from "react"
import { Routes, Route, NavLink, useNavigate } from "react-router-dom"
import HostPage from "./views/HostPage"
import Welcome from "./views/Welcome"
import Game from "./views/Game"
import Lobby from "./views/Lobby"
import GameOver from "./views/GameOver"
import Calamari from "./assets/calamari.png"
import { hostId } from "./utils/socket"

function App({ socket }) {
  const [playerId, setPlayerId] = useState(null)
  const [hostId, setHostId] = useState(null)
  const [playerName, setPlayerName] = useState("")
  const [eliminated, setEliminated] = useState(false)
  const [hosting, setHosting] = useState(false)
  const [roomId, setRoomId] = useState("")
  const [players, setPlayers] = useState([
    {
      id: hostId,
      name: "Player 001 (Host)",
      score: 0,
    },
  ])
  const navigate = useNavigate()
  socket.on("host-confirmation", (data) => {
    setPlayerName(data.name)
    setHostId(data.id)
    setPlayerId(data.id)
    setRoomId(data.roomId)
    setHosting(true)
    console.log("Now hosting room: " + roomId)
    sessionStorage.setItem(
      "players",
      JSON.stringify([{ id: data.id, name: data.name }])
    )
    sessionStorage.setItem("round", 0)
    sessionStorage.setItem("responses", {})
    sessionStorage.setItem("currentGame", "")
    sessionStorage.setItem("team1", 0)
    sessionStorage.setItem("team2", 0)
  })
  socket.on("join-confirmation", (data) => {
    console.log("Client joined game")
    setHostId(data.hostId)
    setRoomId(data.roomId)
    setPlayerId(data.id)
    setPlayerName(data.name)
  })
  socket.on(
    "to-lobby",
    (isHost, roomId, gameName, isEliminated, playerName) => {
      console.log("Being sent to lobby")
      setHosting(isHost)
      setEliminated(isEliminated)
      setGameName(gameName)
      setPlayerName(playerName)
      setRoomId(roomId)
      navigate("/lobby")
    }
  )
  socket.on("player-list", (players) => {
    // console.log(players)
    setPlayers(players)
  })
  socket.on("redirect", (destination) => {
    navigate(destination)
  })
  socket.on("game-over", () => {
    navigate("/gameover")
    socket.disconnect()
  })
  const [gameName, setGameName] = useState("Trivia")
  return (
    <div className="App">
      <img
        src={Calamari}
        alt="Calamari"
        style={{ position: "fixed", bottom: "0", left: "10px" }}
      />
      <img
        src={Calamari}
        alt="Calamari"
        style={{ position: "fixed", bottom: "0", right: "10px" }}
      />

      <div className="d-flex">
        <div className="me-3">
          <NavLink to={"/"}>Welcome</NavLink>
        </div>
        <div className="me-3">
          <NavLink to={"/host"}>Host</NavLink>
        </div>
        <div className="me-3">
          <NavLink to={"/lobby"}>Lobby</NavLink>
        </div>
        <NavLink to={"/game"}>Game</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Welcome socket={socket} />} />
        <Route path="/host" element={<HostPage socket={socket} />} />
        <Route
          path="/lobby"
          element={
            <Lobby
              players={players}
              playerName={playerName}
              playerId={playerId}
              roomId={roomId}
              hostId={hostId}
              isHost={hosting}
              socket={socket}
              gameName={gameName}
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              players={players}
              playerName={playerName}
              playerId={playerId}
              roomId={roomId}
              hostId={hostId}
              isHost={hosting}
              gameName={gameName}
              socket={socket}
            />
          }
        />
        <Route
          path="/gameover"
          element={<GameOver playerName={playerName} />}
        />
      </Routes>
    </div>
  )
}

export default App
