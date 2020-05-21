package stepDefinitions;

import java.io.PrintStream;
import java.util.List;
import java.util.Map;

import org.junit.Assert;

import io.restassured.response.Response;

import cucumber.TestContext;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import enums.EndPoints;
import io.restassured.specification.RequestSpecification;
import utils.TestUtil;

public class GetPolicyList {

	private PrintStream printStream;
		
	private RequestSpecification request;
	
	private Response response;
	
	public GetPolicyList() {
	
		request = TestContext.getInstance().getRequestManager().getRequest();
		
		printStream = TestContext.getInstance().getRequestManager().getPrintStream();
	
	}
	
	@Given("^Get Policy Headers$")
	public void get_Android_Policy_Headers(DataTable td) {
	
		List<Map<String, String>> list = td.asMaps(String.class, String.class);
	
		for (Map<String, String> header: list) {
			
			request.header(header.get("key"),header.get("value"));
			
		}
		
		TestContext.getInstance().getScenarioContext().setRequest(request);
				
	}
	
	@Then("^user enters query parameters$")
	public void user_enters_query_parameters(DataTable td) {
		
		List<Map<String, String>> list = td.asMaps(String.class, String.class);
		
		for(Map<String, String> obj:list) {
			
			request.queryParam(obj.get("key"),obj.get("value"));
			
		}
		
	}

	@When("^user makes get call with \"([^\"]*)\"$")
	public void user_makes_get_call_with(String endPointString) {
	
		request = TestContext.getInstance().getScenarioContext().getRequest();
		
		EndPoints endPoint = EndPoints.valueOf(endPointString);
		
		response = request.when().log().all().get(endPoint.getEndpoint());
		
		TestContext.getInstance().getScenarioContext().setResponse(response);
		
	}

	@Then("^user verify the results of get call$")
	public void user_verify_the_results_of_get_call() {
		
		response = TestContext.getInstance().getScenarioContext().getResponse();
				
		TestUtil.logResponse(printStream, response.asString());
		
		TestContext.getInstance().getScenarioContext().setResponse(response);
		
		Assert.assertEquals(200, response.getStatusCode());
				
	}

	
}
