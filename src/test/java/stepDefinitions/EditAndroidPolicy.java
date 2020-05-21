package stepDefinitions;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import cucumber.TestContext;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import pojo.AndroidEditPayload;
import pojo.AndroidPolicy;
import pojo.Policies;

public class EditAndroidPolicy {

	private  RequestSpecification request;
		
	private Response response;
		
	public EditAndroidPolicy() {
			
		request = TestContext.getInstance().getScenarioContext().getRequest();
		
	}
	
	@When("^user Add parameters \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_Add_parameters(String id,String logout_password, String uninstall_password, String disable_password, String install_ssl_certs, String bypass_mms_apps, String enforced, String quota_in_roaming, String limit, String wifi_ssid, String custom_text, String allowed_apps, String billing_day, String bypass_android_apps, String reactivateWebSecurityMinutes, String highlightActiveControl, String logLevel, String name, String android_ruleOrder, String active, String undefined, String pac_url, String android_onnet_filter, String androidlogMode, String logFileSize, String description, String ruleOrder, String logMode, String forwardingProfileId, String groupAll, String groups, String device_type) {
	
		List<String> groupsList = new ArrayList<String>();
		
		if (!(groups.isBlank())) {
		
			String str[] = groups.split(",");
		
			groupsList = Arrays.asList(str);
			
		}
	
		AndroidPolicy androidPolicy = new AndroidPolicy(logout_password,uninstall_password,disable_password,install_ssl_certs,bypass_mms_apps,enforced,quota_in_roaming,Integer.parseInt(limit),wifi_ssid,custom_text,allowed_apps,Integer.parseInt(billing_day),bypass_android_apps);
			
		try {
			
			response = TestContext.getInstance().getScenarioContext().getResponse();
					
			pojo.Response response = this.response.getBody().as(pojo.Response.class);
				
			for(Policies obj:response.getPolicies()) {
						
				if(obj.getName().equals(name)) {
							
					id = String.valueOf(obj.getId());
							
					Integer.parseInt(id);
							
					}
						
				}
							
			AndroidEditPayload androidEditPayload = new AndroidEditPayload(androidPolicy, reactivateWebSecurityMinutes, Integer.parseInt(highlightActiveControl), Integer.parseInt(logLevel), name, android_ruleOrder, active, undefined, pac_url, android_onnet_filter, androidlogMode, Integer.parseInt(logFileSize), description, Integer.parseInt(ruleOrder), Integer.parseInt(id), Integer.parseInt(logMode), forwardingProfileId, Integer.parseInt(groupAll), groupsList, Integer.parseInt(device_type));
			
			request.body(androidEditPayload);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
			System.out.println("Failed to match policy name with server database.");
			
		}
		
	}//func
	
	
}
