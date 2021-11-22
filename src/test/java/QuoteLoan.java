
import com.jayway.restassured.response.Response;
import net.minidev.json.JSONObject;
import org.junit.Assert;
import org.junit.Test;
import static com.jayway.restassured.RestAssured.given;

public class QuoteLoan {
    String quoteOffered = "";
    String interestRate = "";
    int statusCode = 0;
    Response response;
     static int currentSalary = 0;
    static int amountToBorrow = 0;
     static int termLength = 0;
     String memberId = "";

    public void prepareQuote(String MemberId,int currentSalarys,int amountToBorrows,int termLengths){
        currentSalary = currentSalarys;
        amountToBorrow = amountToBorrows;
        termLength = termLengths;
        memberId = MemberId;
    }
   // @Test
    public void processQuote(){

        JSONObject requestParams = new JSONObject();
        requestParams.put("currentSalary", currentSalary); // Cast
       requestParams.put("amountToBorrow", amountToBorrow);
       requestParams.put("termLength", termLength);
       System.out.println(requestParams);

       //Response
               response =  given()
                .header("content-type", "application/json").relaxedHTTPSValidation()
                .body(requestParams)
               // .expect().statusCode(200)
                .when().post("https://qanat-quotes-public.staging.zopa.com/api/quote?memberId="+memberId);
       response.prettyPrint();
      System.out.println( response.getBody().jsonPath().get("quoteOffered")+ "  "+
        response.getBody().jsonPath().get("interestRate")+"  "+
              response.statusCode());
      statusCode = response.statusCode();
      quoteOffered = response.getBody().jsonPath().get("quoteOffered").toString();
     // interestRate = response.getBody().jsonPath().get("interestRate").toString();



    }
    public void verifyRegisteredCustomer(String ExpectedQuoteOffer,  String expectedInterestRate, int expectedStatusCode){
        Assert.assertEquals(ExpectedQuoteOffer,quoteOffered);
       // Assert.assertEquals(expectedInterestRate,interestRate);
        Assert.assertEquals(expectedStatusCode, statusCode);
    }
    public void verifyUnRegisteredCustomer(int statusCode){

    }

}
