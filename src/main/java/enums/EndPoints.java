package enums;

public enum EndPoints {

	addPolicy("/edit"),
	getPolicy("/listByCompany"),
	editPolicy("/edit"),
	deletePolicy("/delete");
	
	private String endpoint;
	
	EndPoints(String endpoint) {
		
		this.endpoint = endpoint;
	}
	
	public String getEndpoint() {
		
		return endpoint;
	}
	
}
