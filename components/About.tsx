import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '../typing'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}

    
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-12 first-letter:uppercase tracking-[20px] text-gray-500 text-2xl'>About
       </h3>
       <motion.img 
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.3,
            }}
           whileInView={{
                opacity: 1,
                x: 0
           }}
           viewport={{once:true}}
            
            src={urlFor(pageInfo?.profilePic).url()}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56  h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] '
       />

       <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold mt-4'>This is <span className='underline decoration-[orange]'>Me</span> </h4>
        <p className='text-base'>{pageInfo?.backgroundInformation}</p>
       </div>
    </motion.div>
  )
}

export default About