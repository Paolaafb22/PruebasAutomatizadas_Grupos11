Feature: Login succes to GHOST

@user1 @web
Scenario: Como  usuario 1 inicio sesion web GHOST
  Given I navigate to page "<URL1>"
  And I wait for 4 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click Sign in->
  And I wait for 3 seconds
  Then I see Ghost Dashboard
  And I wait for 2 seconds


 