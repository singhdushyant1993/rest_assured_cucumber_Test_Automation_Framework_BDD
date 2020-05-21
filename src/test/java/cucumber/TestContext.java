package cucumber;

import managers.RequestManager;

public class TestContext {

	private ScenarioContext scenarioContext;
	
	private RequestManager requestManager;
	
	private static TestContext testContext;
	
	private TestContext() {
	
		scenarioContext = new ScenarioContext();
		
		requestManager = new RequestManager();
	
	}
	
	public static TestContext getInstance() {
		
		if (testContext == null) {
			
			testContext = new TestContext();
			
		}
		
		return testContext;
		
	}
	
	public ScenarioContext getScenarioContext() {
		
		return scenarioContext;
		
	}
	
	public RequestManager getRequestManager() {
		
		return requestManager;
		
	}
	
	
}
