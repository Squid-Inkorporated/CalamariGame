/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"

const RedLightGreenLight = ({ setAnswer }) => {
  const [color, setColor] = useState("green")
  const [count, setCount] = useState(0)
  const [succeeded, setSucceeded] = useState(false)
  const [failed, setFailed] = useState(false)
  const [timer, setTimer] = useState(5000)

  useEffect(() => {
    const myInterval = () => {
      if (timer === 1500) setColor("yellow")
      if (timer === 1000) setColor("red")
      if (timer > 0) {
        setTimer((state) => state - 500)
      } else {
        setTimer(5000)
        setColor("green")
        clearInterval(interval)
      }
    }
    const interval = setInterval(myInterval, 500)
    return () => {
      clearInterval(interval)
    }
  }, [timer])

  useEffect(() => {
    if (count >= 30) {
      setSucceeded(true)
      setAnswer(true)
    }
  }, [count])

  const handleClick = () => {
    if (succeeded || failed) return
    if (color === "red") {
      setFailed(true)
      setAnswer(false)
    } else {
      setCount(count + 1)
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div
          style={{
            width: "25vw",
            height: "25vw",
            backgroundColor: `${color}`,
            border: "4px solid white",
          }}
          className="col-auto rounded-circle"
        ></div>
      </div>
      {failed ? <p>Yikes! You got GOT! Better luck next time.</p> : <p> </p>}
      <p className="squidGreen h2">{count}</p>
      {succeeded ? (
        <p>Great job! You survived this round...</p>
      ) : (
        <button className="btn game-btn" onClick={handleClick}>
          Run!
        </button>
      )}
    </div>
  )
}

export default RedLightGreenLight
