import React from "react";
import "./Calculator.css";
import "bootstrap/dist/css/bootstrap.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      downPayment: 0
    };
  }

  onChangeDownPayment(e) {
    this.setState({ downPayment: e.target.value });
  }
  onChangeHomePrice(e) {
    this.setState({ homePrice: e.target.value });
  }
  onChangeInterestRate(e) {
    this.setState({ interestRate: e.target.value });
  }
  onChangePropertyTax(e) {
    this.setState({ propertyTax: e.target.value });
  }
  onChangePropertyInsurance(e) {
    this.setState({ propertyInsurance: e.target.value });
  }

  render() {
    return (
      <div className={"jumbotron calculator"}>
        <div>
          <h1>MORTGAGE CALCULATOR</h1>
          <p>
            Use this mortgage calculator to estimate your monthly mortgage
            payment. You can input a different home price, down payment, loan
            term and interest rate to see how your monthly payment changes.
          </p>
        </div>

        <div>
          <form>
            Home Price:
            <br />
            <input
              onChange={this.onChangeHomePrice}
              type="text"
              name="home price"
            />
            <br />
            Down Payment:
            <br />
            <input
              onChange={this.onChangeDownPayment}
              type="text"
              name="down payment"
            />
            <br />
            Interest Rate:
            <br />
            <input
              onChange={this.onChangeInterestRate}
              type="text"
              name="interest rate"
            />
            <br />
            Length of Loan:
            <br />
            <select name="length of loan">
              <option value="15 years">15 years</option>
              <option value="30 years">30 years</option>
              <br />
            </select>
            <br />
            Property Tax:
            <br />
            <input
              onChange={this.onChangePropertyTax}
              type="text"
              name="property tax"
            />
            <br />
            Property Insurance:
            <br />
            <input
              onChange={this.onChangePropertyInsurance}
              type="text"
              name="property insurance"
            />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
