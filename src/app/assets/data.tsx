import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import { aec, heavenly } from "../../../public/assets";




export type skill = {
  name: string,
  image: string,
  category: string
}


export const navlinks = [
  {
    name: "Home",
    link: "/",
    delay: .1
  },
  {
    name: "About",
    link: "#about",
    delay: 0.2
  },
  {
    name: "Skills",
    link: "#skills",
    delay: 0.3
  },
  {
    name: "Experience",
    link: "#experience",
    delay: 0.4
  },
  {
    name: "Projects",
    link: "#project",
    delay: 0.5
  },
  {
    name: "Contact",
    link: "#contact",
    delay: 0.6
  }
]


export const socialmedialinks = [
  {
    href: "https://github.com/vrroshni",
    delay: 0.1,
    icon: <BsGithub />
  },
  {
    href: "https://www.linkedin.com/in/roshnivr/",
    delay: 0.2,
    icon: <AiFillLinkedin />
  },
  {
    href: "https://hashnode.com/@roshnivr",
    delay: 0.3,
    icon: <SiHashnode />
  },

]



export const workplaceData = [
  {
    title: "Full Stack Developer",
    company: "Aspen Leads",
    date: "March 2023 - August 2023",
    responsibilities: [
      "Effectively managed client relationships, ensuring their requirements were met and providing ongoing support.",
      "Leveraged Python, Django Rest Framework, React, Next.js, and PostgreSQL to develop dynamic web applications, achieving a 30% increase in organic traffic through SEO optimization and server-side rendering.",
      "Collaborated on secure payment gateway integration, resulting in a substantial 25% increase in transactions.",
      "Implemented robust user authentication, authorization, and profile management with JWT for enhanced data security.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Brototype",
    date: "March 2022 - Feb 2023",
    responsibilities: [
      "Engineered a dynamic community platform, 'Together,' elevating AEC professional connectivity.",
      "Employed Python, Django Rest-api, React, Postgres, Redux, and JWT for robust functionality.",
      "Facilitated premium features including membership plans, client proposal management, messaging, search, and a review system while overseeing user and admin-side functions, including payment gateways integration.",
      "Created a feature-rich e-commerce platform with a user-friendly shopping cart, account system, reviews, ratings, and coupon functionality. Integrated secure payment gateways, Twilio OTP verification, and an admin panel for sales management.",
    ],
  },

];


export const projectData = [
  {
    title: 'Together (Community platform)',
    image: aec,
    alt: 'Together Image',
    description:
      'Developed and managed "Together" platform, propelling AEC professional engagement by 40% while streamlining architect-engineer-contractor collaboration, enhancing user interactions, project partnerships, and information exchange.',
    technologies: ['React.js', 'JavaScript', 'Python', 'Django-rest-api', 'Stripe', 'Paypal'],
    github: 'https://github.com/vrroshni/AEC_Industry_WebApplication',
    youtube: '',
    link: '',
  },
  {
    title: 'Heavenly Bakes (E-Commerce Website)',
    image: heavenly,
    alt: 'Heavenly Bakes Image',
    description:
      'Created a feature-rich e-commerce platform with user-friendly shopping cart, account system, reviews, ratings, and coupons. Integrated payment gateways, Twilio OTP verification, and an admin panel for sales management.',
    technologies: ['Python', 'Django', 'Postgres', 'Ajax', 'Html5', 'CSS', ' AWS', ' Nginx'],
    github: 'https://github.com/vrroshni/Ecommerce_Website',
    youtube: ' ',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7012089923214204928/',
  },
];

export const archiveData = [
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


export const skills = [
  {
    name: "JavaScript",
    image: "https://img.icons8.com/color/144/null/javascript--v1.png",
    category: "Frontend"
  },
  {
    name: "ReactJS",
    image: "https://img.icons8.com/?size=512&id=bzf0DqjXFHIW&format=png",
    category: "Frontend"
  },
  {
    name: "NextJS",
    image: "https://img.icons8.com/?size=512&id=yUdJlcKanVbh&format=png",
    category: "Frontend"
  },
  {
    name: "HTML5",
    image: "https://img.icons8.com/?size=512&id=20909&format=png",
    category: "Frontend"
  },
  {
    name: "CSS3",
    image: "https://img.icons8.com/?size=512&id=21278&format=png",
    category: "Frontend"
  },
  {
    name: "Bootstrap",
    image: "https://img.icons8.com/?size=512&id=84710&format=png",
    category: "Frontend"
  },
  {
    name: "Tailwind CSS",
    image: "https://img.icons8.com/?size=512&id=4PiNHtUJVbLs&format=png",
    category: "Frontend"
  },
  {
    name: "Python",
    image: "https://img.icons8.com/?size=512&id=13441&format=png",
    category: "Backend"
  },
  {
    name: "Django",
    image: "https://img.icons8.com/?size=512&id=qULYrKvr-AFH&format=png",
    category: "Backend"
  },
  {
    name: "Firebase",
    image: "https://img.icons8.com/color/144/null/firebase.png",
    category: "Backend"
  },
  {
    name: "Postgres",
    image: "https://img.icons8.com/?size=512&id=38561&format=png",
    category: "Backend"
  },
  {
    name: "Googling",
    image: "https://img.icons8.com/?size=512&id=17949&format=png",
    category: "Others"
  },
  {
    name: "Git",
    image: "https://img.icons8.com/?size=512&id=20906&format=png",
    category: "Others"
  },
  {
    name: "Vercel",
    image: "https://img.icons8.com/?size=512&id=RSG5kOaTrRmU&format=png",
    category: "Others"
  },
  {
    name: "AWS",
    image: "https://img.icons8.com/?size=512&id=33039&format=png",
    category: "Others"
  },
  {
    name: "GitHub",
    image: "https://img.icons8.com/material-outlined/96/null/github.png",
    category: "Others"
  }
]


export const mydetails = {
  name: "Roshni V R",
  titles: [
    "Frontend Developer",
    "Backend Developer",
    "FullStack Developer"
  ],
  descriptionHero: "A skilled Full Stack Developer with a passion for crafting exceptional web experiences. With expertise in Python, Django, React, and Next.js, I specialize in creating dynamic and user-friendly applications. Now, I'm on the lookout for new opportunities to bring innovation to your projects. Contact me today to start a conversation!",
  about: [
    {
      title: "🚀 Skills That Drive Success:",
      description: "With over 2 years of experience as a Full Stack Developer, I bring expertise in Python, Django, React, and Next.js. My passion lies in creating dynamic web applications and crafting seamless user experiences."
    },
    {
      title: "🌟 A Journey of Growth:",
      description: "My journey began as a curious learner, and I've evolved into a seasoned developer with a strong commitment to staying up-to-date with industry trends. I thrive on challenges, love learning, and am always ready for the next adventure."
    },
    {
      title: "🌟🌐 Let's Build Together:",
      description: " Now, I'm actively seeking new opportunities to contribute my skills and expertise to your projects. Let's collaborate, innovate, and create exceptional digital experiences. Get in touch today, and let's embark on this journey together!."
    },
  ]

}

