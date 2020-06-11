'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/new-game',
    method: 'POST',
    header: {
      Authorization: 'Token token' + store.user.token
    }
  })
}

module.exports = {
  createGame
}
