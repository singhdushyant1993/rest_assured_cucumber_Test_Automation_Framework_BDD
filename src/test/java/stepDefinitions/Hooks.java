package stepDefinitions;

import com.cucumber.listener.Reporter;

import cucumber.TestContext;
import cucumber.api.Scenario;
import cucumber.api.java.Before;


public class Hooks {
	
	@Before
	 public void beforeScenario(Scenario scenario) {
	     Reporter.assignAuthor("TestAutomation - Dushyant Singh");
	 }
	 
	
}
