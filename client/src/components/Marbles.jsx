import { React, useState, useEffect } from 'react'
// import { moveBall } from '../utils/moveBall';
import MoveBall from './MoveBall';
import guards from "../assets/guards.jpg"
import money from "../assets/money.png"


//game principle: throw marble, you survive when you get over 50

const Marbles = ({ setAnswer }) => {


  // function to roll marble/generate random int
  const [playerMarble, setPlayerMarble] = useState(null);
  //button visibility:
  const [visible, setVisible] = useState(true);
  const handleClick = () => {
    // if marble is over 50, send true else send false
    setPlayerMarble(Math.floor(Math.random() * 101));
    setVisible((prev) => !prev);
  }


  useEffect(() => {
    playerMarble > 50 ? setAnswer(true) : setAnswer(false)
  }, [playerMarble])
  

  return (
    <div>
      <h2>Marbles Game</h2>

      {visible && (<button className='btn mt-5 mb-5' onClick={handleClick}>Click to Throw your Marble.</button>)}
      {playerMarble && <p style={{fontSize: "36px"}}> Your marble traveled <span style={{color: "white", fontsize: "bolder"}}className='readable'>{playerMarble}</span> feet.</p>}

      {playerMarble && <MoveBall playerMarble={playerMarble} />}

      <div className='d-flex pull-left ml-5'>
      {(() => {
            let guardLine = [];
            let moneyLine = [];
            for (let i=0; i<7; i++) {
              guardLine.push(<img className='guard' src={guards} alt="guards with coffin" />);
              moneyLine.push(<img className='money' src={money} alt="money" />);
            }
            return guardLine.concat(moneyLine)
          })()}
      </div>
    </div>
  )

}

export default Marbles