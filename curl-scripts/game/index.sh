curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
--include \
--request GET \
--header "Authorization: Bearer ${TOKEN}"

echo
