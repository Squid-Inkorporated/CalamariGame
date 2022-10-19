/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import Trivia from "../components/Trivia"
import Trivia2 from "../components/Trivia2"
import RedLightGreenLight from "../components/RedLightGreenLight"
import TugOfWar from "../components/TugOfWar"
import Marbles from "../components/Marbles"
import GlassBridge from "../components/GlassBridge"

const Game = ({ socket, gameName }) => {
  const [timer, setTimer] = useState(15000)
  const [answer, setAnswer] = useState(false)

  useEffect(() => {
    const myInterval = () => {
      if (timer > 1000) {
        setTimer((state) => state - 1000)
      } else if (timer !== 0) {
        setTimer(0)
        socket.emit("answer", {
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
  }, [timer])

  return (
    <div>
      <h2>
        {gameName === "Trivia" ||
        gameName === "Trivia 2" ||
        gameName === "Trivia 3"
          ? "Trivia"
          : gameName}
      </h2>
      {gameName === "Trivia" && (
        <Trivia answer={answer} setAnswer={setAnswer} />
      )}
      {gameName === "Trivia 2" && (
        <Trivia2 setAnswer={setAnswer} answer={answer} />
      )}
      {gameName === "Red Light, Green Light" && (
        <RedLightGreenLight setAnswer={setAnswer} />
      )}
      {gameName === "Marbles" && (
        <Marbles setAnswer={setAnswer} answer={answer} />
      )}
      {gameName === "Tug of War" && (
        <TugOfWar answer={answer} setAnswer={setAnswer} />
      )}
      {gameName === "Glass Bridge" && (
        <GlassBridge setAnswer={setAnswer} answer={answer} />
      )}
      <div className="display-1 position-absolute bottom-0 start-50 translate-middle-x">
        {timer.toString().slice(0, -3)}
      </div>
    </div>
  )
}

export default Game
