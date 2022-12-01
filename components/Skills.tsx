import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typing'

type Props = {
  skills: SkillType[]
}

const Skills = ({skills}: Props) => {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        
        <h3 className='absolute top-20 first-letter:uppercase tracking-[20px] text-gray-500 text-2xl'>Skills
       </h3>
       <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm'>Hover to check current proficiency
       </h3>
       <div className='grid grid-cols-4 gap-5'>
        {skills?.map(skill => (
          <Skill key={skill._id} skill={skill} />
        ))}
        
       </div>
    </motion.div>
  )
}

export default Skills