Feature: Edit GHOST TAG

@user1 @web
Scenario: Como  usuario 1 inicio sesion web GHOST y edito nombre de TAG
  Given I navigate to page "<URL1>"
  And I wait for 4 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click Sign in->
  And I wait for 2 seconds
  And I click Tags
  And I wait for 2 seconds
  And I Click to edit Tag "<TAG_NAME>"
  And I wait for 2 seconds
  And I enter edit Tag name "<TAG_NAME>"
  And I wait for 2 seconds
  And I click Save Tag Name
  And I wait for 2 seconds
  And I click list Tags
  And I wait for 2 seconds
  Then I see New Ghost Tag "<TAG_NAME>"
  And I wait for 2 seconds
  
  

  

 


 