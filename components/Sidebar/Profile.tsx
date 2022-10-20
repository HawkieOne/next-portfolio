import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Profile() {
  return (
    <section
      className="bg-primary p-5 flex flex-col items-center space-y-3
                      dark:bg-primary-dark"
    >
      <Link href="/">
        <picture className="cursor-pointer">
          <source srcSet="/images/me.avif" />
          <img
            src="/images/me.webp"
            className="cursor-pointer"
            alt="A cartoon picture of Håkan Lindahl"
            title="Go to home"
          />
        </picture>
      </Link>
      <h1 className="text-secondary dark:text-secondary-dark text-2xl font-bold">
        Håkan
      </h1>
      <h2 className="text-secondary dark:text-secondary-dark text-xs">
        Web developer
      </h2>
    </section>
  );
}
