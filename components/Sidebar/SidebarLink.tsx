import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface SideBarLink {
  item: {
    link: string;
    text: string;
  };
}

export default function SidebarLink({ item }: SideBarLink) {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center space-x-2 text-secondary dark:text-secondary-dark
              hover:text-highlight dark:hover:text-highlight cursor-pointer p-3 focus:text-red-200"
    >
      <Link href={item.link} passHref={true}>
        {router.pathname === item.link ||
        "/" + router.pathname.split("/")[1] + "s" === item.link ? (
          <a
            className="text-lg text-accent scale-110 font-bold"
            title={item.text}
          >
            {item.text}
          </a>
        ) : (
          <a className="text-lg focus:text-highlight" title={item.text}>
            {item.text}
          </a>
        )}
      </Link>
    </div>
  );
}
