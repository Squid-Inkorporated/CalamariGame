/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { Routes, Route, NavLink, useNavigate } from "react-router-dom"
import HostPage from "./views/HostPage"
import Welcome from "./views/Welcome"
import Game from "./views/Game"
import Lobby from "./views/Lobby"
import GameOver from "./views/GameOver"

function App({ socket }) {
  const [playerId, setPlayerId] = useState(null)
  const [playerName, setPlayerName] = useState(null)
  const [roomId, setRoomId] = useState(null)
  const [players, setPlayers] = useState({})
  const [gameName, setGameName] = useState(null)
  const hostId = "1"
  const navigate = useNavigate()

  useEffect(() => {
    socket.emit("player-list", players)
  }, [players])

  socket.on("join-confirmation", (data) => {
    setRoomId(data.roomId)
    setPlayerId(data.playerId)
    setPlayerName(data.playerName)
  })
  socket.on("to-lobby", (gameName) => {
    setGameName(gameName)
    navigate("/lobby")
  })
  socket.on("add-player", (player) => {
    setPlayers({
      ...players,
      [player.id]: player.name,
    })
  })
  socket.on("remove-player", (player) => {
    let newPlayers = { ...players }
    delete newPlayers[player.id]
    setPlayers(newPlayers)
  })
  socket.on("player-list", (newPlayers) => {
    if (players !== newPlayers) {
      setPlayers(newPlayers)
    }
  })
  socket.on("redirect", (destination) => {
    navigate(destination)
  })
  socket.on("game-over", () => {
    navigate("/gameover")
    socket.disconnect()
  })
  return (
    <div className="App">
      <div className="d-flex">
        <div className="me-3">
          <NavLink to={"/"}>Welcome</NavLink>
        </div>
        <div className="me-3">
          <NavLink to={"/host"}>Host</NavLink>
        </div>
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
              roomId={roomId}
              playerId={playerId}
              hostId={hostId}
              socket={socket}
              gameName={gameName}
            />
          }
        />
        <Route
          path="/game"
          element={<Game gameName={gameName} socket={socket} />}
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
