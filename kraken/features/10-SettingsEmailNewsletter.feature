Feature: Escenario 5  E2E Ghost Settings Email Newsletter

@user1  @web
Scenario: Como usuario quiero ingresar a la pagina Ghost y navegar por la opción de Settings Email Newsletter
Given I navigate to page "<URL>"
And I wait for 3 seconds
When I enter email "<Identificacion>"
And I wait for 3 seconds
And I enter password "<Password>"
And I click next
And I wait for 3 seconds
And I click settings
And I wait for 3 seconds
And I navigate to page "<URL6>"
And I wait for 3 seconds
And I navigate to page "<URL7>"
And I wait for 3 seconds
And I click name
And I wait for 3 seconds
And I enter the text "<texto3>"
And I wait for 10 seconds