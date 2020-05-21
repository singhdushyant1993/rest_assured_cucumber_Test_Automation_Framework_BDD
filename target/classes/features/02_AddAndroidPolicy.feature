Feature: Add Android Policy Feature

Scenario Outline: Add Android Policy Test Scenario

Given Add android policy headers
| 		key 	| 	value 											|
|	 Accept		| 	application/json, text/javascript, */*; q=0.01	|
|	Content-Type| application/json ;charset=UTF-8					|
|	Connection	| 	keep-alive										|
|	User-Agent	|	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36 |
Then Add parameters "<logout_password>" "<uninstall_password>" "<disable_password>" "<install_ssl_certs>" "<bypass_mms_apps>" "<enforced>" "<quota_in_roaming>" "<limit>" "<wifi_ssid>" "<custom_text>" "<allowed_apps>" "<billing_day>" "<bypass_android_apps>" "<reactivateWebSecurityMinutes>" "<highlightActiveControl>" "<logLevel>" "<name>" "<android_ruleOrder>" "<active>" "<undefined>" "<pac_url>" "<android_onnet_filter>" "<androidlogMode>" "<logFileSize>" "<description>" "<ruleOrder>" "<logMode>" "<forwardingProfileId>" "<groupAll>" "<groups>" "<device_type>"
When user makes post call with "<endPoint>" 
Then user verify the results

Examples:
		|		endPoint		|	logout_password | uninstall_password | disable_password | install_ssl_certs | bypass_mms_apps | enforced | quota_in_roaming | limit | wifi_ssid | custom_text | allowed_apps | billing_day | bypass_android_apps | reactivateWebSecurityMinutes | highlightActiveControl | logLevel | 	name 				| android_ruleOrder | active | undefined | pac_url | android_onnet_filter | androidlogMode | logFileSize | 	description 				| ruleOrder | logMode | forwardingProfileId | groupAll | groups | device_type | 
		|		addPolicy		|					|					 |					|    0				|	0			  |		0	 |		0			| 	1	|			|			  |				 |		1	   |					 |				0				|			0			 |	  0		|	AndroidPolicy1      |					|	0	 |			 | 	       |       				  |				   | 	100		 |	Android Policy Description.	|	3		|	3	  |      	0			|    0	   |    	|      2	  |	
		|		addPolicy		|					|					 |					|    0				|	0			  |		0	 |		0			| 	1	|			|			  |				 |		1	   |					 |				0				|			0			 |	  0		|	AndroidPolicy2      |					|	0	 |			 | 	       |       				  |				   | 	100		 |	Android Policy Description.	|	4		|	3	  |      	0			|    0	   |    	|      2	  |	
