import React from 'react'
import DetailsCart from './DetailsCart'
import { motion } from 'framer-motion'
function Education() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:0.8}}} className='flex md:flex-row flex-col gap-10'>
    <div className='w-full'>
    <div className='md:py-10 py-5 ml-6'>
          <ul className='flex w-auto justify-center gap-5 flex-col'>
            <li className='myshadow'> 1.	Certificate for Completion of Backend Developer Training(PHP-Laravel) – TOPS Technologies Pvt. Ltd, Surat</li>
            <li className='myshadow'> 2.	Certificate for Completion of Frontend Developer Training - TOPS Technologies Pvt. Ltd, Surat(April-2022 To Oct-2022)</li>
            <li className='myshadow'> 3.	Certificate Of DTP Course(Rajeev Gahdhi Computer Saksharta Mission) – (Sep-2015 To Oct-2015 )</li>
            <li className='myshadow'> 4.	Certificate Course on Computer Concepts(CCC)(19-Nov-2010)</li>
          </ul>
       </div>
       </div>
</motion.div>
  )
}

export default Education