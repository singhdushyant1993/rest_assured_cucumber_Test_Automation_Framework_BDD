package managers;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigFileReader {

	private static ConfigFileReader configFileReader;
	
	private Properties prop;
	
	private final String configFilePath = System.getProperty("user.dir")+"/src/main/java/config//config.properties";
	
	private ConfigFileReader() {
		
		try {
			
			FileInputStream ip = new FileInputStream(configFilePath);
			
			prop = new Properties();
			
			prop.load(ip);
		
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}//func
	
	public static ConfigFileReader getInstance() {
		
		if (configFileReader == null) {
			
			configFileReader = new ConfigFileReader();
			
		}
		
		return configFileReader;
		
	}//func
	
	public String getAuthToken() {
		
		return prop.getProperty("authToken");
		
	}
	
	public String getBaseUri() {
		
		return prop.getProperty("baseUri");
		
	}
	
	public String getPayloadFilePath() {
		
		return prop.getProperty("payloadFilePath");
		
	}
	
	
}//class


