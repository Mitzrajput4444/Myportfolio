import React from 'react'
import DetailsCart from './DetailsCart'
import { motion } from 'framer-motion'
function Education() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:0.8}}} className='flex md:flex-row flex-col gap-10'>
    <div>
    <div className='md:py-10 py-5 ml-6 font-titleFont flex flex-col gap-4'>
         <p className='text-sm tracking-[4px]'> 1994-2014</p>
         <h3 className='md:text-4xl text-2xl font-bold '>Education</h3> 
       </div>
       <div className='h-[1000px] border-l-[6px] border-black flex flex-col gap:5 md:gap-10 md:mt-10  border-l-black border-opacity-30'>
         <DetailsCart title="Bachelors in Computer Application" uni="veer Narmad South Gujrat Univercity (2011-2014)" score="7.4/10" des="In My Bachelor I learn about software development and sophisticated computer applications. Web technology, software engineering, computer languages such as Java, C++, C, HTML, operating systems, and database management systems "/>
         <DetailsCart title="Higher School Education" uni="Surat Diamond Association Girls High school (2009-2011)" score="7/10" des="Many benefits come from having higher education, and this is one of the most important ones to have in life because it allows people to feel more accomplished with what they have achieved in life. "/>
         <DetailsCart title="Secondary School Education" uni="DR K.S.Thakar Kanaya Shala (2000-2009)" score="5.5/10" des="This Is Most Crucial Part Of Life this very education level, particularly in its first cycle, where values and attitudes formed at primary school are more firmly ingrained alongside the acquisition of knowledge and skills. "/>
       </div>
    </div>
       <div>
       <div className='md:py-10 py-5 ml-6 font-[#ff5823] flex flex-col gap-4'>
         <p className='text-sm tracking-[4px]'> 2014-2023</p>
         <h3 className='md:text-4xl text-xl font-bold'>Exprience</h3> 
       </div>
       <div className=' h-[1000px] border-l-[6px] border-black flex flex-col gap:5 md:gap-10 md:mt-10 border-l-black border-opacity-30'>
         <DetailsCart title="React-Js Developer" uni="Exomoon Infotech" score="2019-2022" des="Writing Clean and efficient codes react js.Monitoring the perfomance of live apps and work on optimizing them at the code level.work with API."/>
         <DetailsCart title="Assistance web designer" uni="Corebytes INC Empowering Digital Solution" des="To create a website that’s visually appealing and functional, you’ll need to prioritize navigation and branding elements that contribute to a great user experience (UX) and user interface (UI).o	Plan site layout (and make it responsive).Carry out user research" score="2017-2018"/>
         <DetailsCart title="Soft World Infonet" uni="Font Desk Receptionist" score="2014-16" des="ISP based Software handler.CRM base Management Support for technical.Data Entry Ms Excel, Office Etc.A Receptionist's duties and responsibilities include greeting visitors, helping them navigate through an office, and supplying them with refreshments as they wait."/>
       </div>
       </div>
</motion.div>
  )
}

export default Education