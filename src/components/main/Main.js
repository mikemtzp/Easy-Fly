/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainJet from './MainJet';

import './main.scss';

function Main() {
  // const { jets } = useSelector((state) => state.jets);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
    <div className="home">
      <h1>
        Jets Main Page
        {/* {jets} */}
      </h1>
      <ul className="home__card-container">
        <Slider {...settings}>
          {dummyData.map((data) => (
            <MainJet
              name={data.name}
              description={data.description}
              key={data.key}
            />
          ))}
        </Slider>
      </ul>
    </div>
  );
}

export default Main;
