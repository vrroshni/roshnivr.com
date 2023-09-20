"use client"
import { skill, skills } from '@/app/assets/data';
import React, { useState } from 'react'
import TechCards from './TechCards';
import SectionTitle from '../SectionTitle';
import Gradient from '../elements/Gradient';
interface Props {
  skillData: skill[]
}

const TechStacks = () => {

  const categories = Array.from(new Set(skills.map((s: { category: any; }) => s.category)))
  const [category, setCategory] = useState(categories[0])

  return (
    <section
      id="skills" className='mdl:py-24 px-4 relative scroll-mt-20'>
      <Gradient />
      <SectionTitle title="Tech Stacks" titleNo="02" />
      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {categories.map((c: string, i: number) => (
          <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${category.toLowerCase() === c.toLowerCase() ? "border-l-textGreen font-medium text-black bg-textGreen/25" : "bg-white dark:bg-grey-800 hover:bg-gray-100"} transition-all capitalize`}>{c}</span>
        ))}
      </div>

      <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {skills.filter((s: skill) => s.category.toLowerCase() === category.toLowerCase()).map((s: any, i: number) => (
          <TechCards key={i} {...s} />
        ))}
      </div>
    </section>

  )
}

export default TechStacks