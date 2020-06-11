// const store = require('../store')

const createGameSuccess = function (response) {
  console.log('game created')
  $('form').trigger('reset')
  $('#game-message').text('New Game Started')
}

module.exports = {
  createGameSuccess
}
