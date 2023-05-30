"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="w-full h-[75vh]">
      <Swiper
      
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={700}
        pagination={{
          clickable: true,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://images.pexels.com/photos/7534273/pexels-photo-7534273.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Ac"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="btn ">Order now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://images.pexels.com/photos/7166557/pexels-photo-7166557.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="btn btn-primary">Get now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="btn btn-secondary ">Order now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://images.pexels.com/photos/442160/pexels-photo-442160.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="btn btn-success">Service</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://media.istockphoto.com/id/1215430465/photo/air-conditioner-repairing-by-technician.jpg?b=1&s=612x612&w=0&k=20&c=XoDqsOPo_Ou5l-FLiEL3evMEmDMSRuQck54_L79Q668="
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="btn btn-warning">Contact</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://images.pexels.com/photos/7534269/pexels-photo-7534269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="btn btn-accent">Go now</button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="btn btn-info">For you</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
