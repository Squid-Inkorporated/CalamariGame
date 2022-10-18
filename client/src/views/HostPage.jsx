import React from "react"
import HostButton from "../components/HostButton"
import CalamariShapes from "../components/CalamariShapes"

const HostPage = ({ socket }) => {
  return (
    <>
      <h2>
        <span style={{ color: "#ed1b76" }} className="display-1 me-3">
          &#125;
        </span>
        Welcome to the Calamari Game.
        <span style={{ color: "#ed1b76" }} className="display-1 ms-3">
          &#123;
        </span>
      </h2>
      <div className="d-flex justify-content-center mt-3">
        <div className="me-3">
          <HostButton socket={socket} />
        </div>
      </div>
      <CalamariShapes />
    </>
  )
}

export default HostPage
