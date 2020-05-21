package stepDefinitions;

import java.util.List;
import java.util.Map;


import cucumber.TestContext;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;

import enums.Values;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import pojo.Policies;

public class DeletePolicy {
	
	private RequestSpecification request;
	
	private Response response;
	
	public DeletePolicy() {
	
		request = TestContext.getInstance().getScenarioContext().getRequest();
	
		response = TestContext.getInstance().getScenarioContext().getResponse();
		
	}

	@Then("^user enters delete policy query parameters \"([^\"]*)\"$")
	public void user_enters_delete_policy_query_parameters(String name, DataTable td) {
		
		int id = 0;
		
		List<Map<String, String>> list =  td.asMaps(String.class, String.class);
						
		pojo.Response response = this.response.getBody().as(pojo.Response.class);
			
		for(Policies obj:response.getPolicies()) {
					
				if(obj.getName().equalsIgnoreCase(name)) {
						
					id = obj.getId();
						
				}//if
				
		}//for
		
		request.queryParam(list.get(0).get("key"), list.get(0).get("value"));
		
		request.queryParam(Values.id.toString(), String.valueOf(id));
		
		TestContext.getInstance().getScenarioContext().setRequest(request);
		
	}//func

	
	
}
