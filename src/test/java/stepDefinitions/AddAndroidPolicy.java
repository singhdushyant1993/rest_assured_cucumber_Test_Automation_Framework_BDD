package stepDefinitions;

import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.junit.Assert;

import cucumber.TestContext;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import enums.EndPoints;
import enums.Values;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import pojo.AndroidPayload;
import pojo.AndroidPolicy;
import utils.TestUtil;

public class AddAndroidPolicy {
	
	private  RequestSpecification request;
	
	private PrintStream printStream;
	
	private Response response;
	
	public AddAndroidPolicy() {
		
		request = TestContext.getInstance().getRequestManager().getRequest();
		
		printStream = TestContext.getInstance().getRequestManager().getPrintStream();
		
	}
	
	@Given("^Add android policy headers$")
	public void add_android_policy_headers(DataTable td) {
		
		List<Map<String, String>> list = td.asMaps(String.class, String.class);
		
		for (Map<String, String> header: list) {
			
			request.header(header.get("key"),header.get("value"));
			
		}
				
		TestContext.getInstance().getScenarioContext().setRequest(request);
				
	}
	
	@Then("^Add parameters \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void add_parameters(String logout_password, String uninstall_password, String disable_password, String install_ssl_certs, String bypass_mms_apps, String enforced, String quota_in_roaming, String limit, String wifi_ssid, String custom_text, String allowed_apps, String billing_day, String bypass_android_apps, String reactivateWebSecurityMinutes, String highlightActiveControl, String logLevel, String name, String android_ruleOrder, String active, String undefined, String pac_url, String android_onnet_filter, String androidlogMode, String logFileSize, String description, String ruleOrder, String logMode, String forwardingProfileId, String groupAll, String groups, String device_type) {
			
			List<String> groupsList = new ArrayList<String>();
			
			if (!(groups.isBlank())) {
			
				String str[] = groups.split(",");
			
				groupsList = Arrays.asList(str);
				
			}
		
			AndroidPolicy androidPolicy = new AndroidPolicy(logout_password,uninstall_password,disable_password,install_ssl_certs,bypass_mms_apps,enforced,quota_in_roaming,Integer.parseInt(limit),wifi_ssid,custom_text,allowed_apps,Integer.parseInt(billing_day),bypass_android_apps);
			
			AndroidPayload androidPayload = new AndroidPayload(androidPolicy, reactivateWebSecurityMinutes, Integer.parseInt(highlightActiveControl), Integer.parseInt(logLevel), name, android_ruleOrder, active, undefined, pac_url, android_onnet_filter, androidlogMode, Integer.parseInt(logFileSize), description, Integer.parseInt(ruleOrder), Integer.parseInt(logMode), forwardingProfileId, Integer.parseInt(groupAll), groupsList, Integer.parseInt(device_type));
			
			request.body(androidPayload);
		
	}//func


	@When("^user makes post call with \"([^\"]*)\"$")
	public void user_makes_post_call_with(String endPointString) {
		
		EndPoints endPoint = EndPoints.valueOf(endPointString);
		
		response = request.when().log().all().post(endPoint.getEndpoint());
	
	}

	@Then("^user verify the results$")
	public void user_verify_the_results() {
	    
		TestUtil.logResponse(printStream, response.asString());
		
		Assert.assertEquals(200, response.getStatusCode());
		
		if (response.getStatusCode() == 200) {
		
			JsonPath json = new JsonPath(response.asString());
			
			String successCode = json.getString(Values.success.toString());
		
			Assert.assertEquals("true",successCode);
			
		}
		
	}//func

}
