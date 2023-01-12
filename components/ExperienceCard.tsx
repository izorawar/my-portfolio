import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[500px] md:w-[600px] md:h-[600px] xl:w-[600px] xl:h-[600px] mt-0 xl:mt-20 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-scroll">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="https://i.imgur.com/8JvjovE.png"
        alt="Ultimate Coders Logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Programming Instructor</h4>
        <p className="font-bold text-2xl mt-1">Ultimate Coders</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
            alt="HTML logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
            alt="HTML logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
            alt="HTML logo"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started ... - ended ..</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Graded quizzes, tests, homework and projects to provide students with timely academic progress information and feedback.</li>
          <li>Evaluated and supervised student activities and performance levels to provide reports on academic progress.</li>
          <li>Taught diverse student population by employing various learning styles and abilities.</li>
        </ul>
      </div>
    </article>
  );
}
