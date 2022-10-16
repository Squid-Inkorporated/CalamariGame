import React from "react"
import RipSquid from "../assets/rip_squid.png"

const GameOver = ({ playerName }) => {
  return (
    <div className="text-center">
      <h1>Calamari Game</h1>
      <div className="row justify-content-center">
        <p>Sorry, {playerName}, you have not survived!</p>
        <div className="col">
          <img src={RipSquid} alt="" className="w-100" />
        </div>
      </div>
    </div>
  )
}

export default GameOver
