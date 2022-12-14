/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react"

const Trivia2 = ({ setAnswer }) => {
  let answer = ""
  //keep track of clicked button
  const [picked1, setPicked1] = useState(false)
  const [picked2, setPicked2] = useState(false)
  const [picked3, setPicked3] = useState(false)
  const [picked4, setPicked4] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setPicked1(false)
    setPicked2(false)
    setPicked3(false)
    setPicked4(false)

    //swicth statement when clicked
    switch (e.target.id) {
      case "1":
        answer = e.target.value
        setPicked1(true)
        setAnswer(true)
        break
      case "2":
        answer = e.target.value
        setPicked2(true)
        setAnswer(false)
        break
      case "3":
        answer = e.target.value
        setPicked3(true)
        setAnswer(false)
        break
      case "4":
        answer = e.target.value
        setPicked4(true)
        setAnswer(false)
        break
      default:
        return
    }
  }

  return (
    <div className="row justify-content-center">
      <p className="text-center">
        What is the monetary prize of the Squid Game?
      </p>
      <div className="row row-cols-2 g-3 col-lg-4 col-md-6 col-sm-10 col-12 position-absolute top-50 translate-middle-y">
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked1
                ? {
                    backgroundColor: "#588300",
                    border: "10px solid #689c00",
                  }
                : {
                    backgroundColor: "#77b300",
                    border: "10px solid #689c00",
                  }
            }
            id="1"
            className="btn btn-success game-btn w-100"
            onClick={handleClick}
          >
            45.6 Billion Won
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked2
                ? {
                    backgroundColor: "rgb(132, 0, 0)",
                    border: "10px solid rgb(155, 0, 0)",
                  }
                : {
                    backgroundColor: "#c00",
                    border: "10px solid rgb(155, 0, 0)",
                  }
            }
            id="2"
            className="btn btn-danger game-btn w-100"
            onClick={handleClick}
          >
            65.4 Billion Won
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked3
                ? {
                    backgroundColor: "rgb(155, 83, 0)",
                    border: "10px solid rgb(217, 116, 0)",
                  }
                : {
                    backgroundColor: "#f80",
                    border: "10px solid rgb(217, 116, 0)",
                  }
            }
            id="3"
            className="btn btn-warning game-btn w-100"
            onClick={handleClick}
          >
            123 Billion Won
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked4
                ? {
                    backgroundColor: "rgb(106, 35, 142)",
                    border: "10px solid rgb(127, 42, 170)",
                  }
                : {
                    backgroundColor: "#93c",
                    border: "10px solid rgb(127, 42, 170)",
                  }
            }
            id="4"
            className="btn btn-info game-btn w-100"
            onClick={handleClick}
          >
            321 Billion Won
          </button>
        </div>
      </div>
      {answer && <p className="text-center">Your answer: {answer}</p>}
    </div>
  )
}

export default Trivia2
