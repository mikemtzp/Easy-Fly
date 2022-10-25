import React from 'react';
import { useSelector } from 'react-redux';
import MainJet from './MainJet';
import Slider from 'react-slick';
import '~slick-carousel/slick/slick.css';
import '~slick-carousel/slick/slick-theme.css';

function Main() {
  const { jets } = useSelector((state) => state.jets);

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
    <main>
      <h1>
        Jets Main Page
        {jets}
      </h1>

      {dummyData.map((data) => (
        <MainJet
          name={data.name}
          description={data.description}
          key={data.key}
        />
      ))}
    </main>
  );
}

export default Main;
