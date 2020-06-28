// const store = require('../store')

const createGameSuccess = function (data) {
  console.log(' new game created')
  $('#game-message').text('New Game Started')
}

// const onCreateGameFailure = function (error)

module.exports = {
  createGameSuccess
}
