/* eslint-disable @next/next/no-document-import-in-page */
import React, { ReactNode, useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import styles from "@/styles/Home.module.css";
import { ThemeContext } from "@/components/theme/ThemeProvider";
import { useContext } from "react";
import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";
import Head from "next/head";
import MobileSidebar from "./sidebar/MobileSidebar";
import CustomCursor from "../Cursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);
  const containerStyles =
    theme === "dark" ? darkStyles.container : lightStyles.container;

  // useEffect(() => {
  //   const cursor = document.querySelector(".cursor");
  //   document.addEventListener("mousemove", (e) => {
  //     let leftPosition = e.pageX;
  //     let topPosition = e.pageY;

  //     cursor.style.left = leftPosition + "px";
  //     cursor.style.top = topPosition + "px";
  //   });
  // }, []);

  // useEffect(() => {
  //   const cursor = document.querySelector(".cursor") as HTMLElement | null;
  //   if (!cursor) return;
  
  //   document.addEventListener("mousemove", (e) => {
  //     let leftPosition = e.pageX;
  //     let topPosition = e.pageY;
  
  //     cursor.style.left = leftPosition + "px";
  //     cursor.style.top = topPosition + "px";
  //   });
  // }, []);
  

  return (
    <>
      <Head>
        <title>Show Town IT | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="d-none d-lg-block ">
        <Sidebar />
      </div>
      <div className="d-block d-lg-none">
        <MobileSidebar />
      </div>
      <main
        className={`${containerStyles} ${styles.container_fullpage}  d-flex flex-column justify-content-center align-items-center position-relative`}
        style={{ zIndex: "9" }}
      >
        <CustomCursor />
        {children}
      </main>
      <div className="cursor"></div>
    </>
  );
};

export default Layout;
