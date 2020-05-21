package cucumber;

import java.io.PrintStream;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class ScenarioContext {

	Response response;
	
	RequestSpecification request;
	
	PrintStream printStream;
	
	public PrintStream getPrintStream() {
		return printStream;
	}

	public void setPrintStream(PrintStream printStream) {
		this.printStream = printStream;
	}

	public ScenarioContext() {
			
	}
	
	public RequestSpecification getRequest() {
		return request;
	}

	public void setRequest(RequestSpecification request) {
		this.request = request;
	}
	
	public Response getResponse() {
		return response;
	}

	public void setResponse(Response response) {
		this.response = response;
	}
	
	
}//class
