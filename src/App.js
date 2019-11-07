import React from "react";
import logo from "./logo.svg";
import "./App.css";
import background from "./images/whitebackground.jpg";

function App() {
  return (
    <div class="background">
      <div>
        <h1>MORTGAGE CALCULATOR</h1>
        <p>
          Use this mortgage calculator to estimate your monthly mortgage
          payment. You can input a different home price, down payment, loan term
          and interest rate to see how your monthly payment changes.
        </p>
      </div>

      <div>
        <form>
          Home Price:
          <br />
          <input type="text" name="home price" />
          <br />
          Down Payment:
          <br />
          <input type="text" name="down payment" />
          <br />
          Interest Rate:
          <br />
          <input type="text" name="interest rate" />
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
          <input type="text" name="property tax" />
          <br />
          Property Insurance:
          <br />
          <input type="text" name="property insurance" />
          <br />
        </form>
      </div>
    </div>
  );
}

export default App;
