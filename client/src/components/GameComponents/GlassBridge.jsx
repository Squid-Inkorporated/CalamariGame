/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import bridgeDeath from "../../assets/bridgeDeath.gif"

const GlassBridge = ({ answer, setAnswer }) => {
  const [picked1, setPicked1] = useState(false)
  const [picked2, setPicked2] = useState(false)
  const [picked3, setPicked3] = useState(false)
  const [picked4, setPicked4] = useState(false)
  const [picked5, setPicked5] = useState(false)
  const [picked6, setPicked6] = useState(false)
  const [picked7, setPicked7] = useState(false)
  const [picked8, setPicked8] = useState(false)
  const [failed, setFailed] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  const [clickMe1, setClickMe1] = useState(true)
  const [clickMe2, setClickMe2] = useState(true)
  const [clickMe3, setClickMe3] = useState(false)
  const [clickMe4, setClickMe4] = useState(false)
  const [clickMe5, setClickMe5] = useState(false)
  const [clickMe6, setClickMe6] = useState(false)
  const [clickMe7, setClickMe7] = useState(false)
  const [clickMe8, setClickMe8] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    if (failed || succeeded) {
      return
    }

    var myTarget = e.target.id
    console.log(myTarget)
    //swicth statement when clicked
    switch (e.target.id) {
      case "1":
        setPicked1(true)
        setPicked2(true)
        setClickMe1(false)
        setClickMe2(false)
        setClickMe3(true)
        setClickMe4(true)
        break
      case "2":
        setAnswer(false)
        setFailed(true)
        break
      case "3":
        setPicked3(true)
        setPicked4(true)
        setClickMe3(false)
        setClickMe4(false)
        setClickMe5(true)
        setClickMe6(true)
        break
      case "4":
        setAnswer(false)
        setFailed(true)
        break
      case "5":
        setAnswer(false)
        setFailed(true)
        break
      case "6":
        setPicked6(true)
        setPicked5(true)
        setClickMe5(false)
        setClickMe6(false)
        setClickMe7(true)
        setClickMe8(true)
        break
      case "7":
        setPicked7(true)
        setAnswer(true)
        setSucceeded(true)
        setClickMe7(false)
        setClickMe8(false)
        break
      case "8":
        setAnswer(false)
        setFailed(true)
        break
      default:
        return
    }
  }

  return (
    <div>
      {!failed && (
        <div>
          <p className="text-center">Step on the right tile. Don't Fall.</p>
          <p className="text-center readable" style={{ color: "white" }}>
            <i>Hint: Sacrifice some friends to survive this bridge.</i>
          </p>
          <div className="position-relative">
            {succeeded ? (
              <div className="position-absolute top-50 start-50 translate-middle-x">
                <h3 className="m-3 squidGreen">You Survived!</h3>
              </div>
            ) : (
              <div className="row justify-content-center flex-lg-column flex-xl-column flex-row position-relative">
                <div className="d-flex justify-content-center align-items-end flex-lg-row flex-column p-0 col">
                  {/* button 1 */}
                  <div>
                    <button
                      id="1"
                      onClick={clickMe1 ? handleClick : console.log("no")}
                      className="bridgeTile"
                      style={
                        picked1
                          ? { backgroundColor: "#ed1b76" }
                          : { backgroundColor: "#grey" }
                      }
                    >
                      {picked1 && (
                        <div className="display-1">
                          <FontAwesomeIcon icon={solid("shoe-prints")} />
                        </div>
                      )}
                      {clickMe1 ? "Tap one of us" : ""}
                    </button>
                  </div>
                  {/* button 3 */}
                  <div>
                    <button
                      id="3"
                      onClick={clickMe3 ? handleClick : console.log("no")}
                      className="bridgeTile"
                      style={
                        picked3
                          ? { backgroundColor: "#ed1b76" }
                          : { backgroundColor: "#grey" }
                      }
                    >
                      {clickMe3 ? "Tap one of us" : ""}
                      {picked3 && (
                        <div className="display-1">
                          <FontAwesomeIcon icon={solid("shoe-prints")} />
                        </div>
                      )}
                    </button>
                  </div>
                  {/* button 5 */}
                  <div>
                    <button
                      id="5"
                      onClick={clickMe5 ? handleClick : console.log("no")}
                      className="bridgeTile "
                    >
                      {clickMe5 ? "Tap one of us" : ""}
                      {picked5 && (
                        <div className="display-1">
                          <FontAwesomeIcon icon={solid("skull-crossbones")} />
                        </div>
                      )}
                    </button>
                  </div>
                  {/* button 7 */}
                  <div>
                    <button
                      id="7"
                      onClick={clickMe7 ? handleClick : console.log("no")}
                      className="bridgeTile"
                      style={
                        picked7
                          ? { backgroundColor: "#ed1b76" }
                          : { backgroundColor: "#grey" }
                      }
                    >
                      {clickMe7 ? "Tap one of us" : ""}
                      {picked7 && (
                        <div className="display-1">
                          <FontAwesomeIcon icon={solid("shoe-prints")} />
                        </div>
                      )}
                    </button>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-start flex-lg-row flex-column p-0 col">
                  {/* button 2 */}
                  <div>
                    <button
                      id="2"
                      onClick={clickMe2 ? handleClick : console.log("no")}
                      className="bridgeTile"
                    >
                      {clickMe2 ? "Tap one of us" : ""}
                      {picked2 && (
                        <div className="display-1">
                          <FontAwesomeIcon icon={solid("skull-crossbones")} />
                        </div>
                      )}
                    </button>
                  </div>
                  {/* button 4 */}
                  <div>
                    <button
                      id="4"
                      onClick={clickMe4 ? handleClick : console.log("no")}
                      className="bridgeTile"
                    >
                      {clickMe4 ? "Tap one of us" : ""}
                      {picked4 && (
                        <div className="display-1">
                          <FontAwesomeIcon icon={solid("skull-crossbones")} />
                        </div>
                      )}
                    </button>
                  </div>
                  {/* button 6 */}
                  <div>
                    <button
                      id="6"
                      onClick={clickMe6 ? handleClick : console.log("no")}
                      className="bridgeTile"
                      style={
                        picked6
                          ? { backgroundColor: "#ed1b76" }
                          : { backgroundColor: "#grey" }
                      }
                    >
                      {clickMe6 ? "Tap one of us" : ""}
                      {picked6 && (
                        <div className="display-1">
                          <FontAwesomeIcon icon={solid("shoe-prints")} />
                        </div>
                      )}
                    </button>
                  </div>
                  {/* button 8 */}
                  <div>
                    <button
                      id="8"
                      onClick={clickMe8 ? handleClick : console.log("no")}
                      className="bridgeTile"
                      style={
                        picked8
                          ? { backgroundColor: "#ed1b76" }
                          : { backgroundColor: "#grey" }
                      }
                    >
                      {clickMe8 ? "Tap one of us" : ""}
                      {picked7 && (
                        <div className="display-1">
                          <FontAwesomeIcon icon={solid("skull-crossbones")} />
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* top row */}
          </div>
        </div>
      )}
      {failed && (
        <div className="position-absolute start-50 top-50 translate-middle">
          <h1 style={{ color: "white" }}>You died</h1>
          <img src={bridgeDeath} alt="glass bridge death gif" />
        </div>
      )}
    </div>
  )
}

export default GlassBridge
