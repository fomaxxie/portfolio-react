import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // basic Swiper styles
// import 'swiper/css/navigation'; // navigation styles
// import { Navigation } from 'swiper';

const SwiperProjects = ({ images }) => {
  return (
    <Swiper
      // modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation // This enables navigation
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperProjects;
