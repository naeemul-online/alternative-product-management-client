// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => swiper}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div>
            <img
              className="object-fit w-full lg:h-[600px]"
              src="https://imgbb.host/images/7yXPZ.jpeg"
              alt="slide-1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://imgbb.host/images/7yWRt.jpeg"
              alt="slide-2"
              className="object-fit w-full lg:h-[600px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://imgbb.host/images/7yiuk.jpeg"
              alt="slide-3"
              className="object-fit w-full lg:h-[600px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
