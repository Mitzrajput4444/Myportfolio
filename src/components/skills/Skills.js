import React from 'react'
import { skillData } from '../primary'

function Skills() {
  return (
    <section id='Skills' className='border-b-[1px] border-b-black'>
     <div className='skill-main h-[600px] py-10 border-b-[1px] border-b-black'>
      <h3 className='pb-10 text-lg'>What I Do <span className='Main-highlight'><span className='orange-highlight'></span></span> </h3>
      <div className='grid iDo grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-15'>
            {
              skillData.map(({id,skillname,details,icon})=>(
                  <div className='skill' key={id}>
                    <div className='skill-sub'>
                      <div className='skill-icon'>{icon}</div>
                      <div className='skill-name'>{skillname}</div>
                     <div className='skill-details'> {details}</div>
                      </div>
                  </div>
              ))
            }
      </div>
     </div>
    </section>
  )
}
// iDo h-80 py-10 rounded-lg shadow-shadowOne items-center

export default Skills