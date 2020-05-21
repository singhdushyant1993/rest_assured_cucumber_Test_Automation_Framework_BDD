package managers;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;

import io.restassured.RestAssured;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.specification.RequestSpecification;

public class RequestManager {

	private PrintStream printStream;
	
	private RequestSpecification request;
	
	public RequestManager() {
		
		try {
			printStream = new PrintStream(new FileOutputStream("LogFile.txt"));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	public RequestSpecification getRequest() {
		
		RestAssured.baseURI = ConfigFileReader.getInstance().getBaseUri();
		
		request = RestAssured.given().filter(RequestLoggingFilter.logRequestTo(printStream));
		
		request.header("auth-token",ConfigFileReader.getInstance().getAuthToken());
		
		return request;
		
	}
	
	public PrintStream getPrintStream() {
		
		return printStream;
		
	}
	
	
}
