---
title: "Radio Info"
date: "December 2020"
excerpt: "A program which shows a radio schedule fetched from SR:s public API"
cover_image: ['images/projects/radioinfo.webp', 'images/projects/radioinfo.avif']
github: "https://github.com/HawkieOne/radioinfo"

description: Radio Info is a program that fetches data from SR(Sveriges Radio) public API to show a scehdule over radio programs. Both passed programs and future programs is shown. The program is made in Java with Swing and was made during a course at Umeå University. The program uses different threads though Java Swing to be able to download and show data without freezing the main UI.
built:
  [
    { name: "Java", link: "https://www.java.com/sv/" },
    {
      name: "Java Swing",
      link: "https://docs.oracle.com/javase/tutorial/uiswing/",
    },
    {
      name: "SR API",
      link: "https://sverigesradio.se/oppetapi",
    },
  ]
limitations: 'The program can stream the sound from the program that is active on a certain channel but the sound quality is not perfect. Furthermore, the stream quits after a certain time and needs to be restarted after that. This is probably due to something memory related but it is hard to say.'
when: 'The program was a part of the course "Applikationsutveckling i Java" at Umeå University and was a solo project.  
' 
tested:
  [
    "Windows 10",
  ]
---
