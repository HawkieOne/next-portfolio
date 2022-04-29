---
title: 'Spotify Clone'
date: 'October 2021'
excerpt: 'A visual clone of Spotify web app to improve my skills in frontend development'
cover_image: '/images/projects/spotifyBig.png'
github: 'https://github.com/HawkieOne/spotify-clone'

description: A visual clone of Spotify web app to improve my skills in frontend development. The web applciation mimics the UI of Spotify and gives most of the features that Spotify uses through Spotify's API. To work, Spotify needs to be open on a device due to limitations in Spotify's Web API.
built: [
   {
   name: 'Next.js',
   link: 'https://nextjs.org/'
},
{
   name: 'React.js',
   link: 'https://reactjs.org/'
},
{
   name: 'Tailwind',
   link: 'https://tailwindcss.com/'
},
   {
   name: 'Next Auth',
   link: 'https://next-auth.js.org/'
},
{
   name: 'Recoil',
   link: 'https://recoiljs.org/'
},
{
   name: 'Spotify Web API',
   link: 'https://developer.spotify.com/documentation/web-api/'
},
]
features: The web application supports showing all the users playlists, changing active song, pause and play, next song and previous song. So a possible scenarion in the applications is that the user chooses which playlist to look for songs in and the pressing on a song to start playing it through the active Spotify device. Through the app the user can also change the volume of the music. Debounce is used to mimic a better change of music through the slider.
limitations: Due to limitations in Spotify's API it is not possible to run the web application without having Spotify active on another device. To be considered an active device it is simply required to play or pause a song in Spotify. When this is done the music can be controlled through this web application. 
when: The project was a solo project done in my free time to learn about NextJs and Recoil. I followed a video tutorial to create the main parts of the web application and then I extended on some functionality myself.
tested: ['Google Chrome 100.0.4896.127']
---
