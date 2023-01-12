import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{ opacity: 1}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true}}
            src="https://i.imgur.com/pJeFLog.jpg"
            className="mt-20 md:mt-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg xl:w-[400px] xl:h-[400px]"
            id="aboutImage"
        / >
        
        <div className="space-y-4 px-0 md:px-10">
            <h4 className="mt-0 text-2xl font-semibold md:text-4xl">Here is a {" "}
                <span className="underline decoration-[#F7AB0A]/50">
                     little 
                </span> {" "}
                background
            </h4>
            <p className="text-sm md:text-base">
                dummy text for now, will replace it, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi aperiam quo earum. Ex nobis cumque quod accusantium quaerat? Ab placeat fugiat maiores iste veniam aut? Perferendis, voluptatibus cupiditate. Id?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt expedita necessitatibus delectus adipisci quo officiis nemo Sit maiores illo praesentium laborum quos labore, odit mollitia ipsa id? Dolorum numquam eligendi corrupti? Quis porro, animi eligendi nemo voluptas libero!  </p>
        </div>
    </motion.div>
  )
}