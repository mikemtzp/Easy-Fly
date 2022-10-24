import React from 'react';
import { useSelector } from 'react-redux';

function Main() {
  const { jets } = useSelector((state) => state.jets);

  return (

    <main className="col">
      <h1>{jets}</h1>
    </main>
  );
}

export default Main;
