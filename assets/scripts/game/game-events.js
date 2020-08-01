const api = require('./game-api')
const ui = require('./game-ui')
const store = require('./../store')

const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').html('')
  $('#game-board').show()
  store.currentPlayer = 'x'
  $('#each-turn').text('Go' + ' ' + currentPlayer + '!')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

let currentPlayer = 'x'
let winner = false

const onUpdateGame = function (event) {
  event.preventDefault()
  console.log('clicked')

  if ($(event.target).is(':empty')) {
    store.game.cells[$(event.target).data('cell-index')] = currentPlayer
    $(event.target).text(currentPlayer)
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }

    const box = store.game.cells
    if (box[0] === box[1] && box[1] === box[2] && box[0] !== '') {
      store.game.over = true
      $('#game-message').text('won!')
      winner = true
    } else if (box[3] === box[4] && box[4] === box[5] && box[3] !== '') {
      $('game-message').text('won!')
      store.game.over = true
      winner = true
    } else if (box[6] === box[7] && box[7] === box[6] && box[8] !== '') {
      $('game-message').text('won!')
      store.game.over = true
      winner = true
    } else if (box[2] === box[5] && box[5] === box[8] && box[2] !== '') {
      $('game-message').text('won!')
      store.game.over = true
      winner = true
    } else if (box[1] === box[4] && box[4] === box[7] && box[1] !== '') {
      $('game-message').text('won!')
      store.game.over = true
      winner = true
    } else if (box[0] === box[3] && box[3] === box[6] && box[0] !== '') {
      $('game-message').text('won!')
      store.game.over = true
      winner = true
    } else if (box[0] === box[4] && box[4] === box[8] && box[0] !== '') {
      $('game-message').text('won!')
      store.game.over = true
      winner = true
    } else if (box[2] === box[4] && box[4] === box[6] && box[2] !== '') {
      $('game-message').text('won!')
      store.game.over = true
      winner = true
    }
    const index = $(event.target).data('cell-index')
    if (winner === true && store.game.over === true) {
      $('.box').off('click', onUpdateGame)
      api.updateGame(index, currentPlayer)
        .then(ui.onUpdateGameSuccess)
        .catch(ui.onUpdateGameFailure)
    }
  }
}
const onGamesIndex = function (event) {
  event.preventDefault()

  api.gamesIndex()
    .then(ui.onGamesIndexSuccess)
    .catch(ui.onGamesIndexFailure)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  onGamesIndex
}
