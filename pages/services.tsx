import Footer from "@/components/layout/footer";
import React from "react";
import MainSectionServices from "@/components/mainSections/Services";
import { BsBullseye } from "react-icons/bs";
import Link from "next/link";

const services = () => {
  const servicesData = [
    {
      id: 1,
      icon: "BsBullseye",
      title: "Research & Discovery",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
    {
      id: 2,
      icon: "BsBullseye",
      title: "Identity & Branding",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
    {
      id: 3,
      icon: "BsBullseye",
      title: "Research & Discovery",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
    {
      id: 4,
      icon: "BsBullseye",
      title: "Research & Discovery",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
    {
      id: 5,
      icon: "BsBullseye",
      title: "Research & Discovery",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
    {
      id: 6,
      icon: "BsBullseye",
      title: "Research & Discovery",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
    {
      id: 7,
      icon: "BsBullseye",
      title: "Research & Discovery",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
    {
      id: 8,
      icon: "BsBullseye",
      title: "Research & Discovery",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
    {
      id: 9,
      icon: "BsBullseye",
      title: "Research & Discovery",
      desc: "Get an utilized intensity of structure to tackle complex issues and changes.",
      link: "#",
    },
  ];
  return (
    <>
      <MainSectionServices />
      {/* space */}
      <div className="space-section"></div>
      {/* icon grid */}
      <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-lg-3 w-100 left-right-space py-5 my-5 services-styles">
        {servicesData.map((item) => (
          <div key={item.id} className="col mb-5 mt-lg-3 mb-lg-5">
            <div className="d-flex flex-row mb-2">
              <div className="icon-box">
                <BsBullseye className="icon-style" />
              </div>
              <h3 className="ms-3">{item.title}</h3>
            </div>
            <p>
              {item.desc}
            </p>
            <Link href={item.link} className="social-links ">
              Read more
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default services;
