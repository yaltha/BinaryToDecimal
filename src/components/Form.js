import React, { useState } from "react";

const Form = () => {
  const [binaryText, setBinaryText] = useState("");
  const [decimalText, setDecimalText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (binaryText.match(/^[0-1]+$/g) === null) {
      setErrorMessage("Enter either 0 or 1");
      return;
    }
    setErrorMessage("");

    const reversedBinaryText = binaryText.split("").map(Number).reverse();
    const result = reversedBinaryText.reduce(
      (accumulator, currentValue, idx) =>
        accumulator + currentValue * Math.pow(2, idx)
    );
    setDecimalText(result);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label-input-text">Binary input:</label>
      <input
        className="input"
        type="text"
        name="binary"
        value={binaryText}
        placeholder="Enter 0 or 1"
        autoComplete="off"
        onChange={(event) => setBinaryText(event.target.value)}
      />
      {errorMessage && (
        <span style={{ color: "red", textAlign: "left" }}>{errorMessage}</span>
      )}

      <button type="submit">Convert</button>

      <label className="label-input-text">Decimal output</label>
      <input
        className="input"
        type="text"
        name="decimal"
        value={decimalText}
        disabled
      />
    </form>
  );
};

export default Form;
