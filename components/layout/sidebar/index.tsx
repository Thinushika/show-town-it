import React from "react";
import { ThemeContext } from "@/components/theme/ThemeProvider";
import { useContext } from "react";
import styles from "@/styles/Home.module.css";


// theme styles
import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";

// icons
import { HiOutlineMoon } from "react-icons/hi";
import { BiSun } from "react-icons/bi";

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const containerStyles =
    theme === "dark" ? darkStyles.themeToggleButton : lightStyles.themeToggleButton;
  return (
    <>
    <div
      className="d-flex align-items-start h-100 position-absolute top-0 left-0"
      style={{ zIndex: "99", width: "150px" }}
    >
      <div className="d-flex h-75 align-items-center">
      <button onClick={toggleTheme} className={`${containerStyles} ${styles.toggleButtonSize}`}>
        {theme === "light" ? <HiOutlineMoon className="me-2" /> : <BiSun className="me-2" />}
        {theme === "light" ? "Dark" : "Light"}
      </button>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
