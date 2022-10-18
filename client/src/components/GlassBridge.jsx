/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"

const GlassBridge = ({ answer, setAnswer }) => {
  //keep track of clicked button
  const [picked1, setPicked1] = useState(false)
  const [picked2, setPicked2] = useState(false)
  const [picked3, setPicked3] = useState(false)
  const [picked4, setPicked4] = useState(false)
  const [picked5, setPicked5] = useState(false)
  const [picke6, setPicked6] = useState(false)
  const [picked7, setPicked7] = useState(false)
  const [picked8, setPicked8] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setPicked1(false)
    setPicked2(false)
    setPicked3(false)
    setPicked4(false)
    setPicked5(false)
    setPicked6(false)
    setPicked7(false)
    setPicked8(false)

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
      case "5":
        setPicked4(true)
        setAnswer(false)
        break
      case "6":
        setPicked4(true)
        setAnswer(false)
        break
      case "7":
        setPicked4(true)
        setAnswer(false)
        break
      case "8":
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
      {/* top row */}
      <div className="row">
        <div className="col"><button onClick={handleClick} className="bridgeTile"></button></div>
        <div className="col"><button onClick={handleClick} className="bridgeTile"></button></div>
        <div className="col"><button onClick={handleClick} className="bridgeTile"></button></div>
        <div className="col"><button onClick={handleClick} className="bridgeTile"></button></div>
      </div>
      {/* bottom row */}
      <div className="row">
        <div className="col"><button onClick={handleClick} className="bridgeTile"></button></div>
        <div className="col"><button onClick={handleClick} className="bridgeTile"></button></div>
        <div className="col"><button onClick={handleClick} className="bridgeTile"></button></div>
        <div className="col"><button onClick={handleClick} className="bridgeTile"></button></div>
      </div>
      <p className="text-center">Your answer: {answer}</p>
    </div>
  )
}

export default GlassBridge
