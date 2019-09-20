import React, { useEffect, useState } from 'react';

const MoreOnEffects = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    const interval = setInterval(inc, 1000);
    
    return () => {
      clearInterval(interval);
    }
  }, [count])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default MoreOnEffects;