import React from 'react'
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string;
}

interface ArchiveCardProps {
    project: Project;
}

const Archieve: React.FC<ArchiveCardProps> = ({ project }) => {

    const cardVariants = {
        hidden: { opacity: 0, y: 20 }, // Initial hidden state
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Visible state with animation
    };
    return (
        <motion.div
            initial="hidden" // Initial state
            animate="visible" // Animate to visible state
            variants={cardVariants} // Variants for animation
        >
            <a href={project.link} target="_blank">
                <div className="w-full h-80 rounded-lg bg-textGreen/25 p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="flex justify-between items-center">
                        <FaRegFolder className="text-4xl text-textGreen" />
                        <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
                    </div>
                    <div>
                        <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
                            {project.title}
                        </h2>
                        <p className="text-sm mt-3">{project.description}</p>
                    </div>
                    <ul className="text-xs md:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
                        {project.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </a>
        </motion.div>

    )
}

export default Archieve