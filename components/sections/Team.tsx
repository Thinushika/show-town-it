import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";

const Team = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (id: any) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

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
      name: "Stephanie Lawrence",
      position: "CEO, Colabrio Media",
      desc: "Stephanie is an architect and founding partner, providing smart & flexible digital services.",
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

  const teamImages = [
    {
      id: 1,
      imgPath: "",
    },
    {
      id: 2,
      imgPath: "/imgs/products/products (1).jpeg",
    },
    {
      id: 3,
      imgPath: "/imgs/products/products (2).jpeg",
    },
    {
      id: 4,
      imgPath: "/imgs/products/products (3).jpeg",
    },
  ];

  return (
    <>
      <div className="d-flex flex-column w-100 img-height position-relative">
        <div className="d-flex flex-column flex-lg-row w-100 h-100">
          {teamData.map((item) => (
            <div
              key={item.id}
              className="col-12 col-lg-3 d-flex flex-column justify-content-end p-5 h-100"
            >
              <h2>{item.name}</h2>
              <p>{item.position}</p>
              <p>{item.desc}</p>
              <div className="d-flex flex-row">
                <Link href={item.socialLink1}>
                  <FaBehance />
                </Link>
                <Link href={item.socialLink2}>
                  <FaFacebookF />
                </Link>
                <Link href={item.socialLink3}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column flex-lg-row w-100 position-relative position-lg-absolute top-0 left-0">
          {teamImages.map((item) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
