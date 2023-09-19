"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { logo } from '../../../../public/assets';

const Logo = () => {
    return (
        <Link href="/">
            <motion.div>
                <Image className='w-24 lg:w-28 ' src={logo} alt='Logo' />
            </motion.div>
        </Link>
    )
}

export default Logo