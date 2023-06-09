import React from 'react'
import DetailsCart from './DetailsCart'
import { motion } from 'framer-motion'
function Skill() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:0.8}}} className='flex w-full flex-col lgl:flex-row gap-10 lgl:gap-20'>
 <div className='flex w-full flex-col mx-5 md:flex-row md:gap-20'>
 <div className=' flex w-full flex-col'>
    <div className='py-10 pl-5 flex flex-col gap-2'>
         <p className='edu-year text-sm tracking-[4px] uppercase'> Features</p>
         <h3 className='md:text-4xl text-3xl font-bold'>Frontend-Development Skill</h3> 
     </div>
   <div className='w-full md:mt-12 mt-4 flex flex-col gap-6'>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>CSS</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[85%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>85%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>JQuery</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[70%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>70%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>BOOTSTRAP</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>80%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Sass</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[75%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>75%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Tailwind</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>80%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>TypeScript</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>80%</span>
                </motion.span>
            </span>
        </div>
    </div>  
 </div>
       <div className='flex w-full  flex-col'>
       <div className='py-10 pl-5 flex flex-col gap-2'>
         <p className='edu-year text-sm tracking-[4px] uppercase'> Features</p>
         <h3 className='md:text-4xl text-3xl font-bold'>Backend-Development Skill</h3> 
       </div>
       <div className='md:mt-12 mt-4 flex flex-col gap-6'>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Javascript</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>80%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>React</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[85%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>85%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>php</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[90%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>90%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Laravel</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[75%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>80%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>MySQL</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[85%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>85%</span>
                </motion.span>
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>C++</p>
            <span className='w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2'>
                <motion.span initial={{x:"-100%",opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.5, delay:0.5}} className='w-[85%] h-full bg-gradient-to-r from-blue-600 relative via-pink-500 to-red-500 rounded-md'>
                    <span className='absolute right-0 -top-6'>85%</span>
                </motion.span>
            </span>
        </div>
    </div>  
       </div>
 </div>
</motion.div>
  )
}

export default Skill