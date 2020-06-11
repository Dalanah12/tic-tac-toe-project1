'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign up Successful' + response.user.email)
}

const onSignUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Successfully Signed In' + response.user.email)
  store.user = response.user
  $('#hide').show()
  $('#show').hide()
  $('#new-game').show()
}

const onSignInFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign in Failed')
}

const onChangePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Password Change Success')
}

const onChangePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Password Change Failed')
}

const onSignOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Signed Out Successfully')
  $('#show').show()
  $('#hide').hide()
}

const onSignOutFailure = function () {
  $('message').text('Sign Out Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
