"use client"
import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { workplaceData } from '../../assets/data'
import WorkExperience from './WorkExperience';
import Gradient from '../elements/Gradient';

const Experience = () => {
    const [selectedWorkplace, setSelectedWorkplace] = useState(0);

    return (
        <section
            id="experience"
            className="max-w-containerSmall mx-auto py-10 mdl:py-24 px-4 relative scroll-mt-20"
        >
              <Gradient/>
            <SectionTitle title="Where I have Worked" titleNo="02" />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    {workplaceData.map((workplace, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedWorkplace(index)}
                            className={`${selectedWorkplace === index
                                    ? "border-l-black font-semibold text-textGreen "
                                    : "border-l-hoverColor  text-black"
                                } border-l-2 bg-transparent  py-3 text-sm cursor-pointer duration-300 px-8 font-medium hover:bg-textGreen/25 hover:text-black`}
                        >
                            {workplace.company}
                        </li>
                    ))}
                </ul>
                <WorkExperience {...workplaceData[selectedWorkplace]} />
            </div>
        </section>)
}

export default Experience