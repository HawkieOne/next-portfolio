---
title: 'Instagram Clone'
date: 'November 2022'
excerpt: 'A visual clone of Instagram web app to improve my skills in frontend development.'
cover_image: '/images/projects/spotifyBig.png'
github: 'https://github.com/HawkieOne/instagram-clone'
---

A visual clone of Instagram web app to improve my skills in frontend development. In the project some new libraries are explored. These include Firebase for database management, Next Auth with Google authorization, Recoil for React state management, HeadlessUI for visual components and React Moment for showing relevant timestamps. 

## Link
[Github](https://github.com/HawkieOne/instagram-clone)

### Built With
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Tailwind](https://tailwindcss.com/)
* [Next Auth](https://next-auth.js.org/)
* [Firebase](https://firebase.google.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Recoil](https://recoiljs.org/)
* [React Moment](https://www.npmjs.com/package/react-moment)
* [HeadlessUI](https://headlessui.dev/)

## Getting Started

This is an instruction to setting up your project locally.

### Installation

Below is an example of how you can install and set up your app.

1. Clone the repo
   ```sh
   git clone https://github.com/HawkieOne/instagram-clone
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a new file called `.env.local`
4. Go to https://console.firebase.google.com and get a `CLIENT` and `CLIENT_SECRET` key for your app
5. Place your keys in the `.env.local` file like below
   ```sh
   GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
   GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
   NEXTAUTH_URL=http://localhost:3000
   ```
2. Run your application
   ```sh
   npm run dev
   ```

## Limitations

The current features supports logging in with a Google account and 

## Tested on

- Google Chrome 100.0.4896.127

