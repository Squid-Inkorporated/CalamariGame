import React from 'react'


const Ball = ({animation}) => {

  const ballStyles = {
    backgroundImage: "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
    height: '80px',
    width: '80px',
    borderRadius: "50%",
    position: "absolute",
    animation: `${animation} 5s forwards`
  }

  return (
    <div style={ballStyles}></div>
  )
}

const MoveBall = ({playerMarble}) => {
  return (
    <div> 
      <div className='marbleDiv1'>
        <Ball animation={playerMarble < 50 ? "mymove1" : "mymove2"} />
      </div>
    </div>
  )
}

export default MoveBall