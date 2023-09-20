"use client"
import React, { useRef } from 'react'
import { AiOutlineYoutube } from 'react-icons/ai';
import { TbBrandGithub } from 'react-icons/tb';
import Image, { StaticImageData } from 'next/image';

import { RxOpenInNewWindow } from 'react-icons/rx';
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectProps {
  project: {
    title: string;
    image: StaticImageData;
    alt: string;
    link: string;
    description: string;
    technologies: string[];
    github: string;
    youtube: string;
  },
  index: number
}

const Project: React.FC<ProjectProps> = ({ project, index }) => {


  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div className={`flex flex-col ${index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"} gap-6`}
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <a className="w-full xl:w-1/2 h-auto relative group" href={project.link} target="_blank">
        <div>
          <Image className="w-full h-full object-contain" src={project.image} alt={project.alt} />
          <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
        </div>
      </a>
      <div className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between ${index % 2 === 0 ? "text-right  items-end xl:-ml-16  " : "text-left  items-start xl:-mr-10  "}  z-10`}>
        <div>
          <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>
        <p className="bg-textGreen/75 text-sm md:text-base p-2 md:p-6 rounded-md">{project.description}</p>
        <ul className="text-xs md:text-base font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        {(project.github.trim() || project.youtube.trim() || project.link.trim()) &&
          <div className="text-2xl flex gap-4">
            {project.github.trim() &&
              <a className="hover:text-textGreen duration-300" href={project.github} target="_blank">
                <TbBrandGithub />
              </a>
            }
            {project.youtube.trim() &&
              <a className="hover:text-textGreen duration-300" href={project.youtube} target="_blank">
                <AiOutlineYoutube />
              </a>
            }
            { project.link.trim() &&
              <a className="hover:text-textGreen duration-300" href={project.link} target="_blank">
                <RxOpenInNewWindow />
              </a>
            }
          </div>
        }

      </div>
    </motion.div>
  )
}

export default Project