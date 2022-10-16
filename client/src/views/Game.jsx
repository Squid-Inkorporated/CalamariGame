import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Trivia from "../components/Trivia"
import RedLightGreenLight from "../components/RedLightGreenLight"
import TugOfWar from "../components/TugOfWar"

const Game = ({ socket, gameName, playerName, playerId }) => {
  const [counter, setCounter] = useState(15000)
  const [answer, setAnswer] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const myInterval = () => {
      if (counter > 1000) {
        setCounter((state) => state - 1000)
      } else if (counter !== 0) {
        setCounter(0)
        socket.emit("answer-to-server", {
          id: playerId,
          playerName: playerName,
          content: answer,
          team: null,
        })
        clearInterval(interval)
      }
    }
    const interval = setInterval(myInterval, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [counter])
  console.log(counter)
  return (
    <div>
      <h2>Playing a game</h2>
      {gameName === "Trivia" && (
        <Trivia
          answer={answer}
          setAnswer={setAnswer}
          playerName={playerName}
          playerId={playerId}
          socket={socket}
        />
      )}
      {gameName === "RedLightGreenLight" && (
        <RedLightGreenLight
          playerName={playerName}
          playerId={playerId}
          socket={socket}
        />
      )}
      {gameName === "TugOfWar" && (
        <TugOfWar playerName={playerName} playerId={playerId} socket={socket} />
      )}
    </div>
  )
}

export default Game
