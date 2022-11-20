Feature: delete post

@user1 @web
Scenario: create   post Ok 
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I Lw enter email "<USERNAME>"
  And I wait for 2 seconds
  And I Lw enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I Lw click in sign in
  Then I Lw expect see page "http://localhost:3001/ghost/#/dashboard"
  And I Lw click  over post "este es un post de pruebas"
  And I wait for 2 seconds
  And I Lw click button detail 
  And I wait for 2 seconds
  And I Lw click button delete post 
  And I wait for 2 seconds
  And I Lw click button confirm delete 
  Then  I Lw expect confirm delete "este es un post de pruebas"