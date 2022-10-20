import React, { useState } from "react"

const TugOfWar = ({ answer, setAnswer }) => {
  if (answer === null) setAnswer(0)
  return (
    <div>
      <button
        style={{ top: "70%" }}
        className="game-btn position-absolute translate-middle"
        onClick={() => setAnswer(answer + 1)}
      >
        Tug Me
      </button>
      {answer && <h2 className="squidGreen">{answer}</h2>}
    </div>
  )
}

export default TugOfWar
