/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"

const JoinButton = ({ socket }) => {
  const [room, setRoom] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("join", room)
    console.log("Joined room: ", room)
  }

  return (
    <div>
      <form
        className="position-absolute top-50 start-50 translate-middle"
        onSubmit={handleSubmit}
      >
        <div className="form-floating">
          <input
            className="form-control readable"
            style={{
              color: "white",
              fontSize: "x-large",
              border: "2px solid white",
              backgroundColor: "rgba(0,0,0,0)",
            }}
            id="roomId"
            type="text"
            value={room}
            placeholder="Room ID"
            onChange={(e) => setRoom(e.target.value.toUpperCase())}
          />
          <label htmlFor="roomId">Enter Room ID</label>
        </div>
        <input className="btn mt-3" type="submit" value="Join Game" />
      </form>
    </div>
  )
}

export default JoinButton
