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
import ContactMe from '../components/ContactMe'

type Props = {
  skills: Skill[];
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({skills}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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

      <section id="contact" className='snap-start'>
        <ContactMe />
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