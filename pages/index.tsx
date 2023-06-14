import { Inter } from "next/font/google";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  Mousewheel
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
import { ThemeContext } from "@/components/theme/ThemeProvider";

// theme styles
import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    console.log("Active : ", activeSlide);
  }, [activeSlide]);

  const slideContent = [
    {
      id: 0,
      slideNumber: 1,
      path: "/imgs/hero-img (1).jpeg",
      dateTitlePart1: "Strategy, UI/UX",
      dateTitlePart2: "June 23, 2023",
      title: "JBQ Crafting Official Collab",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae odio pretium, pellentesque enim et, gravida lorem.",
      link: "/",
    },
    {
      id: 1,
      slideNumber: 2,
      path: "/imgs/hero-img (2).jpeg",
      dateTitlePart1: "Strategy, UI/UX",
      dateTitlePart2: "June 23, 2023",
      title: "Diseño Ave K3 Business Center.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae odio pretium, pellentesque enim et, gravida lorem.",
      link: "/",
    },
    {
      id: 2,
      slideNumber: 3,
      path: "/imgs/hero-img (3).jpeg",
      dateTitlePart1: "Strategy, UI/UX",
      dateTitlePart2: "June 23, 2023",
      title: "WRE 22 CrossFit World’s Relays.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae odio pretium, pellentesque enim et, gravida lorem.",
      link: "/",
    },
    {
      id: 3,
      slideNumber: 4,
      path: "/imgs/hero-img (4).jpeg",
      dateTitlePart1: "Strategy, UI/UX",
      dateTitlePart2: "June 23, 2023",
      title: "WRE 22 CrossFit World’s Relays.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae odio pretium, pellentesque enim et, gravida lorem.",
      link: "/",
    },
    {
      id: 4,
      slideNumber: 5,
      path: "/imgs/hero-img (5).jpeg",
      dateTitlePart1: "Strategy, UI/UX",
      dateTitlePart2: "June 23, 2023",
      title: "WRE 22 CrossFit World’s Relays.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae odio pretium, pellentesque enim et, gravida lorem.",
      link: "/",
    },
  ];

  const next = "swiper-button-next"
  const prev = "swiper-button-prev"
  const { theme } = useContext(ThemeContext);
  const buttonStyles =
    theme === "dark" ? darkStyles.heroButton : lightStyles.heroButton;
  const bgStyles =
    theme === "dark" ? darkStyles.heroImageBg : lightStyles.heroImageBg;

    
  return (
    <>
      <div className="d-flex flex-column w-100 h-100 justify-content-center  p-0 m-0 position-relative">
        <div className="dot-pattern position-absolute top-0 left-0"></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Mousewheel]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          speed={500}
          loop={true}
          mousewheel
          // scrollbar={{ draggable: true,  }}
          pagination={{ clickable: true }}
          navigation={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => {
            console.log(swiper.activeIndex)
            setActiveButtonIndex(swiper.activeIndex)
          }}
        >
          {slideContent.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column w-100 h-100 p-0 m-0 position-relative ">
                  <div className="d-flex position-absolute hero-image-bg-text top-0 left-0 text-center">
                    {item.title}
                  </div>
                  <div
                    className={`d-flex position-absolute hero-image-bg top-0 left-0 ${bgStyles}`}
                  ></div>
                  <div
                    className={`d-flex position-absolute hero-image-bg-image top-0 left-0 ${bgStyles}`}
                  >
                    <Image src={item.path} alt='' width={1360} height={992} className="img-fluid" />
                  </div>
                  <div className="d-flex position-absolute hero-image-bg-dots top-0 left-0"></div>
                  <div className="d-flex flex-column w-50 m-0 s-space hero py-5">
                    <p>
                      {item.dateTitlePart1}
                      <span className="red-font">.</span>
                      {item.dateTitlePart2}
                    </p>
                    <h2>{item.title}</h2>
                    <p className="">{item.desc}</p>
                    <Link href={"/"}>
                      <button className={`${buttonStyles} px-2 py-2`}>
                        Show Project <BsArrowRight className="ms-2" />{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex flex-column position-absolute justify-content-center align-items-center right-0 top-0 h-100 slidePosition">
          {slideContent.map((item , index) => (
            <div
              key={item.id}
              className="wrap-button d-flex justify-content-center align-items-center"
            >
              <button
                className={`slide-number`}
              >
                0{item.slideNumber}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
