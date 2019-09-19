import React, { useState } from 'react';

const ClassCounter:React.FC = () => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => setCounter((prevCounter):number => prevCounter + 1);

  const decCounter = () => setCounter((prevCounter):number => prevCounter - 1);

  const resetCounter = () => setCounter(0);

  return (
    <>
      <div>{counter}</div>
      <button onClick={incCounter}>Inc Counter</button>
      <button onClick={decCounter}>Dec Counter</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  )
}

export default ClassCounter;