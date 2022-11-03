/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Jet from '../../components/jet/Jet';
import './main.scss';
import LeftArrow from '../../components/arrows/LeftArrow';
import RightArrow from '../../components/arrows/RightArrow';
import Nav from '../../components/nav/Nav';

const Main = () => {
  const { jets } = useSelector((state) => state.jets);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <LeftArrow to="prev" />,
    nextArrow: <RightArrow to="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 500,
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
    <>
      <Nav>
        <div className="home">
          <div className="home__title">
            <h1>LATEST MODELS</h1>
            <p>Please select a Jet Model</p>
          </div>
          <div className="dots-container">
            <div className="dots" />
          </div>
          <ul className="home__card-container">
            <Slider {...sliderSettings}>
              {jets.map((data) => (
                <Jet
                  name={data.name}
                  description={data.description}
                  image={data.image}
                  key={data.id}
                  id={data.id}
                />
              ))}
            </Slider>
          </ul>
        </div>
      </Nav>
    </>
  );
};

export default Main;
