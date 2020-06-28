const api = require('./game-api')
const ui = require('./game-ui')
const store = require('./../store')

const onCreateGame = function (event) {
  console.log('new game')
  event.preventDefault()
  console.log('clicked')
  $('#game-board').show()
  $('.box').on('click',onUpdateGame)

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

let winner = false
let currentPlayer = 'x'
module.exports = {
  onCreateGame,
  onUpdateGame
}
