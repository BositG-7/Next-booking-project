import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { MantineProvider, Notification, createTheme } from "@mantine/core";
import NextNProgress from "nextjs-progressbar";
import "@mantine/core/styles.css";
import "react-multi-carousel/lib/styles.css";
import "@/styles/globals.css";
import { Notifications } from "@mantine/notifications";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { getSessionlogin, setSessionlogin } from "@/services/store";

const Providers = dynamic(() => import("@/providers"), { ssr: false });

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const theme = createTheme({
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const isLogin = getSessionlogin();
  useEffect(() => {
    if (!isLogin) {
      setSessionlogin(false);
    } else {
      setSessionlogin(true);
    }
  }, []);
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
