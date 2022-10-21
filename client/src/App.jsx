/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import HostPage from "./views/HostPage"
import Welcome from "./views/Welcome"
import Game from "./views/Game"
import Lobby from "./views/Lobby"
import YouWin from "./views/YouWin"
import GameOver from "./views/GameOver"

function App({ socket }) {
  const [playerId, setPlayerId] = useState(null)
  const [playerName, setPlayerName] = useState(null)
  const [roomId, setRoomId] = useState(null)
  const [players, setPlayers] = useState({})
  const [eliminatedPlayers, setEliminatedPlayers] = useState({})
  const [gameName, setGameName] = useState(null)
  const [team, setTeam] = useState(null)
  const hostId = "1"
  const navigate = useNavigate()

  socket.on("join-confirmation", (data) => {
    setPlayerId(data.playerId)
    setPlayerName(data.playerName)
    setRoomId(data.roomId)
  })
  socket.on("to-lobby", (gameName, team) => {
    setGameName(gameName)
    setTeam(team)
    navigate("/lobby")
  })
  socket.on("sync-players", (players, eliminatedPlayers) => {
    setPlayers(players)
    setEliminatedPlayers(eliminatedPlayers)
  })
  socket.on("redirect", (destination) => {
    navigate(destination)
  })
  socket.on("you-win", () => {
    navigate("/congratulations")
    socket.disconnect()
  })
  socket.on("game-over", () => {
    navigate("/gameover")
    socket.disconnect()
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome socket={socket} />} />
        <Route path="/host" element={<HostPage socket={socket} />} />
        <Route
          path="/lobby"
          element={
            <Lobby
              players={players}
              eliminatedPlayers={eliminatedPlayers}
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
          element={<Game gameName={gameName} socket={socket} team={team} />}
        />
        <Route
          path="/gameover"
          element={<GameOver playerName={playerName} />}
        />
        <Route
          path="/congratulations"
          element={
            <YouWin
              playerName={playerName}
              eliminatedPlayers={eliminatedPlayers}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
