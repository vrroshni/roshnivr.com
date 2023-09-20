"use client"
import React from 'react'
import { motion } from "framer-motion";
import { socialmedialinks } from '@/app/assets/data';

const LeftSide = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
            <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-black">
                <div className="flex flex-col gap-4">
                    {socialmedialinks.map(({ href, icon },key) => (
                        <a href={href} target="_blank" key={key}>
                            <span className="w-10 h-10 text-xl  hover:bg-white bg-textGreen/30 border-black border rounded-full inline-flex items-center justify-center hover:text-textGreen hover:border-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                {icon}
                            </span>
                        </a>
                    ))}
                </div>
                <div className="w-[2px] h-32 bg-textGreen"></div>
            </div>

        </motion.div>
    )
}

export default LeftSide