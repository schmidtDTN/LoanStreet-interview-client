"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.LSClient = void 0;
const axios_1 = __importDefault(require("axios"));
class LSClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  health() {
    (0, axios_1.default)({ method: "get", url: this.baseUrl + "/health" }).then(
      (response) => console.log(response)
    );
  }
  dbInit() {
    (0, axios_1.default)({
      method: "post",
      url: this.baseUrl + "/db/init",
    }).then((response) => console.log(response));
  }
  createLoan(amount, rate, length, monthlyPayment) {
    (0, axios_1.default)({
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
  getLoan(id) {
    (0, axios_1.default)({
      method: "get",
      url: this.baseUrl + "/loan/" + id,
    }).then((response) => console.log(response.data));
  }
  getLoans() {
    (0, axios_1.default)({
      method: "get",
      url: this.baseUrl + "/loans",
    }).then((response) => console.log(response.data));
  }
  updateLoan(id, amount, rate, length, monthlyPayment) {
    (0, axios_1.default)({
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
exports.LSClient = LSClient;
