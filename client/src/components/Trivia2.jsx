/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"

const Trivia = ({ answer, setAnswer }) => {
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
        setPicked1(true)
        setAnswer(false)
        break
      case "2":
        setPicked2(true)
        setAnswer(true)
        break
      case "3":
        setPicked3(true)
        setAnswer(false)
        break
      case "4":
        setPicked4(true)
        setAnswer(false)
        break
      default:
        return
    }
  }

  return (
    <div className="row justify-content-center">
      <p className="text-center">Employees in which shape on their mask have the highest authority?</p>
      <div className="row row-cols-2 col-lg-4 col-md-6 col-sm-10 col-12">
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked1
                ? { backgroundColor: "#ed1b76", border: "#ed1b76 none" }
                : { borderRadius: "20px" }
            }
            id="1"
            className="btn btn-success mt-2 w-100"
            onClick={handleClick}
          >
            Circle
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
            className="btn btn-danger mt-2 w-100"
            onClick={handleClick}
          >
            Square
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
            className="btn btn-warning mt-2 w-100"
            onClick={handleClick}
          >
            Triangle
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
            className="btn btn-info mt-2 w-100"
            onClick={handleClick}
          >
            Star
          </button>
        </div>
      </div>
      <p className="text-center">Your answer: {answer}</p>
    </div>
  )
}

export default Trivia
