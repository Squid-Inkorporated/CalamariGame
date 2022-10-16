/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const HostButton = ({ socket }) => {
  const handleClick = (e) => {
    e.preventDefault()
    socket.emit("host", "hosting the game")
  }
  return (
    <div>
      <a className="btn" href="#" onClick={handleClick}>
        Host
      </a>
    </div>
  )
}

export default HostButton
