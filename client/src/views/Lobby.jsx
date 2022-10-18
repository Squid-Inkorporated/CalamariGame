import React from "react"
import CalamariShapes from "../components/CalamariShapes"
import HowToPlay from "../components/HowToPlay"

const Lobby = ({
  socket,
  playerId,
  hostId,
  roomId,
  players,
  gameName,
  playerName,
}) => {
  const handleClick = () => {
    socket.emit("start-round")
  }

  return (
    <div>
      <h1>{gameName}</h1>
      <HowToPlay gameName={gameName} />
      <div className="row mt-3">
        <div className="col-12 col-md-6 col-lg-6">
          <h4>Players in Lobby:</h4>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
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
      </div>
      <div
        style={{ bottom: "5rem" }}
        className="position-absolute start-50 translate-middle-x"
      >
        {playerId === hostId ? (
          <button className="btn mt-3" onClick={handleClick}>
            Start
          </button>
        ) : (
          <p className="mt-3">Waiting for host to start the game...</p>
        )}
      </div>
      <h6 className="display-2 position-absolute bottom-0 start-50 translate-middle-x">
        Room: <span className="readable">{roomId}</span>
      </h6>
      <CalamariShapes />
    </div>
  )
}

export default Lobby
