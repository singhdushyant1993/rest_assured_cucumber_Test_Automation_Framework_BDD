Feature: Get Android Policy Feature

Scenario Outline: Get PolicyList Test Scenario
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
When user makes get call with "<endPoint>"
Then user verify the results of get call

Examples:
		|		endPoint	|
		|		getPolicy	|