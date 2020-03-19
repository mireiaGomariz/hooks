import React, { useState } from "react";

const Counter= () => {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const[count, setCount] = useState(0);

  // Crate imput
  // define start of the counter

  return (
    <div>
      <label></label>
        <input id="firstValue" onChange={event => setCount(Number(event.target.value))}></input>
        <p>The counter is at : {count} </p>
        <button onClick={() => setCount(count + 1)}>>
          +1
        </button>
        <button onClick={() => setCount(count - 1)}>>
          -1
        </button>

    </div>
  );
}

export default Counter;
