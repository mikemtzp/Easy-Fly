import React from 'react';
import { useSelector } from 'react-redux';

function Main() {
  const { jets } = useSelector((state) => state.jets);

  return (
    <main className="col">
      <h1>{jets}</h1>
      <p color="primary"> main page</p>
    </main>
  );
}

export default Main;
