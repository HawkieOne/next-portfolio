import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
    <section className="bg-primary p-5 flex flex-col items-center space-y-3
                      dark:bg-primary-dark">
        <Image src="/images/me.png" 
            alt="a cartoon picture of Håkan Lindahl" 
            width="96"
            height="96"
        />
        <h1 className="text-secondary dark:text-secondary-dark text-2xl font-bold">Håkan</h1>
        <h3 className="text-secondary dark:text-secondary-dark text-xs">Web developer</h3>
    </section>
  )
}
