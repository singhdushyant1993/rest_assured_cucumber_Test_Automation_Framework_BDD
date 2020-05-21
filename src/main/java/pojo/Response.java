package pojo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.common.util.concurrent.CycleDetectingLockFactory.Policy;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Response {

	private List<Policies> policies;

	public Response() {
		// TODO Auto-generated constructor stub
	}
	
	public Response(List<Policies> policies) {
		super();
		this.policies = policies;
	}

	public List<Policies> getPolicies() {
		return policies;
	}

	public void setPolicies(List<Policies> policies) {
		this.policies = policies;
	}
	
	
	
	
}
