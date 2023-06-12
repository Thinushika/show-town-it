/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";
import styles from "@/styles/Home.module.css";

import { ThemeContext } from "@/components/theme/ThemeProvider";

const LetsTalkButton = () => {
  const { theme } = useContext(ThemeContext);
  const talkButtonStyles =
    theme === "dark" ? darkStyles.talkButton : lightStyles.talkButton;
  return (
    <>
    <button className={`${talkButtonStyles} ${styles.talkButtonSize} px-3`}>Let's Talk</button>
    </>
  );
};

export default LetsTalkButton;
