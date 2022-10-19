// game picking logic
const pickGame = (gameArray, playedGamesArray) => {
  if (gameArray.length == playedGamesArray.length) return null
  let pickedGame = gameArray[Math.floor(Math.random() * gameArray.length)]
  while (playedGamesArray.includes(pickedGame)) {
    pickedGame = gameArray[Math.floor(Math.random() * gameArray.length)]
  }
  playedGamesArray.push(pickedGame)
  return pickedGame
}

module.exports = pickGame
