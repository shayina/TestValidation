#Author: ShayinAlmas
 @validateNewCustomer
Feature: To test validations in new customer functionality
  
  @fieldValidation
  Scenario: To Test field validations in add new customers page
    Given The user is in guru homepage
    And The user logged in as manager 
				|username|mngr154578|  
				|password|ysejYsY   |  
    And The user navigate to new customer page 
    When The user submits the form
    Then The user should see the alert message
    
		@numberValidation
    Scenario Outline: To Test number validations in add new customers page
    Given The user is in guru homepage
    And The user logged in as manager 
				|username|mngr154578|  
				|password|ysejYsY   |  
    And The user navigate to new customer page 
    When The user enters number in name field"<customerName>","<city>"and"<state>"		
    Then The user should see number validation message
    Examples:
    |customername|city |state|
		|1234        |23445|54327|
    
   @characterValidation 
  Scenario Outline: To test character validation in add new customer page 
    Given The user is in guru homepage
    And The user logged in as manager 
    		|username|mngr154578|  
				|password|ysejYsY   | 
    And The user navigate to new customer page 
    When The user enters characters in fields"<pinno>","<phone>"and"<email>"
    Then The user should see character validation message
    Examples:
    |pinno |phone  |email|
    |asfgdr|asdhj  |esrty|
    
    @specialCharacterValidation 
  Scenario Outline: To test special character validation in add new customer page 
    Given The user is in guru homepage
    And The user logged in as manager 
    		|username|mngr154578|  
				|password|ysejYsY   | 
    And The user navigate to new customer page 
    When The user enters special characters in name field"<customerName>","<city>","<state>""<pinno>","<phone>"and"<email>"
    Then The user should see special character validation message
    Examples:
    |customername|city   |state |pinno |phone  |email|
		|)34#$%^     |3^#(*&8|31(^%4|*(*&>,|.,/;'  |4+!~>,|		
      
    
    
    