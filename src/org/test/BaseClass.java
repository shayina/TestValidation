package org.test;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BaseClass {
	public static WebDriver driver;
	@Given("^The user is in guru homepage$")
	public void the_user_is_in_guru_homepage() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\SHABANA\\Desktop\\ProjectWorkspace\\ValidationDemo\\drivers\\chromedriver.exe");
	     driver=new ChromeDriver();
	     driver.get("http://demo.guru99.com/v4/");
	     driver.manage().window().maximize();
	}

	@Given("^The user logged in as manager$")
	public void the_user_logged_in_as_manager(DataTable Credentials) {
		Map<String,String> myMap=Credentials.asMap(String.class, String.class);
		driver.findElement(By.name("uid")).sendKeys(myMap.get("username"));
		driver.findElement(By.name("password")).sendKeys(myMap.get("password"));
		driver.findElement(By.name("btnLogin")).click();
	}

	@Given("^The user navigate to new customer page$")
	public void the_user_navigate_to_new_customer_page() {
		driver.findElement(By.xpath("//a[text()='New Customer']")).click();   
	}
	@When("^The user enters the customer details\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"and\"([^\"]*)\"$")
	public void the_user_enters_the_customer_details_and(String name, String gender, String dob, String address, String city, String state, String pin, String phone, String email, String pass) {
		driver.findElement(By.name("name")).sendKeys(name);
		driver.findElement(By.xpath("//input[@name='rad1' and @value='f']")).click(); 
		driver.findElement(By.name("dob")).sendKeys(dob);
		driver.findElement(By.name("addr")).sendKeys(address);
		driver.findElement(By.name("city")).sendKeys(city);
		driver.findElement(By.name("state")).sendKeys(state);
		driver.findElement(By.name("pinno")).sendKeys(pin);
		driver.findElement(By.name("telephoneno")).sendKeys(phone);
		driver.findElement(By.name("emailid")).sendKeys(email);
		driver.findElement(By.name("password")).sendKeys(pass);
		driver.findElement(By.xpath("//input[@value='Submit']")).click();
	}
	@When("^The user submits the form$")
	public void the_user_submits_the_form() {
		driver.findElement(By.xpath("//input[@value='Submit']")).click();
		
	}
	
	@Then("^The user should see success page$")
	public void the_user_should_see_success_page() {
		String successOutput=driver.findElement(By.xpath("//p[@class='heading3']")).getText();
		Assert.assertEquals(successOutput,"Customer Registered Successfully!!!");
		driver.quit();
	}
	@Then("^The user should see the alert message$")
	public void the_user_should_see_alert_message() {
		String alertMessage = driver.switchTo().alert().getText();
        Assert.assertEquals(alertMessage,"please fill all fields");
        driver.switchTo().alert().accept();
        driver.quit();
        }

	@When("^The user enters number in name field\"([^\"]*)\",\"([^\"]*)\"and\"([^\"]*)\"$")
	public void the_user_enters_number_in_name_field_and(String custName, String city, String state) {
		driver.findElement(By.name("name")).sendKeys(custName);
		driver.findElement(By.name("city")).sendKeys(city);
		driver.findElement(By.name("state")).sendKeys(state);
		
	}
	@Then("^The user should see number validation message$")
	public void the_user_should_number_validation_message() {
		String numInvalid= driver.findElement(By.xpath("//label[@id='message']")).getText();
		Assert.assertEquals("Numbers are not allowed", numInvalid);
		driver.quit();
		}
	@When("^The user enters characters in fields\"([^\"]*)\",\"([^\"]*)\"and\"([^\"]*)\"$")
	public void the_user_enters_characters_in_fields_and(String pinNo, String phone, String email) {
		driver.findElement(By.name("pinno")).sendKeys(pinNo);
		driver.findElement(By.name("telephoneno")).sendKeys(phone);
		driver.findElement(By.name("emailid")).sendKeys(email);
	}
	@Then("^The user should see character validation message$")
	public void the_user_should_see_character_validation_message() {
	   String charInvalid=driver.findElement(By.xpath("//label[@id='message6']")).getText();
	   Assert.assertEquals("Characters are not allowed", charInvalid);
	   driver.quit();
	}

	@When("^The user enters special characters in name field\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"\"([^\"]*)\",\"([^\"]*)\"and\"([^\"]*)\"$")
	public void the_user_enters_number_in_name_field_and(String name, String city, String state, String pinNo, String phone, String email) {
		driver.findElement(By.name("name")).sendKeys(name);
		driver.findElement(By.name("city")).sendKeys(city);
		driver.findElement(By.name("state")).sendKeys(state);  
		driver.findElement(By.name("pinno")).sendKeys(pinNo);
		driver.findElement(By.name("telephoneno")).sendKeys(phone);
		driver.findElement(By.name("emailid")).sendKeys(email);
	}
@Then("^The user should see special character validation message$")
public void the_user_should_see_special_character_validation_message() {
   String symbolInvalid= driver.findElement(By.xpath("//label[@id='message7']")).getText();
   Assert.assertEquals("Special characters are not allowed", symbolInvalid);
   driver.quit();
}
@Given("^The user navigate to edit customer page$")
public void the_user_navigate_to_edit_customer_page(DataTable Customer) {
    driver.findElement(By.xpath("//a[text()='Edit Customer']")).click();
    Map<String,String>myIdMap =Customer.asMap(String.class, String.class);
    driver.findElement(By.xpath("//input[@name='cusid']")).sendKeys(myIdMap.get("custId"));
    driver.findElement(By.name("AccSubmit")).click();
}

@When("^The user edits the customer detail$")
public void the_user_edits_the_customer_detail(DataTable editCustomer) {
	Map<String,String>myEditMap =editCustomer.asMap(String.class, String.class);
	driver.findElement(By.name("state")).clear();
	driver.findElement(By.name("state")).sendKeys(myEditMap.get("state"));
}

@Then("^The user should see update successful page$")
public void the_user_should_see_update_successful_page() {
	String EditOutput=driver.findElement(By.xpath("//p[@class='heading3']")).getText();
	Assert.assertEquals(EditOutput,"Customer details updated Successfully!!!");   
	driver.quit();
}

@Given("^The user navigate to delete customer page$")
public void the_user_navigate_to_delete_customer_page() {
    driver.findElement(By.xpath("//a[text()='Delete Customer']")).click();
}

@When("^The user enters the customer id$")
public void the_user_enters_the_customer_id(DataTable delId) {
	Map<String,String>myDelIdMap =delId.asMap(String.class, String.class); 
	driver.findElement(By.xpath("//input[@name='cusid']")).sendKeys(myDelIdMap.get("custId"));
}

@Then("^The user should see customer deleted message$")
public void the_user_should_see_customer_deleted_message() {
	driver.switchTo().alert().accept();
	String deleteMessage=driver.switchTo().alert().getText();
	Assert.assertEquals(deleteMessage,"Customer deleted Successfully");
	driver.switchTo().alert().accept();
	driver.quit();
}


}
