/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import Player from "../assets/player.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bridgeDeath from "../assets/bridgeDeath.gif"


const GlassBridge = ({ answer, setAnswer }) => {
  const [picked1, setPicked1] = useState(false)
  const [picked2, setPicked2] = useState(false)
  const [picked3, setPicked3] = useState(false)
  const [picked4, setPicked4] = useState(false)
  const [picked5, setPicked5] = useState(false)
  const [picked6, setPicked6] = useState(false)
  const [picked7, setPicked7] = useState(false)
  const [picked8, setPicked8] = useState(false)
  const [failed, setFailed] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

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
      return;
    }

    var myTarget = e.target.id;
    console.log(myTarget);
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
      default:
        return
    }
  }

  return (
    <div>
      {!failed && 
        <div>
          <p className="text-center">Step on the right tile. Don't Fall.</p>
          <p className="text-center readable" style={{ color: "white" }}><i>Hint: Sacrifice some friends to survive this bridge.</i></p>
          <div className="row justify-content-center flex-lg-col flex-row position-relative">
            {succeeded && <div style={{ right: "0" }} className="position-absolute top-50 translate-middle-y">
              {/* <img className="playerImg" src={Player} alt="player icon" /> */}
              <h3 className="m-3 squidGreen">You Survived!</h3>
            </div>}
            {/* top row */}
            <div className="d-flex justify-content-center flex-lg-row flex-column col">
              {/* button 1 */}
              <div><button id="1" onClick={clickMe1 ? handleClick : console.log('no')} className="bridgeTile" style={
                picked1
                  ? { backgroundColor: "#ed1b76" }
                  : { backgroundColor: "#grey" }
              }>
                {picked1 && <i className="display-1 fa-solid fa-shoe-prints"></i>}
                {clickMe1 ? "Click one Of Us" : ""}
              </button></div>

              {/* button 3 */}
              <div><button id="3" onClick={clickMe3 ? handleClick : console.log('no')} className="bridgeTile" style={
                picked3
                  ? { backgroundColor: "#ed1b76" }
                  : { backgroundColor: "#grey" }
              }>
                {clickMe3 ? "Click one Of Us" : ""}
                {picked3 && <i className="display-1 fa-solid fa-shoe-prints"></i>}
              </button></div>

              {/* button 5 */}
              <div><button id="5" onClick={clickMe5 ? handleClick : console.log('no')} className="bridgeTile ">
                {clickMe5 ? "Click one Of Us" : ""}
                {picked5 && <i className="display-1 fa-solid fa-skull-crossbones"></i>}
              </button></div>
              {/* button 7 */}
              <div><button id="7" onClick={clickMe7 ? handleClick : console.log('no')} className="bridgeTile" style={
                picked7
                  ? { backgroundColor: "#ed1b76" }
                  : { backgroundColor: "#grey" }
              }>
                {clickMe7 ? "Click one Of Us" : ""}
                {picked7 && <i className="display-1 fa-solid fa-shoe-prints"></i>}
              </button></div>
            </div>

            {/* bottom row */}
            {/* button 2 */}
            <div className="d-flex justify-content-center flex-lg-row flex-column col">
              <div><button id="2" onClick={clickMe2 ? handleClick : console.log('no')} className="bridgeTile">
                {clickMe2 ? "Click one Of Us" : ""}
                {picked2 && <i className="display-1 fa-solid fa-skull-crossbones"></i>}
              </button></div>
              {/* button 4 */}
              <div><button id="4" onClick={clickMe4 ? handleClick : console.log('no')} className="bridgeTile">
                {clickMe4 ? "Click one Of Us" : ""}
                {picked4 && <i className="display-1 fa-solid fa-skull-crossbones"></i>}
              </button></div>
              {/* button 6 */}
              <div><button id="6" onClick={clickMe6 ? handleClick : console.log('no')} className="bridgeTile" style={
                picked6
                  ? { backgroundColor: "#ed1b76" }
                  : { backgroundColor: "#grey" }
              }>
                {clickMe6 ? "Click one Of Us" : ""}
                {picked6 && <i className="display-1 fa-solid fa-shoe-prints"></i>}
              </button></div>
              {/* button 8 */}
              <div><button id="8" onClick={clickMe8 ? handleClick : console.log('no')} className="bridgeTile" style={
                picked8
                  ? { backgroundColor: "#ed1b76" }
                  : { backgroundColor: "#grey" }
              }>
                {clickMe8 ? "Click one Of Us" : ""}
                {picked7 && <i className="display-1 fa-solid fa-skull-crossbones"></i>}
              </button></div>
            </div>
          </div>
        </div>
}
       {failed && <div className="position-absolute start-50 top-50 translate-middle">
          <h1 style={{color: "white"}}>You died</h1>
          <img src={bridgeDeath} alt="glass bridge death gif" />
        </div>}
    </div>
  )
}

export default GlassBridge
