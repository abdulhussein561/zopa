import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class QuoteLoan_step_definitions {
    QuoteLoan quoteLoan = new QuoteLoan();
    @Given("^registered customer \"([^\"]*)\" and Current salary (\\d+) and amount to borrow (\\d+) and number of months to pay (\\d+) \\.$")
    public void registered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String MemberId,int currentSalary,int amountToBorrow,int termLength){
        quoteLoan.prepareQuote(MemberId,currentSalary,amountToBorrow,termLength);
    }
    @When("^I quote a loan$")
    public void i_quote_a_loan()   {
        quoteLoan.processQuote();
    }
    @Then("^I shoud get \"([^\"]*)\" and \"([^\"]*)\" offered and (\\d+)$")
    public void i_shoud_get_and_offered_and(String quoteOffered,  String interestRate, int statusCode) {
        quoteLoan.verifyRegisteredCustomer(quoteOffered,  interestRate,statusCode);
    }
    @Given("^Unregistered customer \"([^\"]*)\" and Current salary (\\d+) and amount to borrow (\\d+) and number of months to pay (\\d+) \\.$")
    public void unregistered_customer_and_Current_salary_and_amount_to_borrow_and_number_of_months_to_pay(String MemberId,int currentSalary,int amountToBorrow,int termLength) {
        quoteLoan.prepareQuote(MemberId,currentSalary,amountToBorrow,termLength);
    }
    @Then("^I shoud get  statusCode (\\d+)$")
    public void i_shoud_get_statusCode(int  statusCode) {
        quoteLoan.verifyUnRegisteredCustomer(statusCode);
    }

}
