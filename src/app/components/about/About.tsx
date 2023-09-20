import Image from 'next/image'
import React from 'react'
import { profile } from '../../../../public/assets'
import SectionTitle from '../SectionTitle'
import Gradient from '../elements/Gradient'
import TechStacks from './TechStacks'

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 mdl:py-24  flex flex-col gap-8 px-4 lg:px-0 scroll-mt-20" >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-black font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Noor Mohammad and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2012 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up,{" "}
            <span className="text-textGreen">
              a huge corporation, and a student-led design studio.
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            accusantium fugiat veritatis, quidem repellat{" "}
            <span className="text-textGreen">
              ab natus possimus? Sint, accusamus!
            </span>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse
            recusandae.
          </p>
          
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group hidden lgl:block">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-10 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profile}
                alt="profileImg"
                quality={100}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80  rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2  border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-black"></div>
        </div>
      </div>

      <TechStacks/>
    </section>
  )
}

export default About