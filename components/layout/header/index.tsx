/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useContext } from "react";
import styles from "@/styles/Home.module.css";
import LetsTalkButton from "@/components/buttons/headerBtn";
import { ThemeContext } from "@/components/theme/ThemeProvider";

// theme styles
import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";
import Image from "next/image";

const Header = () => {
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

  return (
    <div
      className="position-absolute top-0 left-0 py-2 ps-2 navbarWidth"
      style={{ zIndex: "999", height: "150px" }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="nav-item ps-2 pe-2 ps-lg-3 pe-lg-0 d-flex flex-column text-end"
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
  );
};

export default Header;
