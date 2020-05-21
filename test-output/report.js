$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_GetPolicyList.feature");
formatter.feature({
  "line": 1,
  "name": "Get Android Policy Feature",
  "description": "",
  "id": "get-android-policy-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Get PolicyList Test Scenario",
  "description": "",
  "id": "get-android-policy-feature;get-policylist-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 5
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 6
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 7
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters query parameters",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "page",
        "1"
      ],
      "line": 13
    },
    {
      "cells": [
        "pageSize",
        "100"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user makes get call with \"\u003cendPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "get-android-policy-feature;get-policylist-test-scenario;",
  "rows": [
    {
      "cells": [
        "endPoint"
      ],
      "line": 19,
      "id": "get-android-policy-feature;get-policylist-test-scenario;;1"
    },
    {
      "cells": [
        "getPolicy"
      ],
      "line": 20,
      "id": "get-android-policy-feature;get-policylist-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Get PolicyList Test Scenario",
  "description": "",
  "id": "get-android-policy-feature;get-policylist-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 5
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 6
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 7
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters query parameters",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "page",
        "1"
      ],
      "line": 13
    },
    {
      "cells": [
        "pageSize",
        "100"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user makes get call with \"getPolicy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.match({
  "location": "GetPolicyList.get_Android_Policy_Headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_enters_query_parameters(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "getPolicy",
      "offset": 26
    }
  ],
  "location": "GetPolicyList.user_makes_get_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_verify_the_results_of_get_call()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("02_AddAndroidPolicy.feature");
formatter.feature({
  "line": 1,
  "name": "Add Android Policy Feature",
  "description": "",
  "id": "add-android-policy-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Add Android Policy Test Scenario",
  "description": "",
  "id": "add-android-policy-feature;add-android-policy-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Add android policy headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 6
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 7
    },
    {
      "cells": [
        "Content-Type",
        "application/json ;charset\u003dUTF-8"
      ],
      "line": 8
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 9
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Add parameters \"\u003clogout_password\u003e\" \"\u003cuninstall_password\u003e\" \"\u003cdisable_password\u003e\" \"\u003cinstall_ssl_certs\u003e\" \"\u003cbypass_mms_apps\u003e\" \"\u003cenforced\u003e\" \"\u003cquota_in_roaming\u003e\" \"\u003climit\u003e\" \"\u003cwifi_ssid\u003e\" \"\u003ccustom_text\u003e\" \"\u003callowed_apps\u003e\" \"\u003cbilling_day\u003e\" \"\u003cbypass_android_apps\u003e\" \"\u003creactivateWebSecurityMinutes\u003e\" \"\u003chighlightActiveControl\u003e\" \"\u003clogLevel\u003e\" \"\u003cname\u003e\" \"\u003candroid_ruleOrder\u003e\" \"\u003cactive\u003e\" \"\u003cundefined\u003e\" \"\u003cpac_url\u003e\" \"\u003candroid_onnet_filter\u003e\" \"\u003candroidlogMode\u003e\" \"\u003clogFileSize\u003e\" \"\u003cdescription\u003e\" \"\u003cruleOrder\u003e\" \"\u003clogMode\u003e\" \"\u003cforwardingProfileId\u003e\" \"\u003cgroupAll\u003e\" \"\u003cgroups\u003e\" \"\u003cdevice_type\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user makes post call with \"\u003cendPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user verify the results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "add-android-policy-feature;add-android-policy-test-scenario;",
  "rows": [
    {
      "cells": [
        "endPoint",
        "logout_password",
        "uninstall_password",
        "disable_password",
        "install_ssl_certs",
        "bypass_mms_apps",
        "enforced",
        "quota_in_roaming",
        "limit",
        "wifi_ssid",
        "custom_text",
        "allowed_apps",
        "billing_day",
        "bypass_android_apps",
        "reactivateWebSecurityMinutes",
        "highlightActiveControl",
        "logLevel",
        "name",
        "android_ruleOrder",
        "active",
        "undefined",
        "pac_url",
        "android_onnet_filter",
        "androidlogMode",
        "logFileSize",
        "description",
        "ruleOrder",
        "logMode",
        "forwardingProfileId",
        "groupAll",
        "groups",
        "device_type"
      ],
      "line": 16,
      "id": "add-android-policy-feature;add-android-policy-test-scenario;;1"
    },
    {
      "cells": [
        "addPolicy",
        "",
        "",
        "",
        "0",
        "0",
        "0",
        "0",
        "1",
        "",
        "",
        "",
        "1",
        "",
        "0",
        "0",
        "0",
        "AndroidPolicy1",
        "",
        "0",
        "",
        "",
        "",
        "",
        "100",
        "Android Policy Description.",
        "3",
        "3",
        "0",
        "0",
        "",
        "2"
      ],
      "line": 17,
      "id": "add-android-policy-feature;add-android-policy-test-scenario;;2"
    },
    {
      "cells": [
        "addPolicy",
        "",
        "",
        "",
        "0",
        "0",
        "0",
        "0",
        "1",
        "",
        "",
        "",
        "1",
        "",
        "0",
        "0",
        "0",
        "AndroidPolicy2",
        "",
        "0",
        "",
        "",
        "",
        "",
        "100",
        "Android Policy Description.",
        "4",
        "3",
        "0",
        "0",
        "",
        "2"
      ],
      "line": 18,
      "id": "add-android-policy-feature;add-android-policy-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Add Android Policy Test Scenario",
  "description": "",
  "id": "add-android-policy-feature;add-android-policy-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Add android policy headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 6
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 7
    },
    {
      "cells": [
        "Content-Type",
        "application/json ;charset\u003dUTF-8"
      ],
      "line": 8
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 9
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Add parameters \"\" \"\" \"\" \"0\" \"0\" \"0\" \"0\" \"1\" \"\" \"\" \"\" \"1\" \"\" \"0\" \"0\" \"0\" \"AndroidPolicy1\" \"\" \"0\" \"\" \"\" \"\" \"\" \"100\" \"Android Policy Description.\" \"3\" \"3\" \"0\" \"0\" \"\" \"2\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user makes post call with \"addPolicy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user verify the results",
  "keyword": "Then "
});
formatter.match({
  "location": "AddAndroidPolicy.add_android_policy_headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 25
    },
    {
      "val": "0",
      "offset": 29
    },
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "1",
      "offset": 41
    },
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "",
      "offset": 48
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 54
    },
    {
      "val": "",
      "offset": 58
    },
    {
      "val": "0",
      "offset": 61
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "0",
      "offset": 69
    },
    {
      "val": "AndroidPolicy1",
      "offset": 73
    },
    {
      "val": "",
      "offset": 90
    },
    {
      "val": "0",
      "offset": 93
    },
    {
      "val": "",
      "offset": 97
    },
    {
      "val": "",
      "offset": 100
    },
    {
      "val": "",
      "offset": 103
    },
    {
      "val": "",
      "offset": 106
    },
    {
      "val": "100",
      "offset": 109
    },
    {
      "val": "Android Policy Description.",
      "offset": 115
    },
    {
      "val": "3",
      "offset": 145
    },
    {
      "val": "3",
      "offset": 149
    },
    {
      "val": "0",
      "offset": 153
    },
    {
      "val": "0",
      "offset": 157
    },
    {
      "val": "",
      "offset": 161
    },
    {
      "val": "2",
      "offset": 164
    }
  ],
  "location": "AddAndroidPolicy.add_parameters(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "addPolicy",
      "offset": 27
    }
  ],
  "location": "AddAndroidPolicy.user_makes_post_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAndroidPolicy.user_verify_the_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Add Android Policy Test Scenario",
  "description": "",
  "id": "add-android-policy-feature;add-android-policy-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Add android policy headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 6
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 7
    },
    {
      "cells": [
        "Content-Type",
        "application/json ;charset\u003dUTF-8"
      ],
      "line": 8
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 9
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
      ],
      "line": 10
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Add parameters \"\" \"\" \"\" \"0\" \"0\" \"0\" \"0\" \"1\" \"\" \"\" \"\" \"1\" \"\" \"0\" \"0\" \"0\" \"AndroidPolicy2\" \"\" \"0\" \"\" \"\" \"\" \"\" \"100\" \"Android Policy Description.\" \"4\" \"3\" \"0\" \"0\" \"\" \"2\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user makes post call with \"addPolicy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user verify the results",
  "keyword": "Then "
});
formatter.match({
  "location": "AddAndroidPolicy.add_android_policy_headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    },
    {
      "val": "",
      "offset": 19
    },
    {
      "val": "",
      "offset": 22
    },
    {
      "val": "0",
      "offset": 25
    },
    {
      "val": "0",
      "offset": 29
    },
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "1",
      "offset": 41
    },
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "",
      "offset": 48
    },
    {
      "val": "",
      "offset": 51
    },
    {
      "val": "1",
      "offset": 54
    },
    {
      "val": "",
      "offset": 58
    },
    {
      "val": "0",
      "offset": 61
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "0",
      "offset": 69
    },
    {
      "val": "AndroidPolicy2",
      "offset": 73
    },
    {
      "val": "",
      "offset": 90
    },
    {
      "val": "0",
      "offset": 93
    },
    {
      "val": "",
      "offset": 97
    },
    {
      "val": "",
      "offset": 100
    },
    {
      "val": "",
      "offset": 103
    },
    {
      "val": "",
      "offset": 106
    },
    {
      "val": "100",
      "offset": 109
    },
    {
      "val": "Android Policy Description.",
      "offset": 115
    },
    {
      "val": "4",
      "offset": 145
    },
    {
      "val": "3",
      "offset": 149
    },
    {
      "val": "0",
      "offset": 153
    },
    {
      "val": "0",
      "offset": 157
    },
    {
      "val": "",
      "offset": 161
    },
    {
      "val": "2",
      "offset": 164
    }
  ],
  "location": "AddAndroidPolicy.add_parameters(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "addPolicy",
      "offset": 27
    }
  ],
  "location": "AddAndroidPolicy.user_makes_post_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAndroidPolicy.user_verify_the_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("03_EditAndroidPolicy.feature");
formatter.feature({
  "line": 1,
  "name": "Edit Android Policy Feature",
  "description": "",
  "id": "edit-android-policy-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Get Android Policy Test Scenario",
  "description": "",
  "id": "edit-android-policy-feature;get-android-policy-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 5
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 6
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 7
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters query parameters",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "page",
        "1"
      ],
      "line": 13
    },
    {
      "cells": [
        "pageSize",
        "100"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user makes get call with \"\u003cendPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "edit-android-policy-feature;get-android-policy-test-scenario;",
  "rows": [
    {
      "cells": [
        "endPoint"
      ],
      "line": 19,
      "id": "edit-android-policy-feature;get-android-policy-test-scenario;;1"
    },
    {
      "cells": [
        "getPolicy"
      ],
      "line": 20,
      "id": "edit-android-policy-feature;get-android-policy-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Get Android Policy Test Scenario",
  "description": "",
  "id": "edit-android-policy-feature;get-android-policy-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 5
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 6
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 7
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters query parameters",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "page",
        "1"
      ],
      "line": 13
    },
    {
      "cells": [
        "pageSize",
        "100"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user makes get call with \"getPolicy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.match({
  "location": "GetPolicyList.get_Android_Policy_Headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_enters_query_parameters(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "getPolicy",
      "offset": 26
    }
  ],
  "location": "GetPolicyList.user_makes_get_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_verify_the_results_of_get_call()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Edit Android Policy Test Scenario",
  "description": "",
  "id": "edit-android-policy-feature;edit-android-policy-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "Add android policy headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 24
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 25
    },
    {
      "cells": [
        "Content-Type",
        "application/json ;charset\u003dUTF-8"
      ],
      "line": 26
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 27
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
      ],
      "line": 28
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user Add parameters \"\u003cid\u003e\" \"\u003clogout_password\u003e\" \"\u003cuninstall_password\u003e\" \"\u003cdisable_password\u003e\" \"\u003cinstall_ssl_certs\u003e\" \"\u003cbypass_mms_apps\u003e\" \"\u003cenforced\u003e\" \"\u003cquota_in_roaming\u003e\" \"\u003climit\u003e\" \"\u003cwifi_ssid\u003e\" \"\u003ccustom_text\u003e\" \"\u003callowed_apps\u003e\" \"\u003cbilling_day\u003e\" \"\u003cbypass_android_apps\u003e\" \"\u003creactivateWebSecurityMinutes\u003e\" \"\u003chighlightActiveControl\u003e\" \"\u003clogLevel\u003e\" \"\u003cname\u003e\" \"\u003candroid_ruleOrder\u003e\" \"\u003cactive\u003e\" \"\u003cundefined\u003e\" \"\u003cpac_url\u003e\" \"\u003candroid_onnet_filter\u003e\" \"\u003candroidlogMode\u003e\" \"\u003clogFileSize\u003e\" \"\u003cdescription\u003e\" \"\u003cruleOrder\u003e\" \"\u003clogMode\u003e\" \"\u003cforwardingProfileId\u003e\" \"\u003cgroupAll\u003e\" \"\u003cgroups\u003e\" \"\u003cdevice_type\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user makes post call with \"\u003cendPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user verify the results",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "edit-android-policy-feature;edit-android-policy-test-scenario;",
  "rows": [
    {
      "cells": [
        "endPoint",
        "logout_password",
        "uninstall_password",
        "disable_password",
        "install_ssl_certs",
        "bypass_mms_apps",
        "enforced",
        "quota_in_roaming",
        "limit",
        "wifi_ssid",
        "custom_text",
        "allowed_apps",
        "billing_day",
        "bypass_android_apps",
        "reactivateWebSecurityMinutes",
        "highlightActiveControl",
        "logLevel",
        "name",
        "android_ruleOrder",
        "active",
        "undefined",
        "pac_url",
        "android_onnet_filter",
        "androidlogMode",
        "logFileSize",
        "description",
        "ruleOrder",
        "id",
        "logMode",
        "forwardingProfileId",
        "groupAll",
        "groups",
        "device_type"
      ],
      "line": 34,
      "id": "edit-android-policy-feature;edit-android-policy-test-scenario;;1"
    },
    {
      "cells": [
        "editPolicy",
        "",
        "",
        "",
        "0",
        "0",
        "0",
        "0",
        "1",
        "",
        "",
        "",
        "1",
        "",
        "0",
        "0",
        "0",
        "AndroidPolicy1",
        "",
        "0",
        "",
        "",
        "",
        "",
        "100",
        "Android Policy Description Edited.",
        "3",
        "",
        "3",
        "0",
        "0",
        "",
        "2"
      ],
      "line": 35,
      "id": "edit-android-policy-feature;edit-android-policy-test-scenario;;2"
    },
    {
      "cells": [
        "editPolicy",
        "",
        "",
        "",
        "0",
        "0",
        "0",
        "0",
        "1",
        "",
        "",
        "",
        "1",
        "",
        "0",
        "0",
        "0",
        "AndroidPolicy2",
        "",
        "0",
        "",
        "",
        "",
        "",
        "100",
        "Android Policy Description Edited.",
        "4",
        "",
        "3",
        "0",
        "0",
        "",
        "2"
      ],
      "line": 36,
      "id": "edit-android-policy-feature;edit-android-policy-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Edit Android Policy Test Scenario",
  "description": "",
  "id": "edit-android-policy-feature;edit-android-policy-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "Add android policy headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 24
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 25
    },
    {
      "cells": [
        "Content-Type",
        "application/json ;charset\u003dUTF-8"
      ],
      "line": 26
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 27
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
      ],
      "line": 28
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user Add parameters \"\" \"\" \"\" \"\" \"0\" \"0\" \"0\" \"0\" \"1\" \"\" \"\" \"\" \"1\" \"\" \"0\" \"0\" \"0\" \"AndroidPolicy1\" \"\" \"0\" \"\" \"\" \"\" \"\" \"100\" \"Android Policy Description Edited.\" \"3\" \"3\" \"0\" \"0\" \"\" \"2\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user makes post call with \"editPolicy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user verify the results",
  "keyword": "Then "
});
formatter.match({
  "location": "AddAndroidPolicy.add_android_policy_headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "",
      "offset": 27
    },
    {
      "val": "",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "0",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    },
    {
      "val": "1",
      "offset": 49
    },
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "",
      "offset": 59
    },
    {
      "val": "1",
      "offset": 62
    },
    {
      "val": "",
      "offset": 66
    },
    {
      "val": "0",
      "offset": 69
    },
    {
      "val": "0",
      "offset": 73
    },
    {
      "val": "0",
      "offset": 77
    },
    {
      "val": "AndroidPolicy1",
      "offset": 81
    },
    {
      "val": "",
      "offset": 98
    },
    {
      "val": "0",
      "offset": 101
    },
    {
      "val": "",
      "offset": 105
    },
    {
      "val": "",
      "offset": 108
    },
    {
      "val": "",
      "offset": 111
    },
    {
      "val": "",
      "offset": 114
    },
    {
      "val": "100",
      "offset": 117
    },
    {
      "val": "Android Policy Description Edited.",
      "offset": 123
    },
    {
      "val": "3",
      "offset": 160
    },
    {
      "val": "3",
      "offset": 164
    },
    {
      "val": "0",
      "offset": 168
    },
    {
      "val": "0",
      "offset": 172
    },
    {
      "val": "",
      "offset": 176
    },
    {
      "val": "2",
      "offset": 179
    }
  ],
  "location": "EditAndroidPolicy.user_Add_parameters(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "editPolicy",
      "offset": 27
    }
  ],
  "location": "AddAndroidPolicy.user_makes_post_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAndroidPolicy.user_verify_the_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Edit Android Policy Test Scenario",
  "description": "",
  "id": "edit-android-policy-feature;edit-android-policy-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "Add android policy headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 24
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 25
    },
    {
      "cells": [
        "Content-Type",
        "application/json ;charset\u003dUTF-8"
      ],
      "line": 26
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 27
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
      ],
      "line": 28
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user Add parameters \"\" \"\" \"\" \"\" \"0\" \"0\" \"0\" \"0\" \"1\" \"\" \"\" \"\" \"1\" \"\" \"0\" \"0\" \"0\" \"AndroidPolicy2\" \"\" \"0\" \"\" \"\" \"\" \"\" \"100\" \"Android Policy Description Edited.\" \"4\" \"3\" \"0\" \"0\" \"\" \"2\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user makes post call with \"editPolicy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user verify the results",
  "keyword": "Then "
});
formatter.match({
  "location": "AddAndroidPolicy.add_android_policy_headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    },
    {
      "val": "",
      "offset": 24
    },
    {
      "val": "",
      "offset": 27
    },
    {
      "val": "",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 33
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "0",
      "offset": 41
    },
    {
      "val": "0",
      "offset": 45
    },
    {
      "val": "1",
      "offset": 49
    },
    {
      "val": "",
      "offset": 53
    },
    {
      "val": "",
      "offset": 56
    },
    {
      "val": "",
      "offset": 59
    },
    {
      "val": "1",
      "offset": 62
    },
    {
      "val": "",
      "offset": 66
    },
    {
      "val": "0",
      "offset": 69
    },
    {
      "val": "0",
      "offset": 73
    },
    {
      "val": "0",
      "offset": 77
    },
    {
      "val": "AndroidPolicy2",
      "offset": 81
    },
    {
      "val": "",
      "offset": 98
    },
    {
      "val": "0",
      "offset": 101
    },
    {
      "val": "",
      "offset": 105
    },
    {
      "val": "",
      "offset": 108
    },
    {
      "val": "",
      "offset": 111
    },
    {
      "val": "",
      "offset": 114
    },
    {
      "val": "100",
      "offset": 117
    },
    {
      "val": "Android Policy Description Edited.",
      "offset": 123
    },
    {
      "val": "4",
      "offset": 160
    },
    {
      "val": "3",
      "offset": 164
    },
    {
      "val": "0",
      "offset": 168
    },
    {
      "val": "0",
      "offset": 172
    },
    {
      "val": "",
      "offset": 176
    },
    {
      "val": "2",
      "offset": 179
    }
  ],
  "location": "EditAndroidPolicy.user_Add_parameters(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "editPolicy",
      "offset": 27
    }
  ],
  "location": "AddAndroidPolicy.user_makes_post_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddAndroidPolicy.user_verify_the_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("04_DeletePolicy.feature");
formatter.feature({
  "line": 1,
  "name": "Delete Policy Feature",
  "description": "",
  "id": "delete-policy-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Delete Policy Test Scenario",
  "description": "",
  "id": "delete-policy-feature;delete-policy-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 5
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 6
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 7
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters query parameters",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "page",
        "1"
      ],
      "line": 13
    },
    {
      "cells": [
        "pageSize",
        "100"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user makes get call with \"getPolicy\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 19
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 20
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 21
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 22
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user enters delete policy query parameters \"\u003cname\u003e\"",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 25
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user makes get call with \"\u003cendPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "delete-policy-feature;delete-policy-test-scenario;",
  "rows": [
    {
      "cells": [
        "endPoint",
        "name"
      ],
      "line": 31,
      "id": "delete-policy-feature;delete-policy-test-scenario;;1"
    },
    {
      "cells": [
        "deletePolicy",
        "AndroidPolicy1"
      ],
      "line": 32,
      "id": "delete-policy-feature;delete-policy-test-scenario;;2"
    },
    {
      "cells": [
        "deletePolicy",
        "AndroidPolicy2"
      ],
      "line": 33,
      "id": "delete-policy-feature;delete-policy-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Delete Policy Test Scenario",
  "description": "",
  "id": "delete-policy-feature;delete-policy-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 5
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 6
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 7
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters query parameters",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "page",
        "1"
      ],
      "line": 13
    },
    {
      "cells": [
        "pageSize",
        "100"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user makes get call with \"getPolicy\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 19
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 20
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 21
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 22
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user enters delete policy query parameters \"AndroidPolicy1\"",
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 25
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user makes get call with \"deletePolicy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.match({
  "location": "GetPolicyList.get_Android_Policy_Headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_enters_query_parameters(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "getPolicy",
      "offset": 26
    }
  ],
  "location": "GetPolicyList.user_makes_get_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_verify_the_results_of_get_call()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.get_Android_Policy_Headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AndroidPolicy1",
      "offset": 44
    }
  ],
  "location": "DeletePolicy.user_enters_delete_policy_query_parameters(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "deletePolicy",
      "offset": 26
    }
  ],
  "location": "GetPolicyList.user_makes_get_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_verify_the_results_of_get_call()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 33,
  "name": "Delete Policy Test Scenario",
  "description": "",
  "id": "delete-policy-feature;delete-policy-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 5
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 6
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 7
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters query parameters",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 11
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "page",
        "1"
      ],
      "line": 13
    },
    {
      "cells": [
        "pageSize",
        "100"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user makes get call with \"getPolicy\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Get Policy Headers",
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 19
    },
    {
      "cells": [
        "Accept",
        "application/json, text/javascript, */*; q\u003d0.01"
      ],
      "line": 20
    },
    {
      "cells": [
        "Connection",
        "keep-alive"
      ],
      "line": 21
    },
    {
      "cells": [
        "User-Agent",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"
      ],
      "line": 22
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user enters delete policy query parameters \"AndroidPolicy2\"",
  "matchedColumns": [
    1
  ],
  "rows": [
    {
      "cells": [
        "key",
        "value"
      ],
      "line": 25
    },
    {
      "cells": [
        "deviceType",
        "2"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user makes get call with \"deletePolicy\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user verify the results of get call",
  "keyword": "Then "
});
formatter.match({
  "location": "GetPolicyList.get_Android_Policy_Headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_enters_query_parameters(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "getPolicy",
      "offset": 26
    }
  ],
  "location": "GetPolicyList.user_makes_get_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_verify_the_results_of_get_call()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.get_Android_Policy_Headers(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AndroidPolicy2",
      "offset": 44
    }
  ],
  "location": "DeletePolicy.user_enters_delete_policy_query_parameters(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "deletePolicy",
      "offset": 26
    }
  ],
  "location": "GetPolicyList.user_makes_get_call_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GetPolicyList.user_verify_the_results_of_get_call()"
});
formatter.result({
  "status": "skipped"
});
});