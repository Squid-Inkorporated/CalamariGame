import React from "react"
import { Link } from "react-router-dom"
import MoneyPig from "../assets/money-pig.png"

const YouWin = () => {
  return (
    <div className="position-absolute top-50 translate-middle-y">
      <p>You have won the Calamari Game. Hope it was worth it...</p>
      <img className="img-fluid mb-3" src={MoneyPig} alt="Money Pig" />
      <Link className="btn" to="/">
        Again?
      </Link>
    </div>
  )
}

export default YouWin
