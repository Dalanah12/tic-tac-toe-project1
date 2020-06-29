const store = require('./../store')

const onCreateGameSuccess = function (response) {
  store.game = response.game
  store.game = response.game
  $('.box').text('')
  console.log('new game created')
  $('#game-message').text('New Game Started')
}

const onCreateGameFailure = function (response) {
  $('#game-message').text('New Game Failed!')
}

const onUpdateGameSuccess = function (response) {
  $('#game-message').text('Game Over!')
}

const onUpdateGameFailure = function () {

}
// const onGamesIndexSuccess
// const onGameIndexFailure

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
