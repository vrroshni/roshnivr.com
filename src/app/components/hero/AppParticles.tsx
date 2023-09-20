'use client'
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import { motion } from "framer-motion";


const AppParticles = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => { }, []);
    return (
        <motion.div 
        
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        >
        <Particles
            className='w-full h-full translate-z-0 absolute inset-0 z-0'
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                background: {

                    color: {
                        value: ''
                    },

                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push'
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true

                    },
                    modes: {
                        push: {
                            quantity: 90
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4

                        }
                    }
                },
                particles: {
                    color: {
                        value: '#000000'
                    },
                    links: {
                        color: '#62ced1',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 1,
                        straight: false

                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80

                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {
                            min: 1, max: 5
                        }
                    }

                },
                detectRetina: true
            }}

        /> 
</motion.div>
    )
}

export default AppParticles

