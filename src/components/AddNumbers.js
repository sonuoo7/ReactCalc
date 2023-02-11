import React, { useState } from "react";

const AddNumbers = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [total, setTotal] = useState();

  const add = () => {
    setTotal(parseInt(num1) + parseInt(num2));
  };
  const sub = () => {
    setTotal(parseInt(num1) - parseInt(num2));
  };
  const multi = () => {
    setTotal(parseInt(num1) * parseInt(num2));
  };
  const handleClick = () => {
    setTotal(parseInt(num1) / parseInt(num2));
  };
  return (
    <div className="container">
      <h1>Calculator</h1>
      <div>
        <input
          type="text"
          name="Num1"
          className="input"
          placeholder="Num1"
          onChange={(event) => {
            setNum1(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          name="Num2"
          className="input"
          placeholder="Num2"
          onChange={(event) => {
            setNum2(event.target.value);
          }}
        />
      </div>
      <button className="btn" onClick={add}>
        +
      </button>
      <button className="btn" onClick={sub}>
        -
      </button>
      <button className="btn" onClick={multi}>
        *
      </button>
      <button className="btn" onClick={handleClick}>
        /
      </button>
      <div>
        <input
          type="text"
          name="Total"
          placeholder="Result ="
          className="inputf"
          value={total}
        />
      </div>
    </div>
  );
};
export default AddNumbers;
