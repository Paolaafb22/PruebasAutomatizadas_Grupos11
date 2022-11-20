Feature: List Tags  GHOST

@user1 @web
Scenario: Como  usuario 1 inicio sesion web y tengo la lista de tags en GHOST
  Given I navigate to page "<URL1>"
  And I wait for 4 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click Sign in->
  And I click Tags
  And I wait for 2 seconds
  Then I see Ghost Tags
  And I wait for 3 seconds
 


 