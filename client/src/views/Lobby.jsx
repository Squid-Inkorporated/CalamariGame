import React from "react"
import HowToPlay from "../components/HowToPlay"

const Lobby = ({ socket, isHost, roomId, players, gameName, playerName }) => {
  const handleClick = () => {
    socket.emit("start-round")
  }
  // get status of game
  // display players in lobby
  return (
    <div>
      <h1>{gameName}</h1>
      {isHost && <p>You're the host!</p>}
      <p>waiting for other players</p>
      <strong>Players in Lobby:</strong>
      <ul>
        {players &&
          players.map((player, idx) => {
            return player.name === playerName ? (
              <li className="squidGreen" key={idx}>
                {player.name + " (You)"}
              </li>
            ) : (
              <li key={idx}>{player.name}</li>
            )
          })}
      </ul>
      <HowToPlay gameName={gameName} />
      {isHost ? (
        <button className="btn mt-3" onClick={handleClick}>
          Start
        </button>
      ) : (
        <p className="mt-3">Waiting for host to start the game...</p>
      )}
      <h4 className="display-2 position-absolute bottom-0 start-50 translate-middle-x">
        Room <span className="readable">{roomId}</span>
      </h4>
    </div>
  )
}

export default Lobby
