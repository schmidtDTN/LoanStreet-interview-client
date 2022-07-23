import { LSClient } from "./client";

const client = new LSClient("https://loanstreet-api-test.herokuapp.com/api");
async function runAPISample() {
  // Health check
  const health = await client.health();
  console.log(health);
  // DB Initialization
  const dbInitResult = await client.dbInit();
  console.log(dbInitResult);
  // Create loans
  const loanOneId = await client.createLoan(1000, 3.25, 60, 500);
  console.log("Loan one created with ID: ", loanOneId);
  await client.createLoan(6000, 0.5, 12, 1000);
  // Get all loans
  const loans = await client.getLoans();
  console.log("All loans so far: ", loans);
  // Get one loan
  const loanOne = await client.getLoan(loanOneId);
  console.log("Just Loan One: ", loanOne);
  // Update loan and get it again to show different
  await client.updateLoan(loanOneId, 500, 3.25, 60, 100);
  const loanOneUpdated = await client.getLoan(loanOneId);
  console.log("Updated Loan One: ", loanOneUpdated);

  // Demo of error being thrown
  console.log("Attempting to retrieve a loan that doesn't exist");
  try {
    const loanThree = await client.getLoan("abc");
  } catch (e) {
    console.error(e);
  }
}

runAPISample();
