/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"

const JoinButton = ({ socket }) => {
  const [showForm, setShowForm] = useState(false)
  const [room, setRoom] = useState("")
  const handleClick = (e) => {
    e.preventDefault()
    setShowForm(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("join", room.toUpperCase())
    console.log("Joined room: ", room)
  }
  return (
    <div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <input type="submit" value="Join" />
        </form>
      )}
      <a className="btn" href="#" onClick={handleClick}>
        Join Game
      </a>
    </div>
  )
}

export default JoinButton
