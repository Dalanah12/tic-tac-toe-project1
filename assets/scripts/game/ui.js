const onSignUpSuccess = function(response) {
  $('#message').text('Signed up Successfully' + " " + response.user.email)
  $('form').trigger('reset')
}

const onSignUpFailure = function(response) {
  $('#message').text('Sign up Failed')
  $('form').trigger('reset')
}
