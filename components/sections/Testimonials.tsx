import { useContext, useEffect, useState } from "react";
import {
  BsArrowLeftShort,
  BsArrowRight,
  BsArrowRightShort,
} from "react-icons/bs";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  Mousewheel,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel";
import Image from "next/image";

// theme styles
import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";
import { ThemeContext } from "@/components/theme/ThemeProvider";

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const { theme } = useContext(ThemeContext);
  const prevHomeButton =
    theme === "dark" ? darkStyles.prevClientsButton : lightStyles.prevClientsButton;
  const nextHomeButton =
    theme === "dark" ? darkStyles.nextClientsButton : lightStyles.nextClientsButton;
  const sliderStyles =
    theme === "dark" ? darkStyles.sliderbg : lightStyles.sliderbg;
    const slidelineColor =
    theme === "dark" ? darkStyles.slidelineColor : lightStyles.slidelineColor;

  useEffect(() => {}, [activeButtonIndex]);

  const testimonialsData = [
    {
      id: 1,
      imgPath: "/imgs/testimonials/clients (1).png",
      desc: `I tell you what, there has never been an issue that Cory from the Colabrio Support Team hasn't been able to solve for me.`,
      name: "Alex Regelman",
      position: "Co-founder, Colabrio",
    },
    {
      id: 2,
      imgPath: "/imgs/testimonials/clients (2).png",
      desc: `I tell you what, there has never been an issue that Cory from the Colabrio Support Team hasn't been able to solve for me.`,
      name: "Laura Morton",
      position: "UI/UX Designer, Colabrio",
    },
    {
      id: 3,
      imgPath: "/imgs/testimonials/clients (3).jpg",
      desc: `I tell you what, there has never been an issue that Cory from the Colabrio Support Team hasn't been able to solve for me.`,
      name: "Stacey Rickson",
      position: "Project Manager, Colabrio",
    },
  ];

  return (
    <div className="d-flex flex-column flex-lg-row left-right-space py-5 w-100 testimonials-styles">
      <div className="col-12 col-lg-6">
        <h3>Testimonials</h3>
        <h2 className="mb-4">
          What our clients say <br /> about our studio.
        </h2>
        <button type="submit" className="conatct-btn px-3 py-2">
          More Reviews <BsArrowRight />
        </button>
      </div>
      {/* slider */}
      <div className="col-12 col-lg-6 position-relative">
        <button className={`${prevHomeButton} prevbtnC`}>
          <BsArrowLeftShort />
        </button>
        <Swiper
          id="testimonialsSlider"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Mousewheel,
          ]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          speed={500}
          loop={true}
          navigation={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => {
            console.log(swiper.activeIndex);
            setActiveButtonIndex(swiper.activeIndex);
          }}
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={`d-flex testimonial-slider-style flex-column px-lg-5 py-5 ${sliderStyles}`}
              >
                <Image
                  src={item.imgPath}
                  alt=""
                  width={100}
                  height={100}
                  className="img-fluid mb-3 round-image"
                />
                <p>{item.desc}</p>
                <h2>{item.name}</h2>
                <h3>{item.position}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={`${nextHomeButton} nextbtnC`}>
          <BsArrowRightShort />
        </button>
        <div className="d-flex flex-row align-items-center px-lg-5 sideline-container">
          <p className="mb-0">{activeButtonIndex}</p>
          <div className={`slideline mx-2 ${slidelineColor}`}></div>
          <p className="mb-0 ">{testimonialsData.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
