import React from 'react';

import MainJet from './MainJet';

function Main() {
  const dummyData = [
    {
      name: 'Jet 1',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam voluptatibus deserunt',
      key: 'jet1',
    },
    {
      name: 'Jet 2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam voluptatibus deserunt',
      key: 'jet2',
    },
    {
      name: 'Jet 3',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam voluptatibus deserunt',
      key: 'jet3',
    },
    {
      name: 'Jet 4',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam voluptatibus deserunt',
      key: 'jet4',
    },
  ];

  return (
    <main className="col">
      <h1>Latest Models!</h1>
      <section>
        {dummyData.map((data) => (
          <MainJet
            name={data.name}
            description={data.description}
            key={data.key}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
