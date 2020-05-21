package pojo;

import java.util.List;

public class AndroidEditPayload {

    public AndroidEditPayload() {
		// TODO Auto-generated constructor stub
	}
    
    private AndroidPolicy androidPolicy;

    private String reactivateWebSecurityMinutes;

    private int highlightActiveControl;

    private int logLevel;

    private String name;

    private String android_ruleOrder;

    private String active;

    private String undefined;

    private String pac_url;

    private String android_onnet_filter;

    private String androidlogMode;

    private int logFileSize;

    private String description;

    private int ruleOrder;

    private int id;

    private int logMode;

    private String forwardingProfileId;

    private int groupAll;

    private List<String> groups;

    private int device_type;
    

    public AndroidEditPayload(AndroidPolicy androidPolicy, String reactivateWebSecurityMinutes,
			int highlightActiveControl, int logLevel, String name, String android_ruleOrder, String active,
			String undefined, String pac_url, String android_onnet_filter, String androidlogMode, int logFileSize,
			String description, int ruleOrder, int id, int logMode, String forwardingProfileId, int groupAll,
			List<String> groups, int device_type) {
		super();
		this.androidPolicy = androidPolicy;
		this.reactivateWebSecurityMinutes = reactivateWebSecurityMinutes;
		this.highlightActiveControl = highlightActiveControl;
		this.logLevel = logLevel;
		this.name = name;
		this.android_ruleOrder = android_ruleOrder;
		this.active = active;
		this.undefined = undefined;
		this.pac_url = pac_url;
		this.android_onnet_filter = android_onnet_filter;
		this.androidlogMode = androidlogMode;
		this.logFileSize = logFileSize;
		this.description = description;
		this.ruleOrder = ruleOrder;
		this.id = id;
		this.logMode = logMode;
		this.forwardingProfileId = forwardingProfileId;
		this.groupAll = groupAll;
		this.groups = groups;
		this.device_type = device_type;
	}
	public void setAndroidPolicy(AndroidPolicy androidPolicy){
        this.androidPolicy = androidPolicy;
    }
    public AndroidPolicy getAndroidPolicy(){
        return this.androidPolicy;
    }
    public void setReactivateWebSecurityMinutes(String reactivateWebSecurityMinutes){
        this.reactivateWebSecurityMinutes = reactivateWebSecurityMinutes;
    }
    public String getReactivateWebSecurityMinutes(){
        return this.reactivateWebSecurityMinutes;
    }
    public void setHighlightActiveControl(int highlightActiveControl){
        this.highlightActiveControl = highlightActiveControl;
    }
    public int getHighlightActiveControl(){
        return this.highlightActiveControl;
    }
    public void setLogLevel(int logLevel){
        this.logLevel = logLevel;
    }
    public int getLogLevel(){
        return this.logLevel;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return this.name;
    }
    public void setAndroid_ruleOrder(String android_ruleOrder){
        this.android_ruleOrder = android_ruleOrder;
    }
    public String getAndroid_ruleOrder(){
        return this.android_ruleOrder;
    }
    public void setActive(String active){
        this.active = active;
    }
    public String getActive(){
        return this.active;
    }
    public void setUndefined(String undefined){
        this.undefined = undefined;
    }
    public String getUndefined(){
        return this.undefined;
    }
    public void setPac_url(String pac_url){
        this.pac_url = pac_url;
    }
    public String getPac_url(){
        return this.pac_url;
    }
    public void setAndroid_onnet_filter(String android_onnet_filter){
        this.android_onnet_filter = android_onnet_filter;
    }
    public String getAndroid_onnet_filter(){
        return this.android_onnet_filter;
    }
    public void setAndroidlogMode(String androidlogMode){
        this.androidlogMode = androidlogMode;
    }
    public String getAndroidlogMode(){
        return this.androidlogMode;
    }
    public void setLogFileSize(int logFileSize){
        this.logFileSize = logFileSize;
    }
    public int getLogFileSize(){
        return this.logFileSize;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public String getDescription(){
        return this.description;
    }
    public void setRuleOrder(int ruleOrder){
        this.ruleOrder = ruleOrder;
    }
    public int getRuleOrder(){
        return this.ruleOrder;
    }
    public void setId(int id){
        this.id = id;
    }
    public int getId(){
        return this.id;
    }
    public void setLogMode(int logMode){
        this.logMode = logMode;
    }
    public int getLogMode(){
        return this.logMode;
    }
    public void setForwardingProfileId(String forwardingProfileId){
        this.forwardingProfileId = forwardingProfileId;
    }
    public String getForwardingProfileId(){
        return this.forwardingProfileId;
    }
    public void setGroupAll(int groupAll){
        this.groupAll = groupAll;
    }
    public int getGroupAll(){
        return this.groupAll;
    }
    public void setGroups(List<String> groups){
        this.groups = groups;
    }
    public List<String> getGroups(){
        return this.groups;
    }
    public void setDevice_type(int device_type){
        this.device_type = device_type;
    }
    public int getDevice_type(){
        return this.device_type;
    }
   
    
	
}
