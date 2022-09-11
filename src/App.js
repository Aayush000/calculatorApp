import { useState } from "react";

function App() {
  // State that manages the input from the user by showing in the UI.
  const [calc, setCalc] = useState("");
  // State that stores the final result of the operation.
  const [result, setResult] = useState("");

  // Operations that can be performed in our calculator.
  const ops = ["/", "*", "+", "-", "."];

  // Updates the operation in the UI on the calculator.
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  // Creates the button from 1 to 9 for our calculator.
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  // Calculates the final result and set it to our Calc State.
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // Deletes the last item that user enter in the calculator.
  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  // Clear the operation
  const clear = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {}
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={clear}>C</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
