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
import { AiOutlineMenu } from "react-icons/ai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <link rel="shortcut icon" href="/images/me.ico" />
        <title>Håkan | Portfolio</title>
        <meta name="description" content="An overview over who I am and what I have done" />
        <meta charSet="utf-8" />
        <meta property='og:title' content='Håkan | Portfolio'/>
        <meta name="image" property='og:image' content='https://hakanlindahl.com/images/drawing.png'/>
        <meta property='og:description' content='An overview of who I am and what I have done'/>
        <meta property='og:url' content='https://hakanlindahl.com/'/>
        <link rel="canonical" href="https://hakanlindahl.com/" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <ReactNotifications />

        <div className="drawer drawer-mobile">
          <label htmlFor="drawer" className="hidden"></label>
          <input id="my-drawer" type="checkbox" className="drawer-toggle" name="drawer"/>
          <div className="drawer-content bg-primary dark:bg-primary-dark 
                        text-secondary dark:text-secondary-dark quicksand">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary glass bg-primary-dark drawer-button lg:hidden m-3 z-10 fixed top-0"
            >
              <AiOutlineMenu />
            </label>
            <main className="h-full w-full">
              <Component {...pageProps} />
            </main>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className="w-32 overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
