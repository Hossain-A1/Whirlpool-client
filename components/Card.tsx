"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { data } from "@/data/serviceData";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const Card = () => {
  return (
    <section className="py-5">
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="shadow-xl rounded overflow-hidden ">
              <div className="bg-gray-900 p-10 space-y-3">
                <span className="text-8xl text-white">{item.icon}</span>
                <h2 className="text-xl uppercase text-white">
                  {item.headline}
                </h2>
                <p className="text-gray-500">
                  {item.paragraph.substring(0, 70)}...
                </p>
                <div>
                  <Link
                    href={"/managments"}
                    className="btn btn-outline duration-300"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Card;
