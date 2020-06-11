const getFormFields = require('../../../lib/get-form-fields')
const api = require('./game-api')
const ui = require('./game-ui')

const onCreateGame = function (event) {
  console.log('New Game')
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createGame(data)

    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

module.exports = {
  onCreateGame
}
