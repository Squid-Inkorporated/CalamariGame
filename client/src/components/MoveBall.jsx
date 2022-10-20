import React from "react"
import { motion } from "framer-motion"

const MoveBall = ({ playerMarble }) => {
  return (
    <div>
      <div>
        <motion.div
          className="position-absolute rounded-circle"
          style={{
            top: "40%",
            height: "3rem",
            width: "3rem",
            backgroundImage:
              "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
          }}
          animate={
            playerMarble > 50
              ? {
                  left: ["calc(5% + 0rem)", "calc(100% - 4rem)"],
                  rotate: [0, 360],
                }
              : {
                  left: ["calc(5% + 0rem)", "calc(50% - 3rem)"],
                  rotate: [0, 360],
                }
          }
          transition={{ duration: 2 }}
        />
      </div>
    </div>
  )
}

export default MoveBall
