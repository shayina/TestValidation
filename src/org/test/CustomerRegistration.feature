#Author: ShayinAlmas
@addCustomer
Feature: To test add new customer functionality
  
  @customerRegistration
  Scenario Outline: To add new customers
    Given The user is in guru homepage
    And The user logged in as manager 
				|username|mngr154578|  
				|password|ysejYsY   |  
    And The user navigate to new customer page 
    When The user enters the customer details"<customerName>","<gender>","<DOB>","<address>","<city>","<state>","<PIN>","<phone>","<email>"and"<pass>"
    And The user submits the form
    Then The user should see success page

    Examples: 
      |customerName       | gender  |DOB        |   address              | city       | state        | PIN     | phone      | email               | pass   |
      |alfarisha          | female  |1/9/1990   |raju nagar west colony  | Vayanad    | Kerala       | 653905  | 9994456790 | vabcdjk@gmail.com   | qwerty | 
      
