import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";

const Team = () => {
  const [hoveredImage, setHoveredImage] = useState("1");

  const handleImageHover = (index: React.SetStateAction<string>) => {
    setHoveredImage(index);
  };

  const handleImageLeave = (index: string) => {
    setHoveredImage("1");
  };

  useEffect(() => {}, [hoveredImage]);

  const teamData = [
    {
      id: 1,
      name: "Stephanie Lawrence",
      position: "CEO, Colabrio Media",
      desc: "Stephanie is an architect and founding partner, providing smart & flexible digital services.",
      socialLink1: "#",
      socialLink2: "#",
      socialLink3: "#",
    },
    {
      id: 2,
      name: "Colin Lucido",
      position: "CEO, Colabrio Media",
      desc: "Colin Lucido is an architect and founding partner, providing smart & flexible digital services.",
      socialLink1: "#",
      socialLink2: "#",
      socialLink3: "#",
    },
    {
      id: 3,
      name: "Stacey Stamper",
      position: "CEO, Colabrio Media",
      desc: "Stacey Stamper is an architect and founding partner, providing smart & flexible digital services.",
      socialLink1: "#",
      socialLink2: "#",
      socialLink3: "#",
    },
    {
      id: 3,
      name: "Stephanie Lawrence",
      position: "CEO, Colabrio Media",
      desc: "Stephanie is an architect and founding partner, providing smart & flexible digital services.",
      socialLink1: "#",
      socialLink2: "#",
      socialLink3: "#",
    },
  ];


  const teamDataMobile = [
    {
      id: 1,
      name: "Stephanie Lawrence",
      position: "CEO, Colabrio Media",
      desc: "Stephanie is an architect and founding partner, providing smart & flexible digital services.",
      socialLink1: "#",
      socialLink2: "#",
      socialLink3: "#",
      imgPath: "/imgs/team/team (3).jpg",
    },
    {
      id: 2,
      name: "Stephanie Lawrence",
      position: "CEO, Colabrio Media",
      desc: "Stephanie is an architect and founding partner, providing smart & flexible digital services.",
      socialLink1: "#",
      socialLink2: "#",
      socialLink3: "#",
      imgPath: "/imgs/team/team (2).jpg",
    },
    {
      id: 3,
      name: "Stephanie Lawrence",
      position: "CEO, Colabrio Media",
      desc: "Stephanie is an architect and founding partner, providing smart & flexible digital services.",
      socialLink1: "#",
      socialLink2: "#",
      socialLink3: "#",
      imgPath: "/imgs/team/team (1).jpg",
    },
  ];

  return (
    <>
      <div
        className="d-none d-lg-flex flex-column w-100 img-height position-relative"
        style={{ backgroundColor: "#131313 !important" }}
      >
        <div
          className="d-flex flex-column flex-lg-row w-100 h-100"
          style={{ backgroundColor: "#131313 !important" }}
        >
          {teamData.map((item) => (
            <div
              key={item.id}
              className="col-12 col-lg-3 d-flex flex-column justify-content-end p-5 h-100 text-white"
              style={{ backgroundColor: "#131313 !important" }}
            >
              <h2>{item.name}</h2>
              <p>{item.position}</p>
              <p>{item.desc}</p>
              <div className="d-flex flex-row">
                <Link className="social-icon-team me-2" href={item.socialLink1}>
                  <FaBehance />
                </Link>
                <Link className="social-icon-team me-2" href={item.socialLink2}>
                  <FaFacebookF />
                </Link>
                <Link className="social-icon-team me-2" href={item.socialLink3}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column flex-lg-row w-100 position-absolute top-0 left-0" >
          {hoveredImage === "1" && (
            <div
              className={`col-12 col-lg-3 column-display justify-content-center align-items-center text-center`}
            ></div>
          )}
          <div
            className={`col-12 col-lg-3 column-display-1-img justify-content-center align-items-center text-center`}
            onMouseEnter={() => handleImageHover("1")}
            onMouseLeave={() => handleImageLeave("1")}
          >
            <Image
              src="/imgs/team/team (3).jpg"
              alt=""
              width={400}
              height={600}
              className=" img-fluid img-height"
            />
          </div>
          {hoveredImage === "2" && (
            <div
              className={`col-12 col-lg-3 column-display justify-content-center align-items-center text-center`}
            ></div>
          )}
          <div
            className={`col-12 col-lg-3 column-display-2-img justify-content-center align-items-center text-center`}
            onMouseEnter={() => handleImageHover("2")}
            onMouseLeave={() => handleImageLeave("2")}
          >
            <Image
              src="/imgs/team/team (2).jpg"
              alt=""
              width={400}
              height={600}
              className=" img-fluid img-height"
            />
          </div>
          {hoveredImage === "3" && (
            <div
              className={`col-12 col-lg-3 column-display justify-content-center align-items-center text-center`}
            ></div>
          )}
          <div
            className={`col-12 col-lg-3 column-display-3-img justify-content-center align-items-center text-center`}
            onMouseEnter={() => handleImageHover("3")}
            onMouseLeave={() => handleImageLeave("3")}
          >
            <Image
              src="/imgs/team/team (1).jpg"
              alt=""
              width={400}
              height={600}
              className=" img-fluid img-height"
            />
          </div>
        </div>
        {/* {teamImages.map((item) => (
            <div
              key={item.id}
              className={`col-12 col-lg-3 justify-content-center align-items-center text-center ${
                hoveredItem === item.id ? "order-lg-first" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              {item.imgPath !== "" && (
                <Image
                  src={item.imgPath}
                  alt=""
                  width={400}
                  height={600}
                  className=" img-fluid img-height"
                />
              )}
            </div>
          ))} */}

        {/* mobile */}
        <div className="d-flex d-lg-none flex-column w-100 img-height position-relative">
          <div
            className="d-flex flex-column flex-lg-row w-100 h-100 text-white"
            style={{ backgroundColor: "#131313 !important" }}
          >
            {teamDataMobile.map((item) => (
              <div
                key={item.id}
                className="col-12 col-lg-3 d-flex flex-column justify-content-end h-100"
              >
                <div className="d-flex flex-column px-3 py-5">
                  <h2>{item.name}</h2>
                  <p>{item.position}</p>
                  <p>{item.desc}</p>
                  <div className="d-flex flex-row">
                    <Link
                      className="social-icon-team me-2"
                      href={item.socialLink1}
                    >
                      <FaBehance className="m-0 p-0" />
                    </Link>
                    <Link
                      className="social-icon-team me-2"
                      href={item.socialLink2}
                    >
                      <FaFacebookF className="m-0 p-0" />
                    </Link>
                    <Link
                      className="social-icon-team me-2"
                      href={item.socialLink3}
                    >
                      <FaInstagram className="m-0 p-0" />
                    </Link>
                  </div>
                </div>
                <Image
                  src={item.imgPath}
                  alt=""
                  width={400}
                  height={600}
                  className=" img-fluid img-height"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
