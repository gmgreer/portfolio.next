import React from 'react'
import {motion} from 'framer-motion'
import { Project } from '../typing'

import { urlFor } from '../sanity'

type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {
    
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}

        className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-16 first-letter:uppercase tracking-[20px] text-gray-500 text-2xl'>Projects
       </h3>
       <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[orange]/80'>
            {projects?.map((project,i)=>(
    
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    
                        <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{duration: 1.2,}}
                            whileInView={{opacity: 1, y: 0,}}
                            viewport={{once: true}}
                            src={urlFor(project.image).url()} alt="favicon" 
                            className='max-h-60'
                            />
                        
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'><span className='hover:underline decoration-[orange]/50'><a href={project.LinkToBuild} target='_blank' rel="noreferrer">{project?.title}</a></span></h4>
                        <div className='flex items-center space-x-2 justify-center'>

                        {project?.technologies.map(technology => (
                            <img
                            className='h-10 w-10' 
                            key={technology._id}src={urlFor(technology.image).url()} alt="" />
                            ))}
                            </div>
                        <p className='text-lg text-center md:text-left'>{project?.summary}</p> 
                    </div>
                </div>
            ))}
       </div>
       <div className='w-full absolute top-[30%] bg-[orange]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects