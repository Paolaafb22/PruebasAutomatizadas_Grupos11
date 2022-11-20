Feature: Creacion de post

@user1 @web
Scenario: create   post Ok 
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click in sign in
  Then I expect see page "http://localhost:3002/ghost/#/dashboard"
  And I wait for 2 seconds
  And I click in new post
  And  I enter title post "post de automatizacion kraken"
  And I wait for 2 seconds
 