import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  children: React.ReactNode;
  color: string;
}
export default function LinkButtton({ children, color }: LinkButtonProps) {
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
