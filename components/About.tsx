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
            src="https://i.imgur.com/6EoK5yy.jpg"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-200 md:h-95 xl:w-[400px] xl:h-[400px]"
        / >
        
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="mt-0 text-4xl font-semibold">Here is a {" "}
                <span className="underline decoration-[#F7AB0A]/50">
                     little 
                </span> {" "}
                background
            </h4>
            <p className="text-sm">
                dummy text for now, will replace it, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi aperiam quo earum. Ex nobis cumque quod accusantium quaerat? Ab placeat fugiat maiores iste veniam aut? Perferendis, voluptatibus cupiditate. Id?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis dolor atque. In dolor culpa autem tempora ducimus modi magnam animi, quidem expedita eum alias ullam quas architecto corrupti debitis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id amet rerum dolorum totam tempore, voluptatum, quae magnam sequi illo inventore nulla delectus ut atque repellendus accusamus unde doloremque eveniet vero.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero dolorem eos reprehenderit quia laudantium sint, dignissimos animi, atque aliquid debitis odio. Libero dolores quae vel minima labore odio officiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum doloribus sint sit at quas quasi quae illum doloremque iure tempora repellat aut ipsum culpa officia qui velit, illo temporibus.
 </p>
        </div>
    </motion.div>
  )
}