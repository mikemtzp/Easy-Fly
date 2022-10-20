import React from 'react';

import Nav from '../nav/Nav';

function Main() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <main className="col">
          <h1>Hello main component!</h1>
        </main>
      </div>
    </div>
  );
}

export default Main;
