#Author: ShayinAlmas
@deleteCustomer
Feature: To test delete customer functionality
  
  @removeCustomer
  Scenario: To delete a customer 
    Given The user is in guru homepage
    And The user logged in as manager 
				|username|mngr154578|  
				|password|ysejYsY   |  
    And The user navigate to delete customer page 	
    When The user enters the customer id
    |custId|71629|
    And The user submits the form
    Then The user should see customer deleted message
    