import React, { useState } from 'react';

const Counter: React.FC = () => {
  // STEP 1: Create state using useState hook
  const [count, setCount] = useState<number>(0);
  /*
    EXPLANATION OF THE LINE ABOVE:
    - useState<number>(0) creates a state variable that holds a number, starting at 0
    - It returns an array with exactly 2 items:
      [0]: count = the current state value
      [1]: setCount = a function to update the state
    - We use "array destructuring" to get both items: [count, setCount]
    - When setCount is called, the component re-renders with the new value
  */
  
  const [step, setStep] = useState<number>(1);
  // Another state variable for how much to increment/decrement by

  // STEP 2: Create functions that update state
  const increment = () => {
    // Update count by adding step to the current count value
    setCount(prevCount => prevCount + step);
    /*
      EXPLANATION:
      - We pass a function to setCount instead of a direct value
      - prevCount represents the current value of count
      - This ensures we get the most up-to-date value
      - React will re-render the component with the new count value
    */
  };

  const decrement = () => {
    // Update count by subtracting step from current count
    setCount(prevCount => prevCount - step);
  };

  const reset = () => {
    // Reset count back to 0
    setCount(0);
    // We can pass the value directly when we don't need the previous value
  };

  // STEP 3: Return TSX that displays state and provides ways to change it
  return (
    <div className="counter">
      {/* Display the current count value using curly braces */}
      <h2>Counter: {count}</h2>
      
      <div className="step-control">
        <label>Step: </label>
        {/* 
          Controlled input: the input's value is controlled by React state
          - value={step} makes the input show the current step state
          - onChange updates the state when user types
        */}
        <input 
          type="number" 
          value={step}  
          onChange={(e) => setStep(parseInt(e.target.value) || 1)}
          /*
            EXPLANATION OF onChange:
            - (e) => this is an arrow function that receives an "event" object
            - e.target.value gets the text the user typed (always a string)
            - parseInt() converts the string to a number
            - || 1 means "or 1" - if parseInt fails, use 1 as default
            - setStep() updates the step state with the new number
          */
          min="1"  
        />
      </div>

      <div className="counter-controls">
        {/* 
          Event handlers: functions that run when buttons are clicked
          Notice we pass function references, not function calls
          - onClick={decrement} = correct (function reference)
          - onClick={decrement()} = incorrect (calls function immediately)
        */}
        <button onClick={decrement}>- {step}</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+ {step}</button>
        
        {/* The {step} inside the button text shows the current step value */}
      </div>
    </div>
  );
};

export default Counter;