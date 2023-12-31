"use client"
import React from 'react'
import { motion } from "framer-motion";
import Gradient from '../elements/Gradient';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import AppParticles from './AppParticles';
import { mydetails } from '@/app/assets/data';

const titles = [
  "Frontend",
  "Backend",
  "FullStack"
]


const HeroSection = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 relative  mt-28 px-4 md:px-0"
    ><Gradient />
      <div className='flex flex-col relative'>
      
      {/* <AppParticles /> */}
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        {mydetails.name}
        <span className="text-textGreen mt-2 lgl:mt-4 flex flex-row items-start flex-wrap gap-3">
          <span className='min-w-fit'>
            I am a
          </span>
          <Typewriter
            options={{
              strings: mydetails.titles,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
              wrapperClassName: "text-black  ",
              cursorClassName: "text-textGreen"
            }}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-base md:max-w-[650px] text-black font-medium mt-3"
      >
        {mydetails.descriptionHero}
        <span >
          {" "}
          <Link href={"#about"}>
            <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
              Know more
              <span className="absolute w-full h-[1px] bg-black left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </Link>
        </span>
      </motion.p>
      </div>
      
      <Link href={"#project"}>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-52 h-14 text-base font-titleFont border hover:border-textGreen rounded-md  tracking-wide text-black border-black  transition "
        >
          Check out my projects!
        </motion.button>
      </Link>


    </section>)
}

export default HeroSection