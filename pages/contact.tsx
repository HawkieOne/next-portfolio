import React, { createRef, useEffect, useState } from "react";
import Socials from "../components/Sidebar/Socials";
import DrawArea from "../components/Contact/DrawArea";
import AnimatedWord from "../components/shared/AnimatedWord";
import ContactForm from "../components/Contact/ContactForm";
import { currentProjectIndex } from "../atoms/atoms";
import { useSetRecoilState } from "recoil";

export default function Contact() {
  const setInitialSlideIndex = useSetRecoilState(currentProjectIndex);
  useEffect(() => {
    setInitialSlideIndex(0);
  }, []);

  return (
    <div className="h-screen flex flex-col lg:flex-row justify-center lg:justify-center items-end lg:items-start">
      <div
        className="h-full text-secondary dark:text-secondary-dark 
                      flex flex-col items-center justify-around 2xl:justify-around 2xl:space-y-12 basis-full xl:basis-1/2"
      >
        <div className="flex justify-center space-x-4 items-center pt-8 md:pt-0 justify-self-start">
          <span className="rounded-md w-12 md:w-24 h-1 bg-highlight"></span>
          <div className="text-secondary dark:text-secondary-dark text-2xl md:text-4xl lg:text-6xl font-bold flex">
            <AnimatedWord word="Contact me" />
          </div>
          <span className="rounded-md w-12 md:w-24 h-1 bg-highlight"></span>
        </div>

        <div className="w-4/5 text-secondary dark:text-secondary-dark text-sm xl:text-lg" tabIndex={0}>
          <p>
            I am interested in most stuff regarding development so feel free to
            message me about whatever you want here. If you have any other
            questions or just want to say hi go right ahead!
          </p>
          <p>
            You can also send me a mail by pressing{" "}
            <a
              href="mailto:hakan.l.lindahl@gmail.com?subject=Mail from portfolio"
              className="text-highlight hover:text-accent"
            >
              here
            </a>
            .
          </p>
        </div>

        <ContactForm />

        {/* <div className="w-4/5 text-center text-secondary dark:text-secondary-dark space-y-4">
          <p className="hidden md:block" tabIndex={0}>
            You can contact me on any of these social medias as well
          </p>
          <Socials />
        </div> */}
      </div>

      <div className="hidden xl:block w-0.5 h-full bg-secondary"></div>

      <div
        className="hidden h-full xl:flex flex-col text-secondary items-center justify-around basis-1/2 
                 dark:text-secondary-dark dark:border-l-secondary"
      >
        <div className="flex space-x-4 items-center">
          <span className="rounded-md w-24 h-1 bg-highlight"></span>
          <div className="text-secondary dark:text-secondary-dark text-2xl md:text-4xl lg:text-6xl font-bold flex">
            <AnimatedWord word="Draw" />
          </div>
          <span className="rounded-md w-24 h-1 bg-highlight"></span>
        </div>
        <p
          className="w-4/5 mt-8 text-secondary dark:text-secondary-dark"
          tabIndex={0}
        >
          If you want to you can create a drawing here! Choosel color, draw something and then press 
          download to save it to your computer and keep a fine memory of this moment :)
        </p>
        <DrawArea />
      </div>
    </div>
  );
}
