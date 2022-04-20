import React, { createRef, useState } from "react";
import Socials from "../components/Sidebar/Socials";
import DrawArea from "../components/Contact/DrawArea";
import AnimatedWord from "../components/shared/AnimatedWord";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="h-screen flex">
      <div
        className="h-screen text-secondary dark:text-secondary-dark 
                      flex flex-col items-center justify-center basis-1/2"
      >
        <h1 className="text-6xl font-bold flex">
          <AnimatedWord word="Contact me" />
        </h1>

        <p className="w-4/5 mt-8 text-secondary dark:text-secondary-dark">
          I am interested in most stuff regarding developmen so feel free to
          message me about whatever you want here. If you have any other
          questions or just want to say hi go right ahead!
        </p>
        <p className="w-4/5 mb-16 text-secondary dark:text-secondary-dark">
          You can also send me a mail at by pressing{" "}
          <a 
            href="mailto:hakan.l.lindahl@gmail.com?subject=Mail from portfolio"
            className="text-highlight"
          >
            here
          </a>
          .
        </p>

        <ContactForm />

        <div className="w-4/5 mt-32 text-center text-secondary dark:text-secondary-dark space-y-4">
          <p>You can contact me on any of these social medias as well</p>
          <Socials />
        </div>
      </div>

      <div
        className="flex flex-col text-secondary items-center justify-center basis-1/2
                      border-l-2 space-y-8 dark:text-secondary-dark dark:border-l-secondary"
      >
        <h1 className="text-6xl font-bold flex">
          <AnimatedWord word="Draw something" />
        </h1>
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
