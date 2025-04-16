import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>
        {count} and {number}
      </h1>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber(n => n + 1);
          setNumber(42);
        }}
      >
        Press
      </button>
    </div>
  );
}
