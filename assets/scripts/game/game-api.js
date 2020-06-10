'use strict'
const confg =

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/new-game'
    method: 'POST',
  })
}
