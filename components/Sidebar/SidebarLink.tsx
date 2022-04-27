import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { currentLink } from "../../atoms/atoms";
import {useRouter} from 'next/router';

export default function SidebarLink({ item }) {
  
  const router = useRouter();

  return (
    <Link href={item.link}>
      <div
        className="flex items-center justify-center space-x-2 text-secondary dark:text-secondary-dark
              hover:text-highlight dark:hover:text-highlight cursor-pointer p-3"
      >       
        {router.pathname === item.link || ('/' + router.pathname.split("/")[1] + 's') === item.link ? (
          <p className="text-lg text-accent scale-110 font-bold">{item.text}</p>
        ) : (
          <p className="text-lg">{item.text}</p>
        )}
      </div>
    </Link>
  );
}
