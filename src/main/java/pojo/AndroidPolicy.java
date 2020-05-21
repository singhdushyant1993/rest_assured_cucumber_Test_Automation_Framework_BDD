package pojo;

public class AndroidPolicy {
	
		public AndroidPolicy() {
			// TODO Auto-generated constructor stub
		}
		
	    public AndroidPolicy(String logout_password, String uninstall_password, String disable_password,
			String install_ssl_certs, String bypass_mms_apps, String enforced, String quota_in_roaming, int limit,
			String wifi_ssid, String custom_text, String allowed_apps, int billing_day, String bypass_android_apps) {
		this.logout_password = logout_password;
		this.uninstall_password = uninstall_password;
		this.disable_password = disable_password;
		this.install_ssl_certs = install_ssl_certs;
		this.bypass_mms_apps = bypass_mms_apps;
		this.enforced = enforced;
		this.quota_in_roaming = quota_in_roaming;
		this.limit = limit;
		this.wifi_ssid = wifi_ssid;
		this.custom_text = custom_text;
		this.allowed_apps = allowed_apps;
		this.billing_day = billing_day;
		this.bypass_android_apps = bypass_android_apps;
	
	    }
		
	    private String logout_password;

	    private String uninstall_password;

	    private String disable_password;

	    private String install_ssl_certs;

	    private String bypass_mms_apps;

	    private String enforced;

	    private String quota_in_roaming;

	    private int limit;

	    private String wifi_ssid;

	    private String custom_text;

	    private String allowed_apps;

	    private int billing_day;

	    private String bypass_android_apps;

	    public void setLogout_password(String logout_password){
	        this.logout_password = logout_password;
	    }
	    public String getLogout_password(){
	        return this.logout_password;
	    }
	    public void setUninstall_password(String uninstall_password){
	        this.uninstall_password = uninstall_password;
	    }
	    public String getUninstall_password(){
	        return this.uninstall_password;
	    }
	    public void setDisable_password(String disable_password){
	        this.disable_password = disable_password;
	    }
	    public String getDisable_password(){
	        return this.disable_password;
	    }
	    public void setInstall_ssl_certs(String install_ssl_certs){
	        this.install_ssl_certs = install_ssl_certs;
	    }
	    public String getInstall_ssl_certs(){
	        return this.install_ssl_certs;
	    }
	    public void setBypass_mms_apps(String bypass_mms_apps){
	        this.bypass_mms_apps = bypass_mms_apps;
	    }
	    public String getBypass_mms_apps(){
	        return this.bypass_mms_apps;
	    }
	    public void setEnforced(String enforced){
	        this.enforced = enforced;
	    }
	    public String getEnforced(){
	        return this.enforced;
	    }
	    public void setQuota_in_roaming(String quota_in_roaming){
	        this.quota_in_roaming = quota_in_roaming;
	    }
	    public String getQuota_in_roaming(){
	        return this.quota_in_roaming;
	    }
	    public void setLimit(int limit){
	        this.limit = limit;
	    }
	    public int getLimit(){
	        return this.limit;
	    }
	    public void setWifi_ssid(String wifi_ssid){
	        this.wifi_ssid = wifi_ssid;
	    }
	    public String getWifi_ssid(){
	        return this.wifi_ssid;
	    }
	    public void setCustom_text(String custom_text){
	        this.custom_text = custom_text;
	    }
	    public String getCustom_text(){
	        return this.custom_text;
	    }
	    public void setAllowed_apps(String allowed_apps){
	        this.allowed_apps = allowed_apps;
	    }
	    public String getAllowed_apps(){
	        return this.allowed_apps;
	    }
	    public void setBilling_day(int billing_day){
	        this.billing_day = billing_day;
	    }
	    public int getBilling_day(){
	        return this.billing_day;
	    }
	    public void setBypass_android_apps(String bypass_android_apps){
	        this.bypass_android_apps = bypass_android_apps;
	    }
	    public String getBypass_android_apps(){
	        return this.bypass_android_apps;
	    }
	
}
