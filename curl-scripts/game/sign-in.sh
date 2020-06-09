curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
--include \
--request POST \
--header "Content-type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo
