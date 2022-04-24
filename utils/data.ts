import { ColourOption, FooterItem, Link, User } from '../interfaces'
import { HeaderItem } from '../interfaces'
import { ResumeItem } from '../interfaces'
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const headerItems: HeaderItem[] = [
  { text: 'Home', link: "/"},
  { text: 'Resumé', link: "/resume" },
  { text: 'Projects', link: "/projects" },
  { text: 'Contact', link: "/contact" },
]

export const linkedIn: Link = {
  link: 'https://www.linkedin.com/in/hakanlindahl/',
}

export const facebook: Link = {
  link: 'https://www.facebook.com/hakan.lindahl.58/',
}

export const github: Link = {
  link: 'https://github.com/HawkieOne',
}

// export const footerItems = [
//   { icon: <FaFacebookF/>, link: "https://www.facebook.com/hakan.lindahl.58/"},
//   { icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/hakanlindahl/" },
//   { icon: <FaGithub/>, link: "https://github.com/HawkieOne" },
// ]

export const resumeItems: ResumeItem[] = [
  {title: 'Livsmedicin', location: 'Umeå', year: 2021, description: 'During the summer I worked at Livsmedicin on a project based on AR ' + 
  'that will prevent injuries for persons that spend a lot of time at the computer.'},
  {title: 'Studies', location: 'Umeå university', year: 2020, description: 'During 2020 I put a lot of time on my studies and on top of ' +
  + 'that the pandemic started this year so I have concentrated on educating myself' + 
  ' in the subjects that interest me. Some of these subjects are Java, ASP.NET, React and Unity.'},
  {title: 'Student ambassador', location: 'ALTEN', year: 2019, description: 'As a student ambassador I coordinate events and activities ' +
  'aimed at students at Umeå university. This is ' + 
  'done together with other student ambassadors and ALTEN to increase the knowledge of ALTEN among students at the university.'},
  {title: 'Tutor', location: 'Umeå Unversity', year: 2019, description: 'Together with another student, I taught an introduction ' + 
  'course in algebra to new students at the university. The responsibilities ' + 
  'varied between giving lectures, helping the students with tasks and correcting tests.'},
  {title: 'Group Leader', location: 'International Office - Umeå university', year: 2019, description: 'During the year I was a group leader '+
  'for a Buddy group which carried the responsibility for coordinating events for a group of ' +
  'exchange students at Umeå university. All events were planned together with another group leader and a group of buddies. The other group leader ' +
  'and I were responsible for 50 exchange students.'},
  {title: 'M.Sc.Eng in Interaction Technology and Design', location: 'Umeå University', year: 2018, description: 'I started a Master of science in engineering ' +
  'at Umeå University. The program is 5 years and focuses' +
  'on a broad spectrum of subjects where the main focus is on interaction technology and design. '},
]
