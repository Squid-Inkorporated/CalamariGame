import React, { useState, useEffect } from "react"
import CalamariShapes from "../components/CalamariShapes"
import HowToPlay from "../components/HowToPlay"

const Lobby = ({
  socket,
  playerId,
  hostId,
  roomId,
  players,
  eliminatedPlayers,
  gameName,
  playerName,
}) => {
  const [timer, setTimer] = useState(30000)
  useEffect(() => {
    const myInterval = () => {
      if (timer > 1000) {
        setTimer((state) => state - 1000)
      } else if (timer !== 0) {
        setTimer(0)
        if (gameName !== "Red Light, Green Light") {
          socket.emit("start-round")
        }
        clearInterval(interval)
      }
    }
    const interval = setInterval(myInterval, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer])

  const handleClick = () => {
    socket.emit("start-round")
  }

  return (
    <div>
      <h1 className="mt-2">{gameName}</h1>
      <HowToPlay gameName={gameName} />
      <div className="row mt-3 align-items-start">
        <div className="col-12 col-md-6 col-lg-6">
          <h4>Players in Lobby:</h4>
          <ul>
            {players &&
              Object.keys(players).map((id) => {
                return players[id] === playerName ? (
                  <li className="squidGreen" key={id}>
                    {players[id] + " (You)"}
                  </li>
                ) : (
                  <li key={id}>{players[id]}</li>
                )
              })}
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <h4>Eliminated:</h4>
          <ul>
            {eliminatedPlayers &&
              Object.keys(eliminatedPlayers).map((id) => {
                return eliminatedPlayers[id] === playerName ? (
                  <li className="squidGreen" key={id}>
                    {eliminatedPlayers[id] + " (You)"}
                  </li>
                ) : (
                  <li key={id}>{eliminatedPlayers[id]}</li>
                )
              })}
          </ul>
        </div>
      </div>
      <div
        style={{ bottom: "10rem" }}
        className="position-absolute start-50 translate-middle-x"
      >
        {gameName === "Red Light, Green Light" &&
          (playerId === hostId ? (
            <button className="btn" onClick={handleClick}>
              Start
            </button>
          ) : (
            <p className="mt-3">Waiting for host to start the game...</p>
          ))}
      </div>
      <h1 className="readable position-absolute bottom-0 start-50 translate-middle-x">
        Room: {roomId}
      </h1>
      <CalamariShapes />
      <div
        style={{ bottom: "10%" }}
        className="display-1 position-absolute start-50 translate-middle-x pb-5"
      >
        {gameName !== "Red Light, Green Light" && timer.toString().slice(0, -3)}
      </div>
    </div>
  )
}

export default Lobby
