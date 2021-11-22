$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoanQuotationForNewCutomer.feature");
formatter.feature({
  "line": 2,
  "name": "Loan Quotation for Qantas Customer",
  "description": "As Customer I should be able to quotate Loan",
  "id": "loan-quotation-for-qantas-customer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"\u003cMemberId\u003e\" and Current salary \u003cCurrentSalary\u003e and amount to borrow \u003camountToBorrow\u003e and number of months to pay \u003cnumberOfMonths\u003e .",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"\u003cdecision\u003e\" and \"\u003cinterestRate\u003e\" offered and \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;",
  "rows": [
    {
      "cells": [
        "MemberId",
        "CurrentSalary",
        "amountToBorrow",
        "numberOfMonths",
        "decision",
        "interestRate",
        "statusCode"
      ],
      "line": 11,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;1"
    },
    {
      "cells": [
        "c0b0248d-c7f1-4589-929d-34f7d000c032",
        "56000",
        "1500",
        "24",
        "true",
        "9.5",
        "200"
      ],
      "line": 12,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;2"
    },
    {
      "cells": [
        "c0b0248d-c7f1-4589-929d-34f7d000c032",
        "36000",
        "1500",
        "24",
        "true",
        "6.2",
        "200"
      ],
      "line": 13,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;3"
    },
    {
      "cells": [
        "c0b0248d-c7f1-4589-929d-34f7d000c032",
        "46000",
        "1500",
        "12",
        "true",
        "7.2",
        "200"
      ],
      "line": 14,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;4"
    },
    {
      "cells": [
        "c0b0248d-c7f1-4589-929d-34f7d000c032",
        "46000",
        "2500",
        "12",
        "true",
        "6.4",
        "200"
      ],
      "line": 15,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;5"
    },
    {
      "cells": [
        "c0b0248d-c7f1-4589-929d-34f7d000c032",
        "25000",
        "1001",
        "12",
        "true",
        "6.4",
        "200"
      ],
      "line": 16,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;6"
    },
    {
      "cells": [
        "c0b0248d-c7f1-4589-929d-34f7d000c032",
        "24999",
        "2000",
        "12",
        "false",
        "null",
        "200"
      ],
      "line": 17,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;7"
    },
    {
      "cells": [
        "c0b0248d-c7f1-4589-929d-34f7d000c032",
        "25000",
        "999",
        "24",
        "null",
        "null",
        "400"
      ],
      "line": 18,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;8"
    },
    {
      "cells": [
        "c0b0248d-c7f1-4589-929d-34f7d000c032",
        "25000",
        "25001",
        "36",
        "null",
        "null",
        "400"
      ],
      "line": 19,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"c0b0248d-c7f1-4589-929d-34f7d000c032\" and Current salary 56000 and amount to borrow 1500 and number of months to pay 24 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"true\" and \"9.5\" offered and 200",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c0b0248d-c7f1-4589-929d-34f7d000c032",
      "offset": 21
    },
    {
      "val": "56000",
      "offset": 78
    },
    {
      "val": "1500",
      "offset": 105
    },
    {
      "val": "24",
      "offset": 138
    }
  ],
  "location": "QuoteLoan_step_definitions.registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 219290555,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 2153339381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 13
    },
    {
      "val": "9.5",
      "offset": 24
    },
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_and_offered_and(String,String,int)"
});
formatter.result({
  "duration": 1586714,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"c0b0248d-c7f1-4589-929d-34f7d000c032\" and Current salary 36000 and amount to borrow 1500 and number of months to pay 24 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"true\" and \"6.2\" offered and 200",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c0b0248d-c7f1-4589-929d-34f7d000c032",
      "offset": 21
    },
    {
      "val": "36000",
      "offset": 78
    },
    {
      "val": "1500",
      "offset": 105
    },
    {
      "val": "24",
      "offset": 138
    }
  ],
  "location": "QuoteLoan_step_definitions.registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 183628,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 392889406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 13
    },
    {
      "val": "6.2",
      "offset": 24
    },
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_and_offered_and(String,String,int)"
});
formatter.result({
  "duration": 123459,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"c0b0248d-c7f1-4589-929d-34f7d000c032\" and Current salary 46000 and amount to borrow 1500 and number of months to pay 12 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"true\" and \"7.2\" offered and 200",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c0b0248d-c7f1-4589-929d-34f7d000c032",
      "offset": 21
    },
    {
      "val": "46000",
      "offset": 78
    },
    {
      "val": "1500",
      "offset": 105
    },
    {
      "val": "12",
      "offset": 138
    }
  ],
  "location": "QuoteLoan_step_definitions.registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 178051,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 1174712862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 13
    },
    {
      "val": "7.2",
      "offset": 24
    },
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_and_offered_and(String,String,int)"
});
formatter.result({
  "duration": 111964,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"c0b0248d-c7f1-4589-929d-34f7d000c032\" and Current salary 46000 and amount to borrow 2500 and number of months to pay 12 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"true\" and \"6.4\" offered and 200",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c0b0248d-c7f1-4589-929d-34f7d000c032",
      "offset": 21
    },
    {
      "val": "46000",
      "offset": 78
    },
    {
      "val": "2500",
      "offset": 105
    },
    {
      "val": "12",
      "offset": 138
    }
  ],
  "location": "QuoteLoan_step_definitions.registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 212931,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 668246845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 13
    },
    {
      "val": "6.4",
      "offset": 24
    },
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_and_offered_and(String,String,int)"
});
formatter.result({
  "duration": 158282,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"c0b0248d-c7f1-4589-929d-34f7d000c032\" and Current salary 25000 and amount to borrow 1001 and number of months to pay 12 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"true\" and \"6.4\" offered and 200",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c0b0248d-c7f1-4589-929d-34f7d000c032",
      "offset": 21
    },
    {
      "val": "25000",
      "offset": 78
    },
    {
      "val": "1001",
      "offset": 105
    },
    {
      "val": "12",
      "offset": 138
    }
  ],
  "location": "QuoteLoan_step_definitions.registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 142592,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 1753454064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 13
    },
    {
      "val": "6.4",
      "offset": 24
    },
    {
      "val": "200",
      "offset": 41
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_and_offered_and(String,String,int)"
});
formatter.result({
  "duration": 105481,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"c0b0248d-c7f1-4589-929d-34f7d000c032\" and Current salary 24999 and amount to borrow 2000 and number of months to pay 12 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"false\" and \"null\" offered and 200",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c0b0248d-c7f1-4589-929d-34f7d000c032",
      "offset": 21
    },
    {
      "val": "24999",
      "offset": 78
    },
    {
      "val": "2000",
      "offset": 105
    },
    {
      "val": "12",
      "offset": 138
    }
  ],
  "location": "QuoteLoan_step_definitions.registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 161215,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 736619971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 13
    },
    {
      "val": "null",
      "offset": 25
    },
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_and_offered_and(String,String,int)"
});
formatter.result({
  "duration": 138132,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"c0b0248d-c7f1-4589-929d-34f7d000c032\" and Current salary 25000 and amount to borrow 999 and number of months to pay 24 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"null\" and \"null\" offered and 400",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c0b0248d-c7f1-4589-929d-34f7d000c032",
      "offset": 21
    },
    {
      "val": "25000",
      "offset": 78
    },
    {
      "val": "999",
      "offset": 105
    },
    {
      "val": "24",
      "offset": 137
    }
  ],
  "location": "QuoteLoan_step_definitions.registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 160877,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 1582501487,
  "error_message": "java.lang.NullPointerException\n\tat QuoteLoan.processQuote(QuoteLoan.java:44)\n\tat QuoteLoan_step_definitions.i_quote_a_loan(QuoteLoan_step_definitions.java:15)\n\tat ✽.When I quote a loan(LoanQuotationForNewCutomer.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 13
    },
    {
      "val": "null",
      "offset": 24
    },
    {
      "val": "400",
      "offset": 42
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_and_offered_and(String,String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Quote a loan for Registered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-registered-qanat-customer;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@RegisteredQantascustomer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "registered customer \"c0b0248d-c7f1-4589-929d-34f7d000c032\" and Current salary 25000 and amount to borrow 25001 and number of months to pay 36 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I shoud get \"null\" and \"null\" offered and 400",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "c0b0248d-c7f1-4589-929d-34f7d000c032",
      "offset": 21
    },
    {
      "val": "25000",
      "offset": 78
    },
    {
      "val": "25001",
      "offset": 105
    },
    {
      "val": "36",
      "offset": 139
    }
  ],
  "location": "QuoteLoan_step_definitions.registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 165192,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 1571903245,
  "error_message": "java.lang.NullPointerException\n\tat QuoteLoan.processQuote(QuoteLoan.java:44)\n\tat QuoteLoan_step_definitions.i_quote_a_loan(QuoteLoan_step_definitions.java:15)\n\tat ✽.When I quote a loan(LoanQuotationForNewCutomer.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "null",
      "offset": 13
    },
    {
      "val": "null",
      "offset": 24
    },
    {
      "val": "400",
      "offset": 42
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_and_offered_and(String,String,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Quote a loan for unRegistered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-unregistered-qanat-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@NotRegisteredQantasCustomer"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Unregistered customer \"\u003cMemberId\u003e\" and Current salary \u003cCurrentSalary\u003e and amount to borrow \u003camountToBorrow\u003e and number of months to pay \u003cnumberOfMonths\u003e .",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I shoud get  statusCode \u003cstatusCode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-unregistered-qanat-customer;",
  "rows": [
    {
      "cells": [
        "MemberId",
        "CurrentSalary",
        "amountToBorrow",
        "numberOfMonths",
        "statusCode"
      ],
      "line": 28,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-unregistered-qanat-customer;;1"
    },
    {
      "cells": [
        "abdul",
        "56000",
        "1500",
        "24",
        "404"
      ],
      "line": 29,
      "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-unregistered-qanat-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Quote a loan for unRegistered Qanat customer",
  "description": "",
  "id": "loan-quotation-for-qantas-customer;quote-a-loan-for-unregistered-qanat-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@NotRegisteredQantasCustomer"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Unregistered customer \"abdul\" and Current salary 56000 and amount to borrow 1500 and number of months to pay 24 .",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I quote a loan",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I shoud get  statusCode 404",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abdul",
      "offset": 23
    },
    {
      "val": "56000",
      "offset": 49
    },
    {
      "val": "1500",
      "offset": 76
    },
    {
      "val": "24",
      "offset": 109
    }
  ],
  "location": "QuoteLoan_step_definitions.unregistered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String,int,int,int)"
});
formatter.result({
  "duration": 172138,
  "status": "passed"
});
formatter.match({
  "location": "QuoteLoan_step_definitions.i_quote_a_loan()"
});
formatter.result({
  "duration": 816298589,
  "error_message": "java.lang.NullPointerException\n\tat QuoteLoan.processQuote(QuoteLoan.java:44)\n\tat QuoteLoan_step_definitions.i_quote_a_loan(QuoteLoan_step_definitions.java:15)\n\tat ✽.When I quote a loan(LoanQuotationForNewCutomer.feature:25)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 24
    }
  ],
  "location": "QuoteLoan_step_definitions.i_shoud_get_statusCode(int)"
});
formatter.result({
  "status": "skipped"
});
});