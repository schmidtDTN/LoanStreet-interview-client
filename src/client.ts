import axios from "axios";

export class LSClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  health() {
    axios({ method: "get", url: this.baseUrl + "/health" }).then((response) =>
      console.log(response)
    );
  }

  dbInit() {
    axios({ method: "post", url: this.baseUrl + "/db/init" }).then((response) =>
      console.log(response)
    );
  }

  createLoan(
    amount: number,
    rate: number,
    length: number,
    monthlyPayment: number
  ) {
    axios({
      method: "post",
      url: this.baseUrl + "/loan",
      headers: { "Content-Type": "application/json" },
      data: {
        amount,
        rate,
        length,
        monthly_payment: monthlyPayment,
      },
    }).then((response) => console.log(response.data));
  }

  getLoan(id: string) {
    axios({
      method: "get",
      url: this.baseUrl + "/loan/" + id,
    }).then((response) => console.log(response.data));
  }

  getLoans() {
    axios({
      method: "get",
      url: this.baseUrl + "/loans",
    }).then((response) => console.log(response.data));
  }

  updateLoan(
    id: string,
    amount: number,
    rate: number,
    length: number,
    monthlyPayment: number
  ) {
    axios({
      method: "put",
      url: this.baseUrl + "/loan/" + id,
      headers: { "Content-Type": "application/json" },
      data: {
        amount,
        rate,
        length,
        monthly_payment: monthlyPayment,
      },
    }).then((response) => console.log(response.data));
  }
}
