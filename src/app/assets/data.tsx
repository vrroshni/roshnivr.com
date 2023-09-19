import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { amazonImg, cyberImg, noorShop } from "../../../public/assets";


export const navlinks=[
    {
        name:"Home",
        link: "/",
        delay:.1
    },
    {
        name:"About",
        link: "#about",
        delay:0.2
    },
    {
        name:"Experience",
        link: "#experience",
        delay:0.3
    },
    {
        name:"Projects",
        link: "#project",
        delay:0.4
    },
    {
        name:"Contact",
        link: "#contact",
        delay:0.5
    }
]


export const socialmedialinks=[
    {
        href:"https://github.com/vrroshni",
        delay:0.8,
        icon:<TbBrandGithub />
    },
    {
        href:"https://github.com/vrroshni",
        delay: 0.85,
        icon:<SlSocialYoutube />
    },
    {
        href:"https://github.com/vrroshni",
        delay: 0.9,
        icon:<SlSocialYoutube />
    },
    {
        href:"https://github.com/vrroshni",
        delay: 0.95,
        icon: <SlSocialFacebook />
    },
    {
        href:"https://github.com/vrroshni",
        delay: 1,
        icon:<SlSocialYoutube />
    },

]



export const workplaceData = [
    {
      title: "Web Developer",
      company: "Aspen Leads",
      date: "Jan 2022 - Dec 2023",
      responsibilities: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?",
      ],
    },
    {
      title: "Full Web Developer",
      company: "Brototype",
      date: "Jan 2022 - Dec 2023",
      responsibilities: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio doloribus quas ex ea sed.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sit adipisci ad exercitationem a amet cum porro recusandae eveniet, accusantium animi tenetur rerum, culpa quibusdam! Consectetur laboriosam hic harum modi.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt sequi?",
      ],
    },
    // Add more work experiences here
  ];


  export const projectData = [
    {
      title: 'Amazon Clone 2.0',
      image: amazonImg,
      alt: 'Amazon Clone Image',
      description:
        'An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with OAuth and then make the purchase using Stripe.',
      technologies: ['Next.js', 'Typescript', 'Next-auth', 'Stripe', 'Vercel Deployment'],
      github: 'https://github.com/noorjsdivs',
      youtube: 'https://youtu.be/WzMtRfzkP-Q',
      link: 'https://nextamazon.reactbd.com/',
    },
    {
      title: 'Cyber Security Blog',
      image: cyberImg,
      alt: 'Cyber Security Blog Image',
      description:
        'A full functional Cyber Security Blog where you can view the latest post and comments on it by passing your ideas besides you can try to add your own post on it by logging on the portal.',
      technologies: ['Next.js', 'Typescript', 'Next-auth', 'Sanity', 'React Hook Form'],
      github: 'https://github.com/noorjsdivs',
      youtube: 'https://youtu.be/49Fx963su1I',
      link: 'https://www.noormohmmad.com/',
    },
    {
      title: 'Noor Shop',
      image: noorShop,
      alt: 'Noor Shop Image',
      description:
        'An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with OAuth and then make the purchase using Stripe.',
      technologies: ['Next.js', 'Typescript', 'Next-auth', 'Stripe', 'Vercel Deployment'],
      github: 'https://github.com/noorjsdivs',
      youtube: 'https://youtu.be/fi0nQc25xAw',
      link: 'https://noorshop.netlify.app/',
    },
  ];

  export const archiveData= [
    {
      title: "Educare Engligh Learning Academy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      technologies: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://www.educareenglishlearningacademy.com/",
    },
    {
      title: "Cyber Security Blog with live comments section",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      technologies: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://www.noormohmmad.com/",
    },
    {
      title: "Cyber Security Blog with live comments section",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      technologies: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://www.noormohmmad.com/",
    },
    {
      title: "Cyber Security Blog with live comments section",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      technologies: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://www.noormohmmad.com/",
    },
    {
      title: "Cyber Security Blog with live comments section",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      technologies: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://www.noormohmmad.com/",
    },
    {
      title: "Cyber Security Blog with live comments section",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laudantium velit qui sint non, voluptates quo a veritatis.",
      technologies: ["Reactjs", "Tailwind CSS", "getform.io"],
      link: "https://www.noormohmmad.com/",
    },
    // Add more archive data items here
  ];