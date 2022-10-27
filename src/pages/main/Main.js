/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../../components/arrows/LeftArrow';
import Jet from '../../components/jet/Jet';
import './main.scss';
import { getJetsThunk } from '../../redux/jets/jetSlice';
import RightArrow from '../../components/arrows/RightArrow';

function Main() {
  // const { jets } = useSelector((state) => state.jets);
  const jets = useSelector((state) => state.jets.jets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!jets.length) {
      dispatch(getJetsThunk());
    }
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <LeftArrow to="prev" />,
    nextArrow: <RightArrow to="next" />,
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
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="home">
      <div className="home__title">
        <h1>LATEST MODELS</h1>
        <p>Please select a Jet Model</p>
      </div>
      <ul className="home__card-container">
        <Slider {...settings}>
          {jets.map((jet) => (
            <Jet
              name={jet.name}
              description={jet.description}
              image={jet.image}
              key={jet.id}
            />
          ))}
        </Slider>
      </ul>
    </div>
  );
}

export default Main;
