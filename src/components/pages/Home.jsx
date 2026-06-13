import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-[400px]"
      >
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/f915ff9f-4ef6-4956-bbba-6a9ad6fe6be1_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/149a722d-768f-4ab3-8523-470aaf94d027_NP-1976-688.jpg_2200x2200q80.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/ed9d650d-4eda-425d-8d40-f60b57af212e_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/789445f7-6256-4559-8801-7f389ef05b07_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="p-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;