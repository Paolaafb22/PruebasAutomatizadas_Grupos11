Feature: Escenario 1  E2E Ghost Settings general

@user1  @web
Scenario: Como usuario quiero ingresar a la pagina Ghost y navegar por la opción de Settings general
Given I navigate to page "<URL>"
And I wait for 3 seconds
When I enter email "<Identificacion>"
And I wait for 3 seconds
And I enter password "<Password>"
And I click next
And I wait for 3 seconds
And I click settings
And I wait for 3 seconds
And I navigate to page "<URL2>"
And I wait for 3 seconds
And I click expand
And I wait for 3 seconds
And I enter the text "<texto>"
And I wait for 10 seconds



