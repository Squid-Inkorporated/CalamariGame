/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const HostButton = ({ socket }) => {
  const handleClick = (e) => {
    e.preventDefault()
    socket.emit("host")
  }
  return (
    <div>
      <a
        style={{ bottom: 100 }}
        className="btn position-absolute start-50 translate-middle"
        href="#"
        onClick={handleClick}
      >
        Host Game
      </a>
    </div>
  )
}

export default HostButton
