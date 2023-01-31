import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import { GetStaticProps } from 'next'
import { Skill } from "../typings"
import { fetchSkills } from '../utils/fetchSkills'

type Props = {
  skills: Skill[];
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({skills}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>{" Jorawar's Portfolio "}</title>
      </Head>
      
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects />
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async() => {
  const skills: Skill[] = await fetchSkills();
  return {
    props: {
      skills
    }
  }
}