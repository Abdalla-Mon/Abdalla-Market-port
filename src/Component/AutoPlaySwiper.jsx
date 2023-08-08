// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../sass/App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MyCard from "./Card";

export default function AutoPlaySwiper({
  arr,
  spv,
  classN,
  center = false,
  data,
}) {
  return (
    <>
      <Swiper
        slidesPerView={spv}
        spaceBetween={20}
        centeredSlides={center}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${classN} mySwiper`}
      >
        {arr.map((ele) => {
          return (
            <SwiperSlide key={ele.title}>
              <MyCard arr={ele} data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
