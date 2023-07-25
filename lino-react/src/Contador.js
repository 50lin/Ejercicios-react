import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}

export default Contador;