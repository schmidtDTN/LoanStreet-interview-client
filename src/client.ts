import axios from "axios";

// LoanStreet demo Client class
export class LSClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Health check function
  async health(): Promise<any> {
    const healthResult = axios({ method: "get", url: this.baseUrl + "/health" })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Error getting API health: " + error.response.status);
      });
    return healthResult;
  }

  // Function to call the database initializing endpoint
  async dbInit(): Promise<any> {
    const initResult = axios({ method: "post", url: this.baseUrl + "/db/init" })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(
          "Error initializing database: " + error.response.status
        );
      });
    return initResult;
  }

  // Function to receive loan information and call the endpoint to create the loan
  async createLoan(
    amount: number,
    rate: number,
    length: number,
    monthlyPayment: number
  ): Promise<any> {
    const createResult = axios({
      method: "post",
      url: this.baseUrl + "/loan",
      headers: { "Content-Type": "application/json" },
      data: {
        amount,
        rate,
        length,
        monthly_payment: monthlyPayment,
      },
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Error creating loan: " + error.response.status);
      });
    return createResult;
  }

  // Function to call the endpoint to get a loan by ID
  async getLoan(id: string): Promise<any> {
    const loan = axios({
      method: "get",
      url: this.baseUrl + "/loan/" + id,
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Error retrieving loan: " + error.response.status);
      });
    return loan;
  }

  // Function to call the endpoint to get all loans
  async getLoans(): Promise<any> {
    const loans = axios({
      method: "get",
      url: this.baseUrl + "/loans",
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Error retrieving loans: " + error.response.status);
      });
    return loans;
  }

  // Function that takes in a loan ID and data and calls the endpoint to update that loan
  async updateLoan(
    id: string,
    amount: number,
    rate: number,
    length: number,
    monthlyPayment: number
  ): Promise<any> {
    const updateResult = axios({
      method: "put",
      url: this.baseUrl + "/loan/" + id,
      headers: { "Content-Type": "application/json" },
      data: {
        amount,
        rate,
        length,
        monthly_payment: monthlyPayment,
      },
    })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Error updating loan: " + error.response.status);
      });
    return updateResult;
  }
}
