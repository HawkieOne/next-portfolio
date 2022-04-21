import React, { createRef, useState } from "react";
import Socials from "../components/Sidebar/Socials";
import DrawArea from "../components/Contact/DrawArea";
import AnimatedWord from "../components/shared/AnimatedWord";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-end lg:items-center">
      <div
        className="h-full text-secondary dark:text-secondary-dark 
                      flex flex-col items-center justify-center basis-1/2"
      >
        <div className="flex justify-center space-x-4 items-center">
          <span className="rounded-md w-24 h-1 bg-highlight"></span>
          <h1 className="text-secondary dark:text-secondary-dark text-2xl md:text-4xl lg:text-6xl font-bold flex">
            <AnimatedWord word="Contact me" />
          </h1>
          <span className="rounded-md w-24 h-1 bg-highlight"></span>
        </div>

        <p className="w-4/5 mt-2 md:mt-8 text-secondary dark:text-secondary-dark">
          I am interested in most stuff regarding development so feel free to
          message me about whatever you want here. If you have any other
          questions or just want to say hi go right ahead!
        </p>
        <p className="w-4/5 mb-4 lg:mb-16 text-secondary dark:text-secondary-dark">
          You can also send me a mail by pressing{" "}
          <a 
            href="mailto:hakan.l.lindahl@gmail.com?subject=Mail from portfolio"
            className="text-highlight hover:text-accent"
          >
            here
          </a>
          .
        </p>

        <ContactForm />

        <div className="w-4/5 mt-4 lg:mt-32 text-center text-secondary dark:text-secondary-dark space-y-4">
          <p className="hidden md:block">You can contact me on any of these social medias as well</p>
          <Socials />
        </div>
      </div>

      <div className="hidden md:block w-0.5 h-full bg-secondary"></div>
      <div
        className="hidden lg:flex flex-col text-secondary items-center justify-center basis-1/2
                       space-y-8 dark:text-secondary-dark dark:border-l-secondary"
      >
        <div className="flex justify-center space-x-4 items-center">
          <span className="rounded-md w-24 h-1 bg-highlight"></span>
          <h1 className="text-secondary dark:text-secondary-dark text-2xl md:text-4xl lg:text-6xl font-bold flex">
            <AnimatedWord word="Draw" />
          </h1>
          <span className="rounded-md w-24 h-1 bg-highlight"></span>
        </div>
        <p className="w-4/5 mb-16 mt-8 text-secondary dark:text-secondary-dark">
          You can also draw me a picture! Draw the picture and the press send to
          send the drawing to me. Press download to download it to your
          computer.
        </p>
        <DrawArea />
      </div>
    </div>
  );
}
