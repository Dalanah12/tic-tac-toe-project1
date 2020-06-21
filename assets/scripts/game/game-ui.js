// const store = require('../store')

const createGameSuccess = function (response) {
  console.log(' new game created')
  $('#game-message').text('New Game Started')
  $('#game-board').show()
}

module.exports = {
  createGameSuccess
}
