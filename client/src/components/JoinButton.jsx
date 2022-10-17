/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"

const JoinButton = ({ socket }) => {
  const [room, setRoom] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("join", room.toUpperCase())
    console.log("Joined room: ", room)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <input className="btn ms-3" type="submit" value="Join Game" />
      </form>
    </div>
  )
}

export default JoinButton
