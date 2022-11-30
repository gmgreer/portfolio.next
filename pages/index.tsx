import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { GetStaticProps} from 'next'
import {Experience, PageInfo, Project, Skill, Social} from '../typing'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
// import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[]
 
 
}

const Home = ({pageInfo, experiences,  skills, projects  }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[orange]/80'>
      <Head>
        <title>Garrett Greer Portfolio</title>
      </Head>
      <Header />

      <section id='hero' className='snap-center'>
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href='#hero'> 
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <p 
          className='text-gray-500 hover:cursor-pointer'>Home</p>
           </div>
      </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  // const socials: Social[] = await fetchSocials();

  return{
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
    }, 

  }
}
