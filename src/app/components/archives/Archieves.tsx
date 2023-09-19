"use client"
import { archiveData } from '@/app/assets/data'
import React , { useState } from 'react'
import Archieve from './Archieve'

const Archieves = () => {

    const [showMore, setShowMore] = useState(false);
    return (
        <div className="max-w-contentContainer mx-auto px-4 py-24 scroll-mt-20">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">
                    Other Noteworthy Projects
                </h2>
                <p className="text-sm font-titleFont text-textGreen">view the archive</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                {archiveData.slice(0, showMore ? archiveData.length : 3).map((project, index) => (
                    <Archieve key={index} project={project} />
                ))}
            </div>
            <div className="mt-12 flex items-center justify-center">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                >
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>)
}

export default Archieves