"use client"
import React from 'react'
import { motion } from "framer-motion";

const RisghtSide = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
            <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
                <a href="mailto:vr7roshni@gmail.com">
                    <p className="text-sm rotate-90 w-72 tracking-widest text-black hover:text-textGreen">
                    vr7roshni@gmail.com
                    </p>
                </a>
                <span className="w-[2px] h-32 bg-textGreen inline-flex"></span>
            </div>
        </motion.div>
    )
}

export default RisghtSide