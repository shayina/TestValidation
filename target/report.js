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
        "alshwyisha",
        "female",
        "9/9/1989",
        "raju nagar west stret",
        "Karoor",
        "Tamil nadu",
        "653205",
        "9994456797",
        "vfdtdjk@gmail.com",
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
  "name": "The user enters the customer details\"alshwyisha\",\"female\",\"9/9/1989\",\"raju nagar west stret\",\"Karoor\",\"Tamil nadu\",\"653205\",\"9994456797\",\"vfdtdjk@gmail.com\"and\"qwerty\"",
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
  "status": "passed"
});
formatter.step({
  "name": "The user should see success page",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.the_user_should_see_success_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/org/test/DeleteCustomer.feature");
formatter.feature({
  "name": "To test delete customer functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@deleteCustomer"
    }
  ]
});
formatter.scenario({
  "name": "To delete a customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteCustomer"
    },
    {
      "name": "@removeCustomer"
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
  "name": "The user navigate to delete customer page",
  "keyword": "And "
});
formatter.match({
  "location": "BaseClass.the_user_navigate_to_delete_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters the customer id",
  "rows": [
    {
      "cells": [
        "custId",
        "50605"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.the_user_enters_the_customer_id(DataTable)"
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
  "status": "passed"
});
formatter.step({
  "name": "The user should see customer deleted message",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.the_user_should_see_customer_deleted_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/org/test/EditCustomer.feature");
formatter.feature({
  "name": "To test edit customer functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@editCustomer"
    }
  ]
});
formatter.scenario({
  "name": "To edit customer detail",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@editCustomer"
    },
    {
      "name": "@editPhoneNo"
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
  "name": "The user navigate to edit customer page",
  "rows": [
    {
      "cells": [
        "custId",
        "535"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BaseClass.the_user_navigate_to_edit_customer_page(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user edits the customer detail",
  "rows": [
    {
      "cells": [
        "state",
        "Andhra"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.the_user_edits_the_customer_detail(DataTable)"
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
  "status": "passed"
});
formatter.step({
  "name": "The user should see update successful page",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.the_user_should_see_update_successful_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/org/test/Validation.feature");
formatter.feature({
  "name": "To test validations in new customer functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@validateNewCustomer"
    }
  ]
});
formatter.scenario({
  "name": "To Test field validations in add new customers page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@validateNewCustomer"
    },
    {
      "name": "@fieldValidation"
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
  "name": "The user submits the form",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.the_user_submits_the_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.the_user_should_see_alert_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To Test number validations in add new customers page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@numberValidation"
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
  "name": "The user enters number in name field\"\u003ccustomerName\u003e\",\"\u003ccity\u003e\"and\"\u003cstate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see number validation message",
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
        "city",
        "state"
      ]
    },
    {
      "cells": [
        "1234",
        "23445",
        "54327"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Test number validations in add new customers page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateNewCustomer"
    },
    {
      "name": "@numberValidation"
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
  "name": "The user enters number in name field\"1234\",\"23445\"and\"54327\"",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.the_user_enters_number_in_name_field_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see number validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.the_user_should_number_validation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To test character validation in add new customer page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@characterValidation"
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
  "name": "The user enters characters in fields\"\u003cpinno\u003e\",\"\u003cphone\u003e\"and\"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see character validation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "pinno",
        "phone",
        "email"
      ]
    },
    {
      "cells": [
        "asfgdr",
        "asdhj",
        "esrty"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test character validation in add new customer page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateNewCustomer"
    },
    {
      "name": "@characterValidation"
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
  "name": "The user enters characters in fields\"asfgdr\",\"asdhj\"and\"esrty\"",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.the_user_enters_characters_in_fields_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see character validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.the_user_should_see_character_validation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To test special character validation in add new customer page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@specialCharacterValidation"
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
  "name": "The user enters special characters in name field\"\u003ccustomerName\u003e\",\"\u003ccity\u003e\",\"\u003cstate\u003e\"\"\u003cpinno\u003e\",\"\u003cphone\u003e\"and\"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user should see special character validation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "customername",
        "city",
        "state",
        "pinno",
        "phone",
        "email"
      ]
    },
    {
      "cells": [
        ");#$%^",
        "^#(*\u0026",
        "(^%",
        "*(*\u0026\u003e,",
        ".,/;\u0027",
        "+!~\u003e,"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test special character validation in add new customer page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateNewCustomer"
    },
    {
      "name": "@specialCharacterValidation"
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
  "name": "The user enters special characters in name field\"\u003ccustomerName\u003e\",\"^#(*\u0026\",\"(^%\"\"*(*\u0026\u003e,\",\".,/;\u0027\"and\"+!~\u003e,\"",
  "keyword": "When "
});
formatter.match({
  "location": "BaseClass.the_user_enters_number_in_name_field_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see special character validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "BaseClass.the_user_should_see_special_character_validation_message()"
});
formatter.result({
  "status": "passed"
});
});