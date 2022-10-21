import React, { useState, useEffect } from "react"
import TugOfWar from "../assets/tug-of-war.png"
import { motion } from "framer-motion"

const HowToPlay = ({ gameName }) => {
  const [timer, setTimer] = useState(4500)
  const [color, setColor] = useState("green")
  useEffect(() => {
    const myInterval = () => {
      if (timer === 1500) setColor("yellow")
      if (timer === 1000) setColor("red")
      if (timer > 0) {
        setTimer((state) => state - 500)
      } else {
        setTimer(4500)
        setColor("green")
        clearInterval(interval)
      }
    }
    const interval = setInterval(myInterval, 500)
    return () => {
      clearInterval(interval)
    }
  }, [timer])
  return (
    <div>
      <div className="row justify-content-center mx-1">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3>How to play</h3>
              </div>
              {(gameName === "Trivia" ||
                gameName === "Trivia 2" ||
                gameName === "Trivia 3") && (
                <p className="mb-0">
                  Select the right answer from multiple options. You have 15
                  seconds to choose and
                  <span className="text-danger"> possibly</span> live!
                </p>
              )}
              {gameName === "Marbles" && (
                <div className="position-relative">
                  <p className="mb-0">
                    Click the button to toss a marble with random velocity.
                  </p>
                  <div style={{ height: "3rem" }}></div>
                  <motion.div
                    className="position-absolute bottom-0 rounded-circle"
                    style={{
                      height: "3rem",
                      width: "3rem",
                      backgroundImage:
                        "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
                    }}
                    initial={{ left: "0%" }}
                    animate={{
                      left: [
                        "calc(0% - 0rem)",
                        "calc(100% - 3rem)",
                        "calc(0% - 0rem)",
                      ],
                      rotate: [0, 360, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  />
                </div>
              )}
              {gameName === "The Popular Thing" && (
                <p className="mb-0">
                  Pick your favorite thing from the provided options. Those who
                  choose the least popular option will be eliminated.
                </p>
              )}
              {gameName === "Tug of War" && (
                <div>
                  <p className="mb-0">
                    Tap tap tap for your life! You have been divided into two
                    teams, and the team who taps the button the most times will
                    be spared. As for the rest...
                  </p>
                  <img className="w-100" src={TugOfWar} alt="Tug of War" />
                </div>
              )}
              {gameName === "Red Light, Green Light" && (
                <div className="d-flex">
                  <p className="mb-0">
                    Run for your life! Tap the button and reach 30 within 15
                    seconds. The light will change from{" "}
                    <span style={{ color: "green" }}>green</span> to{" "}
                    <span style={{ color: "yellow" }}>yellow</span> to{" "}
                    <span style={{ color: "red" }}>red</span>. Do NOT run on a
                    red light!
                  </p>
                  <div
                    style={{
                      width: "20vw",
                      height: "20vw",
                      backgroundColor: `${color}`,
                      border: "4px solid white",
                    }}
                    className="col-auto rounded-circle"
                  ></div>
                </div>
              )}
              {gameName === "Glass Bridge" && (
                <p className="mb-0">
                  Start from LEFT to RIGHT. Pick the right tile and try not to
                  fall.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToPlay
