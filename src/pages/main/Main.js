/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Jet from '../../components/jet/Jet';
import './main.scss';
import { getJetsThunk } from '../../redux/jets/jetSlice';

function Main() {
  const { jets } = useSelector((state) => state.jets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJetsThunk());
  }, [dispatch]);

  const sliderSettings = {
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
    ],
  };

  return (
    <div className="home">
      <div className="home__title">
        <h1>LATEST MODELS</h1>
        <p>Please select a Jet Model</p>
      </div>
      <ul className="home__card-container">
        <Slider {...sliderSettings}>
          {jets.map((data) => (
            <Jet
              name={data.name}
              description={data.description}
              key={data.id}
            />
          ))}
        </Slider>
      </ul>
    </div>
  );
}

export default Main;
