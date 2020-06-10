curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}"

echo
