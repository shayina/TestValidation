package org.test;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/org/test",glue= {"org/test"},tags= {"@addCustomer"},monochrome=true,dryRun=false,plugin= {"html:target"})
public class NewTestRunner {

}
