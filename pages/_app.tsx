import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/index.css";
import "react-notifications-component/dist/theme.css";
import "fullpage.js/dist/fullpage.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import { ReactNotifications } from "react-notifications-component";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <link rel="shortcut icon" href="/images/me.ico" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <ReactNotifications />
        {/* <div className="h-screen bg-pattern bg-primary flex justify-start"> */}
        <div className="h-screen bg-primary dark:bg-primary-dark flex justify-start quicksand">
          <Sidebar />
          <main className="h-full w-full">
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
