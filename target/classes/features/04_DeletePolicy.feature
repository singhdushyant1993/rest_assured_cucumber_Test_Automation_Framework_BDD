Feature: Delete Policy Feature

Scenario Outline: Delete Policy Test Scenario
Given Get Policy Headers
| 	key 		| 		value 										|
| 	Accept 		|	application/json, text/javascript, */*; q=0.01 	|
| Connection	| 	keep-alive 										|
| User-Agent	|	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 |

Then user enters query parameters
|	key			|	 	value 	|
|	deviceType	|		2		|
|	page		|		1		|
|	pageSize	|		100		|
When user makes get call with "getPolicy"
Then user verify the results of get call

Given Get Policy Headers
| 	key 		| 		value 										|
| 	Accept 		|	application/json, text/javascript, */*; q=0.01 	|
| Connection	| 	keep-alive 										|
| User-Agent	|	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 |

Then user enters delete policy query parameters "<name>"
|	key			|	 	value 						|
|	deviceType	|		2							|
When user makes get call with "<endPoint>"
Then user verify the results of get call

Examples:
		|		endPoint		|		name			|
		|		deletePolicy	|		AndroidPolicy1	|
		|		deletePolicy	|		AndroidPolicy2	|
