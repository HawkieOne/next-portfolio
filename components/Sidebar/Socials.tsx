import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { footerItems } from "../../utils/data";

export default function Socials() {

  const footerItems = [
    { icon: <FaFacebookF/>, link: "https://www.facebook.com/hakan.lindahl.58/"},
    { icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/hakanlindahl/" },
    { icon: <FaGithub/>, link: "https://github.com/HawkieOne" },
  ]

  return (
    <section className="flex justify-center">
      <div className="bg-primary dark:bg-primary-dark flex space-x-1">
        {footerItems.map((item, index) => (
          <a href={item.link} key={index} target="_blank" rel="noreferrer">
          <div              
            className="flex items-center m-3 space-x-2 text-secondary hover:text-accent
                       cursor-pointer dark:hover:text-highlight
                     dark:text-secondary-dark"
          >
            {item.icon}
          </div>
        </a>
        ))}
      </div>
    </section>
  );
}
