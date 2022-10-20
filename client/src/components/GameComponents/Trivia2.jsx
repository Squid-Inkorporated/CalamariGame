/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react"

const Trivia2 = ({ setAnswer }) => {
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
        setResponse("Circle")
        setPicked1(true)
        setAnswer(false)
        break
      case "2":
        setResponse("Square")
        setPicked2(true)
        setAnswer(true)
        break
      case "3":
        setResponse("Triangle")
        setPicked3(true)
        setAnswer(false)
        break
      case "4":
        setResponse("Star")
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
        Employees in which shape on their mask have the highest authority?
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
            Circle
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
            Square
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
            Triangle
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
            Star
          </button>
        </div>
      </div>
      <p className="text-center mt-5 text-white h5">
        Your answer: <span className="squidGreen h2">{response}</span>
      </p>
    </div>
  )
}

export default Trivia2
