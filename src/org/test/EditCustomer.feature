#Author: ShayinAlmas
@editCustomer
Feature: To test edit customer functionality
  
  @editPhoneNo
  Scenario: To edit customer detail
    Given The user is in guru homepage
    And The user logged in as manager 
				|username|mngr154578|  
				|password|ysejYsY   |  
    And The user navigate to edit customer page 
        |custId|535|		
    When The user edits the customer detail
    |state|Karnataka|
    And The user submits the form
    Then The user should see update successful page
    