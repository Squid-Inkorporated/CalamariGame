/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react"

const Trivia = ({ setAnswer }) => {
  //keep track of clicked button
  const [picked1, setPicked1] = useState(false)
  const [picked2, setPicked2] = useState(false)
  const [picked3, setPicked3] = useState(false)
  const [picked4, setPicked4] = useState(false)
  const [response, setResponse] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    setPicked1(false)
    setPicked2(false)
    setPicked3(false)
    setPicked4(false)

    //swicth statement when clicked
    switch (e.target.id) {
      case "1":
        setResponse(453)
        setPicked1(true)
        setAnswer(false)
        break
      case "2":
        setResponse(329)
        setPicked2(true)
        setAnswer(false)
        break
      case "3":
        setResponse(456)
        setPicked3(true)
        setAnswer(true)
        break
      case "4":
        setResponse(818)
        setPicked4(true)
        setAnswer(false)
        break
      default:
        return
    }
  }

  return (
    <div className="row justify-content-center">
      <p className="text-center">How many contestants were in Squid Game?</p>
      <div className="row row-cols-2 g-3 col-lg-4 col-md-6 col-sm-10 col-12 position-absolute top-50 translate-middle-y">
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked1
                ? { backgroundColor: "#ed1b76", border: "#ed1b76 none" }
                : { borderRadius: "20px" }
            }
            id="1"
            className="btn btn-success game-btn mt-2 w-100"
            onClick={handleClick}
          >
            453
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked2
                ? { backgroundColor: "#ed1b76", border: "#ed1b76 none" }
                : { borderRadius: "20px" }
            }
            id="2"
            className="btn btn-danger game-btn mt-2 w-100"
            onClick={handleClick}
          >
            329
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked3
                ? { backgroundColor: "#ed1b76", border: "#ed1b76 none" }
                : { borderRadius: "20px" }
            }
            id="3"
            className="btn btn-warning game-btn mt-2 w-100"
            onClick={handleClick}
          >
            456
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked4
                ? { backgroundColor: "#ed1b76", border: "#ed1b76 none" }
                : { borderRadius: "20px" }
            }
            id="4"
            className="btn btn-info game-btn mt-2 w-100"
            onClick={handleClick}
          >
            818
          </button>
        </div>
      </div>
      <p className="text-center">Your answer: {response}</p>
    </div>
  )
}

export default Trivia
