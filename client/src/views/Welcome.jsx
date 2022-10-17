import React from "react"
import JoinButton from "../components/JoinButton"
import CalamariShapes from "../components/CalamariShapes"

const Welcome = ({ socket }) => {
  return (
    <>
      <h2>
        <span className="display-1 me-3 text-light">&#125;</span>Welcome to the
        Calamari Game.
        <span className="display-1 ms-3 text-light">&#123;</span>
      </h2>
      <div className="d-flex justify-content-center mt-3">
        <JoinButton socket={socket} />
      </div>
      <CalamariShapes />
    </>
  )
}

export default Welcome
