import React from 'react'
import DetailsCart from './DetailsCart'
import { motion } from 'framer-motion'
function Education() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:0.8}}} className='flex md:flex-row flex-col gap-10'>
    <div className='w-full'>
    <div className='md:py-10 py-5 ml-6'>
          <ul className='flex justify-center gap-5 flex-col'>
            {/* <li className='myshadow'> 1. Multiline Infotech - Trainee PHP Developer</li> */}
            <li className='myshadow'> 1.	Exomoon Infotech - ReactJs Developer (April-2019 - sept 2022)</li>
            <li className='myshadow'> 2. Corebytes INC Empowering Digital Solution - Assistance web designer (Jan-2017 To Dec-2018 )</li>
            <li className='myshadow'> 3.  Soft World Infonet - Front Desk Receptionist (Aug-2014 To Nov-2016 )</li>
          </ul>
       </div>
       </div>
</motion.div>
  )
}

export default Education