/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import React from "react";

const ClientsLogo = () => {
  const logos = [
    {
      id: 1,
      path: "/imgs/client-logo/client-logo (1).png",
    },
    {
      id: 2,
      path: "/imgs/client-logo/client-logo (2).png",
    },
    {
      id: 3,
      path: "/imgs/client-logo/client-logo (3).png",
    },
    {
      id: 4,
      path: "/imgs/client-logo/client-logo (4).png",
    },
    {
      id: 5,
      path: "/imgs/client-logo/client-logo (5).png",
    },
    {
      id: 6,
      path: "/imgs/client-logo/client-logo (6).png",
    },
    {
      id: 7,
      path: "/imgs/client-logo/client-logo (7).png",
    },
    {
      id: 8,
      path: "/imgs/client-logo/client-logo (8).png",
    },
  ];
  return (
    <>
    <div className="d-flex flex-column text-center px-0 px-lg-5 w-100 pt-5 mt-5">
        <h2>Our Clients</h2>
      <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-lg-4 w-100 left-right-space pb-5 mb-5 services-styles">
        {logos.map((item) => (
          <div key={item.id} className="col p-3 ">
            <Image
              src={item.path}
              alt=""
              width={200}
              height={150}
              className="img-fluid"
            />
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default ClientsLogo;
