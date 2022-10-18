// game picking logi
const pickGame = (gameArray, playedGamesArray) => {
  let pickedGame = gameArray[Math.floor(Math.random() * gameArray.length)]
  while(playedGamesArray.includes(pickedGame)) {
    pickedGame = gameArray[Math.floor(Math.random() * gameArray.length)];
  }
  playedGamesArray.push(pickedGame);
  return pickedGame;
}

module.exports = pickGame;

// const playedGames = [];
// const gameList = [
//   "Marbles",
//   "RedLightGreenLight",
//   "Trivia2",
//   "Trivia",
//   // "ThePopularThing",
//   // "TugOfWar"
// ]

