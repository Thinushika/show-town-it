/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React, { useState } from "react";

const ClientsLogo = () => {

  const [hoveredLogo, setHoveredLogo] = useState(0);

  const logos = [
    {
      id: 1,
      path: "/imgs/client-logo/client-logo (1).png",
      hoverPath: "/imgs/client-logo/dark-logo.png"
    },
    {
      id: 2,
      path: "/imgs/client-logo/client-logo (2).png",
      hoverPath: "/imgs/client-logo/dark-logo.png"
    },
    {
      id: 3,
      path: "/imgs/client-logo/client-logo (3).png",
      hoverPath: "/imgs/client-logo/dark-logo.png"
    },
    {
      id: 4,
      path: "/imgs/client-logo/client-logo (4).png",
      hoverPath: "/imgs/client-logo/dark-logo.png"
    },
    {
      id: 5,
      path: "/imgs/client-logo/client-logo (5).png",
      hoverPath: "/imgs/client-logo/dark-logo.png"
    },
    {
      id: 6,
      path: "/imgs/client-logo/client-logo (6).png",
      hoverPath: "/imgs/client-logo/dark-logo.png"
    },
    {
      id: 7,
      path: "/imgs/client-logo/client-logo (7).png",
      hoverPath: "/imgs/client-logo/dark-logo.png"
    },
    {
      id: 8,
      path: "/imgs/client-logo/client-logo (8).png",
      hoverPath: "/imgs/client-logo/dark-logo.png"
    },
  ];
  return (
    <>
    <div className="d-flex flex-column text-center px-0 px-lg-5 w-100 pt-5 mt-5">
        <h2>Our Clients</h2>
      <div className="d-flex row row-cols-2 row-cols-sm-2 row-cols-lg-4 w-100 left-right-space pb-5 mb-5 services-styles">
        {logos.map((item) => (
            <div
              key={item.id}
              className={`col p-3 logo-container ${hoveredLogo === item.id ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredLogo(item.id)}
              onMouseLeave={() => setHoveredLogo(0)}
            >
              <Image
                src={hoveredLogo === item.id ? item.hoverPath : item.path}
                alt=""
                width={200}
                height={150}
                className="img-fluid"
                style={{
                  opacity: hoveredLogo === item.id ? 1 : 0.8, // Initially set to 0.8, then gradually fades in on hover
                }}
              />
            </div>
          ))}
      </div>
      </div>
    </>
  );
};

export default ClientsLogo;
