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
import Link from 'next/link'

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

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
            className='h-12 w-12 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            src="https://media.licdn.com/dms/image/D5603AQHxylp7eJKlHw/profile-displayphoto-shrink_800_800/0/1672872138832?e=1683158400&v=beta&t=pdSSkTw4QfHGs8GQP6Vh9Y6kIVvIeY8vKOeNfTVSLT4" 
            alt="footer image" />
          </div>

        </footer>
      </Link>
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