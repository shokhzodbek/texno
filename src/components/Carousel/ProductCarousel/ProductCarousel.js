import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../Cards/CardProduct";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ProductCarousel.css";
import { Pagination } from "swiper/modules";
// import required modules

function ProductCarousel({ data }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide>
            <Card
              img={item.thumbnail}
              title={item.title}
              narx={item.price}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
