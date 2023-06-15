/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "@/styles/Home.module.css";
import LetsTalkButton from "@/components/buttons/headerBtn";
import { ThemeContext } from "@/components/theme/ThemeProvider";

// theme styles
import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const navItems = [
    {
      id: 1,
      number: "01",
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      number: "02",
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 3,
      number: "03",
      title: "Services",
      path: "/services",
    },
    {
      id: 4,
      number: "04",
      title: "Products",
      path: "/products",
    },
    {
      id: 5,
      number: "05",
      title: "Our Works",
      path: "/our-works",
    },
    {
      id: 6,
      number: "06",
      title: "Contact Us",
      path: "/contact-us",
    },
  ];

  const { theme } = useContext(ThemeContext);
  const LinkStyle =
    theme === "dark" ? darkStyles.txtColor : lightStyles.txtColor;
  const SpanStyles =
    theme === "dark" ? darkStyles.txtColor : lightStyles.txtColor;
    const closeStyles =
    theme === "dark" ? darkStyles.closeNavMobileColor : lightStyles.closeNavMobileColor;
    const drawerStyles =
    theme === "dark" ? darkStyles.navbarDrawerColor : lightStyles.navbarDrawerColor;

    const navTextStyles =
    theme === "dark" ? darkStyles.mobileNavNinks : lightStyles.mobileNavNinks;


  return (
    <>
    <div
      className="position-absolute top-0 left-0 py-2 ps-2 navbarWidth d-none d-lg-block"
      style={{ zIndex: "999", height: "150px" }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link href="/" className="navbar-brand">
            {theme === "light" ? (
              <Image
                src="/imgs/light-logo.png"
                alt="logo-light"
                width={100}
                height={35}
              />
            ) : (
              <Image
                src="/imgs/dark-logo.png"
                alt="logo-dark"
                width={100}
                height={35}
              />
            )}
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`nav-item ps-2 pe-2 ps-lg-3 pe-lg-0 d-flex flex-column justify-content-end align-items-end ${
                    router.pathname === item.path ? "active" : ""
                  }`}
                >
                  <span className={`${LinkStyle} numberStyle`}>
                    {item.number}
                  </span>
                  <Link
                    className={`${SpanStyles} nav-link pe-lg-0 pt-lg-0`}
                    aria-current="page"
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <LetsTalkButton />
          </div>
        </div>
      </nav>
    </div>

    {/* mobile navbar */}
    <div
      className="position-absolute top-0 left-0 p-0 navbarWidth d-block d-lg-none mobileNav"
      style={{ zIndex: "999", height: "150px" }}
    >
      <nav className="navbar navbar-expand-lg">
        {/* Rest of your code */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleDrawerToggle}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isDrawerOpen ? 'show' : ''} navbarDrawer ${drawerStyles} py-2 px-2`}
          id="navbarSupportedContent"
        >
          <button
            className={`close-button closeNavMobile p-2 my-3 mx-2 ${closeStyles}`}
            onClick={handleCloseDrawer}
            aria-label="Close"
          >
            <MdOutlineClose />
          </button>
          {/* Drawer content */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`nav-item ps-2 ${navTextStyles} pe-2 ps-lg-3 pe-lg-0 mb-2 d-flex flex-column   ${
                    router.pathname === item.path ? "active" : ""
                  }`}
                >
                  <Link
                    className={`${SpanStyles} nav-link pe-lg-0 pt-lg-0`}
                    aria-current="page"
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          <div className="d-flex px-2">
          <LetsTalkButton />
          </div>
          <div className="d-flex flex-column px-2 my-5">
          <p className='links-style'>© 2016-2023 Colabrio. All rights reserved | Purchase</p>
          <div className="d-flex flex-row">
          <p><Link href={'#'} className='mx-lg-2 links-style'>
            Security
            </Link>
            <span className='mx-1'>|</span> 
            <Link href={'#'} className='mx-lg-2 links-style'>
            Privacy & Cookie Policy 
            </Link>
            <span className='mx-1'>|</span>  <br />
            <Link href={'#'} className='ms-lg-2 links-style'>
            Terms of Service 
            </Link></p>
          </div>
          </div>
          
        </div>
      </nav>
    </div>
    </>
  );
};

export default Header;
