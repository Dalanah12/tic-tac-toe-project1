'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#sign-up').text('Sign up Successful' + response.user.email)
}

const onSignUpFailure = function () {
  $('form').trigger('reset')
  $('#sign-up').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#sign-in').text('Successfully Signed In' + response.user.email)
  store.user = response.user
}
const onSignInFailure = function (response) {
  $('form').trigger('reset')
  $('#sign-in').text('Sign in Failed')
}

const onChangePasswordSuccess = function () {
  $('form').trigger('reset')
  $('change-password').text('Password Change Success')
}

const onChangePasswordFailure = function () {
  $('form').trigger('reset')
  $('#change-password').text('Password Change Failed')
}

const onSignOutSuccess = function () {
  $('form').trigger('reset')
  $('#sign-out').text('Signed Out Successfully')
}

const onSignOutFailure = function () {
  $('sign-out').text('Sign Out Failed')
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
