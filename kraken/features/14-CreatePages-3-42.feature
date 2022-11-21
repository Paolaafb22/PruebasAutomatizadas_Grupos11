Feature: Create page succes  GHOST

@user1 @web
Scenario: Como  usuario 1 inicio sesion web GHOST y creo page nuevo con  nombre y contenido
  Given I navigate to page "<URL1>"
  And I wait for 3 seconds
  When I enter email "<USERNAME1>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 1 seconds
  And I click Sign in->
  And I wait for 1 seconds
  And I click on Page
  And I wait for 3 seconds
  And I click on New Page option
  And I wait for 3 seconds
  And I write a title on the Editor "<title_page>"
  And I wait for 2 seconds
  And I I write the text content on the Editor "<textcontent>"
  And I wait for 3 seconds
  

 


 


 