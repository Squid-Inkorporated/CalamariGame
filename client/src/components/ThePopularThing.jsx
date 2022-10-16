import React, { useState } from "react"

const ThePopularThing = () => {
  let answer = null
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
        answer = false
        break
      case "2":
        setPicked2(true)
        answer = false
        break
      case "3":
        setPicked3(true)
        answer = true
        break
      case "4":
        setPicked4(true)
        answer = false
        break
      default:
        return
    }
  }
  return (
    <div className="row justify-content-center">
      <p className="text-center">What's your favorite Ninja Snack?</p>
      <div className="row row-cols-2 col-lg-4 col-md-6 col-sm-10 col-12">
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked1
                ? { backgroundColor: "#ed1b76" }
                : { borderRadius: "20px" }
            }
            id="1"
            className="btn btn-success mt-2 w-100"
            onClick={handleClick}
          >
            Pop Tarts
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked2
                ? { backgroundColor: "#ed1b76" }
                : { borderRadius: "20px" }
            }
            id="2"
            className="btn btn-danger mt-2 w-100"
            onClick={handleClick}
          >
            Granola Bars
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked3
                ? { backgroundColor: "#ed1b76" }
                : { borderRadius: "20px" }
            }
            id="3"
            className="btn btn-warning mt-2 w-100"
            onClick={handleClick}
          >
            Chips
          </button>
        </div>
        <div className="col justify-content-center d-flex">
          <button
            style={
              picked4
                ? { backgroundColor: "#ed1b76" }
                : { borderRadius: "20px" }
            }
            id="4"
            className="btn btn-info mt-2 w-100"
            onClick={handleClick}
          >
            Digestives
          </button>
        </div>
      </div>
      <p className="text-center">Your answer: {answer}</p>
    </div>
  )
}

export default ThePopularThing
