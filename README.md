
==========================================
Prerequisite:
================
an internet connection so maven can download all third part libraries
Maven 3.6.3
java 1.8 - java version "11.0.7"
==========================================
To run the test:
===========
Use Terminal
navigate to zopa folder
mvn install
mvn test
=============================================
Issues:
=======
1) Unstable Environment -> The server is temporarily unable to service
{"message": "The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later."}
2)Errors
    2.1)quoting less than the minimum accepted returns two objects different the expected.
        Expected Result:
            "A quote decision is returned where quoteOffered = False"
        Actual result:
             {"amountToBorrow":1000,"currentSalary":25000,"termLength":12}
               {"message": "1000 is outside the lending range: 1000 <= TOTAL <= 25000"}
               
    2.2)quoting more than, the maximum accepted returns two objects different, than expected result.
         Expected Result:
                 "A quote decision is returned where quoteOffered = False"
        Actual result:
            {"amountToBorrow":1000,"currentSalary":25000,"termLength":12}
            {"message": "1000 is outside the lending range: 1000 <= TOTAL <= 25000"}

    2.3 A non-existent Qanat member
        Expected result:
            HTTP 404 with error message
        Actual result:
            {"amountToBorrow":1500,"currentSalary":56000,"termLength":24}
            StateCode: 404

    2.4 interestRate is random decimal number
        same request will different interestRate every thime.





