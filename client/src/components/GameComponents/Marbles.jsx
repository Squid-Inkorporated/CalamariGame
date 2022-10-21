import { React, useState, useEffect } from "react"
// import { moveBall } from '../utils/moveBall';
import MoveBall from "../MoveBall"
import guards from "../../assets/guards.jpg"
import money from "../../assets/money.png"

//game principle: throw marble, you survive when you get over 50

const Marbles = ({ setAnswer }) => {
  // function to roll marble/generate random int
  const [playerMarble, setPlayerMarble] = useState(null)
  //button visibility:
  const [visible, setVisible] = useState(true)
  const handleClick = () => {
    // if marble is over 50, send true else send false
    setPlayerMarble(Math.floor(Math.random() * 151))
    setVisible((prev) => !prev)
  }

  useEffect(() => {
    playerMarble > 50 ? setAnswer(true) : setAnswer(false)
  }, [playerMarble])

  return (
    <div>
      {visible ? (
        <button className="btn mt-5 mb-5" onClick={handleClick}>
          Click to Throw your Marble.
        </button>
      ) : playerMarble < 50 ? (
        <p className="text-white h4 mt-5">
          {" "}
          Sorry, Your marble traveled only{" "}
          <span
            style={{ fontsize: "bolder", color: "#ed1b76" }}
            className="readable"
          >
            {playerMarble}
          </span>{" "}
          feet.
        </p>
      ) : (
        <p className="text-white h4 mt-5">
          {" "}
          Congratulations, Your marble traveled{" "}
          <span
            style={{ fontsize: "bolder", color: "#ed1b76" }}
            className="readable"
          >
            {playerMarble}
          </span>{" "}
          feet. You passed the survival goal.
        </p>
      )}

      {playerMarble && (
        <MoveBall playerMarble={playerMarble} className="marbleDiv" />
      )}
      <div className="position-absolute top-50 start-50 translate-middle-x w-100">
        <div className="d-flex">
          {(() => {
            let guardLine = []
            let moneyLine = []
            for (let i = 0; i < 3; i++) {
              guardLine.push(
                <img className="guard" src={guards} alt="guards with coffin" />
              )
              moneyLine.push(<img className="money" src={money} alt="money" />)
            }
            return guardLine.concat(moneyLine)
          })()}
        </div>
      </div>
    </div>
  )
}

export default Marbles
