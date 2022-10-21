import React, { useState, useEffect } from "react"
import CalamariShapes from "../components/CalamariShapes"
import HowToPlay from "../components/HowToPlay"

const Lobby = ({
  socket,
  playerId,
  roomId,
  hostId,
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
      <h1 className="mt-2">
        {gameName === "Trivia" ||
        gameName === "Trivia 2" ||
        gameName === "Trivia 3"
          ? "Trivia"
          : gameName}
      </h1>
      <HowToPlay gameName={gameName} />
      <div className="row gap-3 mt-3 align-items-start p-5">
        <div className="col-12 col-md-5 col-lg-5">
          <h4>Players in Lobby:</h4>
          <ul
            style={{
              maxHeight: "15vh",
              overflowY: "scroll",
              border: "2px solid white",
              borderRadius: "0.5rem",
            }}
          >
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
        <div className="col-12 col-md-5 col-lg-5">
          <h4>Eliminated:</h4>
          {Object.keys(eliminatedPlayers).length !== 0 && (
            <ul
              style={{
                maxHeight: "20vh",
                overflow: "scroll",
                border: "2px solid white",
                borderRadius: "0.5rem",
              }}
            >
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
          )}
        </div>
      </div>
      <div
        style={{ bottom: "2rem" }}
        className="position-absolute start-50 translate-middle-x"
      >
        {gameName === "Red Light, Green Light" &&
          (playerId === hostId ? (
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
              <h1 className="readable">Room: {roomId}</h1>
              <button className="btn" onClick={handleClick}>
                Start
              </button>
            </div>
          ) : (
            <div className="position-absolute bottom-0 start-50 translate-middle-x">
              <h1 className="readable">Room: {roomId}</h1>
              <p style={{ minWidth: "50vw" }} className="mb-0">
                Waiting for host to start the game...
              </p>
            </div>
          ))}
      </div>

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
