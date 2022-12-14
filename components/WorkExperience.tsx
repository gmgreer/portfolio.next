import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typing'

type Props = {
  experiences: Experience[]
}



const WorkExperience = ({experiences}: Props) => {
  const sortedWork =  experiences.sort((a,b) => {
    const dateA = new Date(a.dateStarted).getTime()
    const dateB = new Date(b.dateStarted).getTime()
    return dateB - dateA
  })
   
    console.log(sortedWork)
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='invisible sm:visible absolute top-16 first-letter:uppercase tracking-[10px] text-gray-500 text-2xl'>Experience</h3>
        
        <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[orange]/80 '>
            {sortedWork.map(experience => (
              <ExperienceCard key={experience._id} experience={experience}/>
            ))}
            
        </div>
    </motion.div>
  )
}

export default WorkExperience