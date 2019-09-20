import React, { useEffect, useState } from 'react';

const EffectOnce = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mouseMove = (e:any) => {
    console.log('Mouse event');
    setMousePos({ x: e.clientX, y: e.clientY });
  }
  // This is just like componentDidMount when you specify and empty array
  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    // To remove the listener (cleanup)
    return () => {
      console.log('Component unmounting');
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])

  return (
    <div>
      <p>X: {mousePos.x}</p>
      <p>Y: {mousePos.y}</p>
    </div>
  )
}

export default EffectOnce;