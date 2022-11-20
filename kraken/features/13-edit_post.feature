Feature: Edicion de post

@user1 @web
Scenario: create   post Ok 
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 5 seconds
  When I Lw enter email "<USERNAME>"
  And I wait for 2 seconds
  And I Lw enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I Lw click in sign in
  Then I Lw expect see dashboard page "http://localhost:3001/ghost/#/dashboard"
  And I Lw click  over post 
  And  I Lw enter detailt in  post
  And I wait for 2 seconds
  Then I Lw expect the post save 