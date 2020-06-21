'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/new-game',
    method: 'POST',
    header: {
      Authorization: 'Token token' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'PATCH',
    header: {
      Authorization: 'Token token' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'x'
        },
        over: false
      }
    }
  })
}
module.exports = {
  createGame,
  updateGame
}
