import React from "react"
import Calamari from "../assets/calamari.png"

const CalamariShapes = () => {
  return (
    <div>
      <img
        src={Calamari}
        alt="Calamari"
        style={{ position: "fixed", bottom: "0", left: "10px", height: "25vh" }}
      />
      <img
        src={Calamari}
        alt="Calamari"
        style={{
          position: "fixed",
          bottom: "0",
          right: "10px",
          height: "25vh",
        }}
      />
    </div>
  )
}

export default CalamariShapes
