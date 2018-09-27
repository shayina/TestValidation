package org.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/org/test",glue= {"org/test"},tags= {"@addCustomer,@validateNewCustomer,@editCustomer,@deleteCustomer"},monochrome=true,plugin= {"html:target"})
public class NewTestRunner {
	
}
