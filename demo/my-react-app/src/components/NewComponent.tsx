import React from 'react';
//

// Step 1: Define what data this component expects to receive
// This is called a "Props Interface" - it's like a contract
interface GreetingProps {
  name: string;        // Required: component MUST receive a name
  age?: number;        // Optional: the ? means this prop is optional
  isVip?: boolean;     // Optional: defaults to false if not provided
}

// Step 2: Create a component that accepts props
// Props are data passed from a parent component to a child component
const Greeting: React.FC<GreetingProps> = ({ name, age = 18, isVip = false }) => {
  /*
    EXPLANATION OF THE LINE ABOVE:
    - React.FC<GreetingProps> = This is a React Functional Component that expects GreetingProps
    - ({ name, age = 18, isVip = false }) = This is "destructuring" - it extracts props from an object
    - age = 18 = Default value if age prop is not provided
    - isVip = false = Default value if isVip prop is not provided

    include special logic here
  */


  
  return (
    <div className={`greeting ${isVip ? 'vip' : 'regular'}`}>
      {/* 
        EXPLANATION OF className ABOVE:
        - We use template literals (backticks) to combine strings
        - ${isVip ? 'vip' : 'regular'} is a ternary operator inside curly braces
        - If isVip is true, className becomes "greeting vip"
        - If isVip is false, className becomes "greeting regular"
      */}
      
      {/* Display the name prop inside curly braces */}
      <h2>Hello, {name}!</h2>
      
      {/* Conditional rendering: only show age if it exists */}
      {age && <p>You are {age} years old.</p>}
      {/* 
        EXPLANATION: {age && <p>...}
        - This is called "short-circuit evaluation"
        - If age is truthy (exists and not 0), render the <p> tag
        - If age is falsy (undefined, null, 0), render nothing
      */}
      
      {/* Another conditional rendering example */}
      {isVip && <span className="vip-badge">VIP Member</span>}
      {/* Only shows the VIP badge if isVip is true */}
    </div>
  );
};

// Step 3: Use the component in a parent component and pass props
const newComponent: React.FC = () => {
  return (
    <div>
      {/* 
        Each use of <Greeting> below passes different props:
        - Props are passed as attributes (like HTML attributes)
        - The values in quotes are strings
        - The values in curly braces are TypeScript expressions
      */}
      
      {/* Passing all props */}
      <Greeting name="Alice" age={25} isVip={true} />
      {/* 
        This creates a greeting for Alice, age 25, who is a VIP
        Note: age={25} and isVip={true} use curly braces because they're not strings
      */}
      
      {/* Passing only required and one optional prop */}
      <Greeting name="Bob" age={30} />
      {/* 
        This creates a greeting for Bob, age 30, who is not VIP (isVip defaults to false)
      */}
      
      {/* Passing only the required prop */}
      <Greeting name="Charlie" />
      {/* 
        This creates a greeting for Charlie
        - age defaults to 18 (from our default parameter)
        - isVip defaults to false (from our default parameter)
      */}
    </div>
  );
};

export default newComponent;