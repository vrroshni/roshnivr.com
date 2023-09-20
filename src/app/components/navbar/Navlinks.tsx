"use client"
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { navlinks, socialmedialinks } from '@/app/assets/data';
import { MdOutlineClose } from "react-icons/md";

const Navlinks = () => {
    const [activeSection, setActiveSection] = useState("Home");

    const ref = useRef<string | any>("");
    const [show, setShow] = useState(false);

    // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,name:string) => {
    //     e.preventDefault();
    //     setShow(false);
    //     setActiveSection(name)
    //     const { href } = e.currentTarget;
    //     const targetId = href.replace(/.*\#/, "");
    //     const elem = document.getElementById(targetId);

    //     elem?.scrollIntoView({
    //         behavior: "smooth",
    //     });

    //     // Update the class name of the clicked link
    //     const links = document.querySelectorAll(".nav-link");
    //     links.forEach((link) => {
    //         link.classList.remove("active");
    //     });

    //     e.currentTarget.classList.add("active");
    // };

    function handleClick(e: any) {
        if (e.target.contains(ref.current)) {
            // do something with myRef.current
            setShow(false);
        }
    }


    return (
        <>
            <div className="hidden mdl:inline-flex items-center gap-7">
                <ul className="flex text-[13px] gap-7">
                    {
                        navlinks.map(({ name, link, delay }, key) => (
                            <Link key={key}
                                className={`flex items-center gap-1 text-base font-medium text-black hover:text-textGreen cursor-pointer duration-300 nav-link ${activeSection===name && "active"}`}
                                href={link}
                                onClick={()=>setActiveSection(name)}
                            >
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay }}
                                >
                                    {name}
                                </motion.li>
                            </Link>
                        ))
                    }
                </ul>
                <a href="/assets/noor_resume.pdf" target="_blank">
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="px-4 py-2 rounded-md text-textGreen text-base border border-textGreen hover:text-black hover:border-black duration-300"
                    >
                        Resume
                    </motion.button>
                </a>
            </div>

            <div onClick={() => setShow(true)}
                className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-black inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                <span className="w-full h-[2px] bg-black inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
            </div>


            {show && (
                <div
                    ref={(node) => (ref.current = node)}
                    onClick={handleClick}
                    className="absolute mdl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end" >

                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1 }}
                        className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-black  flex flex-col items-center px-4 py-10 relative">

                        <MdOutlineClose onClick={() => setShow(false)}
                            className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4" />

                        <div className="flex flex-col items-center gap-7">
                            <ul className="flex flex-col text-base gap-7">
                                {
                                    navlinks.map(({ name, link, delay }, key) => (
                                        <Link key={key}
                                            className="flex items-center gap-1 text-base font-medium text-white hover:text-textGreen cursor-pointer duration-300 nav-link"
                                            href={link}
                                        >
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.2, delay, ease: "easeIn" }} >
                                                {name}
                                            </motion.li>
                                        </Link>
                                    ))
                                }
                            </ul>

                            <a href="/assets/noor_resume.pdf" target="_blank">
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6, ease: "easeIn" }}
                                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:text-white hover:border-white duration-300"
                                >
                                    Resume
                                </motion.button>
                            </a>

                            <div className="flex gap-4">
                                {socialmedialinks.map(({ href, delay, icon }, key) => (
                                    <motion.a
                                        key={key}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay, ease: "easeIn" }}
                                        href={href}
                                        target="_blank"
                                    >
                                        <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700  text-black rounded-full inline-flex items-center justify-center  hover:border-white hover:bg-white cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                            {icon}
                                        </span>
                                    </motion.a>

                                ))}
                            </div>
                        </div>

                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, ease: "easeIn" }}
                            className="text-sm w-72 tracking-widest text-textGreen text-center mt-4 hover:text-white"
                            href="mailto:vr7roshni@gmail.com">
                            <p>vr7roshni@gmail.com</p>
                        </motion.a>

                    </motion.div>
                </div>
            )}
        </>
    )
}

export default Navlinks