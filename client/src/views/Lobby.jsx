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
      {playerId === hostId && <p>You're the host!</p>}
      <HowToPlay gameName={gameName} />
      <strong>Players in Lobby:</strong>
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
      {playerId === hostId ? (
        <button className="btn mt-3" onClick={handleClick}>
          Start
        </button>
      ) : (
        <p className="mt-3">Waiting for host to start the game...</p>
      )}
      <h4 className="display-2 position-absolute bottom-0 start-50 translate-middle-x">
        Room: <span className="readable">{roomId}</span>
      </h4>
      <CalamariShapes />
    </div>
  )
}

export default Lobby
