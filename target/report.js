$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/org/test/CustomerRegistration.feature");
formatter.feature({
  "name": "To test add new customer functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addCustomer"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To add new customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@customerRegistration"
    }
  ]
});
formatter.step({
  "name": "The user is in guru homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "The user logged in as manager",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "username",
        "mngr154578"
      ]
    },
    {
      "cells": [
        "password",
        "ysejYsY"
      ]
    }
  ]
});
formatter.step({
  "name": "The user navigate to new customer page",
  "keyword": "And "
});
formatter.step({
  "name": "The user enters the customer details\"\u003ccustomerName\u003e\",\"\u003cgender\u003e\",\"\u003cDOB\u003e\",\"\u003caddress\u003e\",\"\u003ccity\u003e\",\"\u003cstate\u003e\",\"\u003cPIN\u003e\",\"\u003cphone\u003e\",\"\u003cemail\u003e\"and\"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user submits the form",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see success page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customerName",
        "gender",
        "DOB",
        "address",
        "city",
        "state",
        "PIN",
        "phone",
        "email",
        "pass"
      ]
    },
    {
      "cells": [
        "shaysha",
        "female",
        "4/5/1990",
        "jothpu nagr east st",
        "chengalpet",
        "tamilnadu",
        "603532",
        "2234456797",
        "wedgs@gmail.com",
        "qwerty"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To add new customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addCustomer"
    },
    {
      "name": "@customerRegistration"
    }
  ]
});
formatter.step({
  "name": "The user is in guru homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseClass.the_user_is_in_guru_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user logged in as manager",
  "rows": [
    {
      "cells": [
        "username",
        "mngr154578"
      ]
    },
    {
      "cells": [
        "password",
        "ysejYsY"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BaseClass.the_user_logged_in_as_manager(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user navigate to new customer page",
  "keyword": "And "
});
formatter.match({
  "location": "BaseClass.the_user_navigate_to_new_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters the customer details\"shaysha\",\"female\",\"4/5/1990\",\"jothpu nagr east st\",\"chengalpet\",\"tamilnadu\",\"603532\",\"2234456797\",\"wedgs@gmail.com\"and\"qwerty\"",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.the_user_enters_the_customer_details_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user submits the form",
  "keyword": "And "
});
formatter.match({
  "location": "BaseClass.the_user_submits_the_form()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Submit\u0027]\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:13:22.693Z\u0027\nSystem info: host: \u0027SHAYINALMAS\u0027, ip: \u0027100.100.103.220\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\SHABANA\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65107}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: f6387092c6f218da2826787eb1b12c68\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Submit\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.test.BaseClass.the_user_submits_the_form(BaseClass.java:54)\r\n\tat ✽.The user submits the form(src/org/test/CustomerRegistration.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should see success page",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.the_user_should_see_success_page()"
});
formatter.result({
  "status": "skipped"
});
});