import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

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
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        tag="section"
      >
        {dummyData.map((data) => (
          <SwiperSlide
            key={data.key}
            tag="ul"
            wrapperTag="li"
          >
            <MainJet
              name={data.name}
              description={data.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default Main;
