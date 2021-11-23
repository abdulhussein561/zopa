
Feature: Loan Quotation for Qantas Customer
  As Customer I should be able to quote Loan

  @RegisteredQantascustomer
  Scenario Outline: Quote a loan for Registered Qanat customer
    Given registered customer "<MemberId>" and Current salary <CurrentSalary> and amount to borrow <amountToBorrow> and number of months to pay <numberOfMonths> .
    When I quote a loan
    Then I shoud get "<decision>" and "<interestRate>" offered and <statusCode>
    Examples:
      |MemberId | CurrentSalary | amountToBorrow | numberOfMonths | decision | interestRate |statusCode|
      | c0b0248d-c7f1-4589-929d-34f7d000c032 |56000           |1500            |24              |true      |9.5          |200       |
      | c0b0248d-c7f1-4589-929d-34f7d000c032      |36000           |1500            |24              |true      |6.2          |200       |
      | c0b0248d-c7f1-4589-929d-34f7d000c032      |46000           |1500            |12              |true      |7.2          |200       |
      | c0b0248d-c7f1-4589-929d-34f7d000c032      |46000           |2500            |12              |true      |6.4          |200       |
      | c0b0248d-c7f1-4589-929d-34f7d000c032      |25000           |1001            |12              |true      |6.4          |200       |
      | c0b0248d-c7f1-4589-929d-34f7d000c032      |24999           |2000            |12              |false     |null         |200       |
      | c0b0248d-c7f1-4589-929d-34f7d000c032   |25000           |999            |24              |null      |null         |400       |
      | c0b0248d-c7f1-4589-929d-34f7d000c032  |25000           |25001            |36              |  null       |  null    |400       |


  @NotRegisteredQantasCustomer
  Scenario Outline: Quote a loan for unRegistered Qanat customer
    Given Unregistered customer "<MemberId>" and Current salary <CurrentSalary> and amount to borrow <amountToBorrow> and number of months to pay <numberOfMonths> .
    When I quote a loan
    Then I shoud get  statusCode <statusCode>
    Examples:
    |MemberId| CurrentSalary | amountToBorrow | numberOfMonths |statusCode |
    |abdul  |56000          |1500            |24              |404        |
