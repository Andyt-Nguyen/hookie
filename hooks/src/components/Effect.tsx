import React, { useState, useEffect } from 'react';

const Effect = () => {
  const [counter, setCounter] = useState(0);
  const [myInput, setMyInput] = useState('');

  const incCounter = () => setCounter(counter + 1);
  const decCounter = () => setCounter(counter - 1);
  const handleInputChange = (e:any) => setMyInput(e.target.value);

  // Called every single render
  useEffect(() => {
    console.log('Using effect')
    document.title = counter.toString();
  },[counter]) // only update if the counter changed

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={myInput} />
      <p>{counter}</p>
      <button onClick={incCounter}>Inc Counter</button>
      <button onClick={decCounter}>Dec Counter</button>
    </div>
  )
}

export default Effect;