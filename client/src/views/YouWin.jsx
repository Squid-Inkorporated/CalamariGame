import React from "react"
import { Link } from "react-router-dom"
import MoneyPig from "../assets/money-pig.png"

const YouWin = ({ eliminatedPlayers }) => {
  return (
    <div className="position-absolute top-50 translate-middle-y">
      <p>You have won the Calamari Game. Not everyone was this lucky...</p>
      <img className="img-fluid mb-3" src={MoneyPig} alt="Money Pig" />
      <h4>Fallen Players:</h4>
      <ul>
        {eliminatedPlayers &&
          Object.keys(eliminatedPlayers).map((id) => {
            return (
              <li className="text-white" key={id}>
                {eliminatedPlayers[id]}
              </li>
            )
          })}
      </ul>
      <Link className="btn" to="/">
        Again?
      </Link>
    </div>
  )
}

export default YouWin
