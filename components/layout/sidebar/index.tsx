import React from "react";
import { ThemeContext } from "@/components/theme/ThemeProvider";
import { useContext } from "react";

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <div
      className="d-flex h-100 position-absolute top-0 left-0"
      style={{ zIndex: "99", width: "150px" }}
    >
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
    </>
  );
};

export default Sidebar;
