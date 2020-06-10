curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
--include \
--request PATCH \
--header "Content-Type: aplication/json" \
--data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": "'"${OVER}"'"
  }
}'

echo
