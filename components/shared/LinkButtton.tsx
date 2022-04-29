import Link from "next/link";
import React from "react";

export default function LinkButtton({ link, children, color}) {
  return (
    <Link href="/projects">
      <a
        className={`${color} text-secondary-dark border-none px-4 py-2 rounded-lg cursor-pointer
                text-xl self-center md:self-start`}
      >
       {children}
      </a>
    </Link>
  );
}
