import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "@/components/layout";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
