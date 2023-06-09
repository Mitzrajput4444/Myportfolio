import React, { useState } from 'react'
import DetailsCart from './DetailsCart'
import Education from './Education'
import Skill from './Skill'
import Professional from './Professional'
import Exprience from './Exprience'


function Details() {
  const [education, setEducation] = useState(true);
  const [skill, setSkill] = useState(false);
  const [exprience, setExprience] = useState(false);
  const [professional, setProfessional] = useState(false);

  return (
    <div id='Details' className='details py-10 border-b-[1px] border-b-black'>     
        <div className='detail-top flex flex-col justify-center'>
            <h3>My Formal Bio Details</h3>
            <p className='underline'> <span className='highlight'></span> </p>
        </div>
       <div>
        <ul className='grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-4 detail-menu'>
            <li onClick={()=>setExprience(false) & setProfessional(false) & setSkill(false) & setEducation(true) }>Education</li>
            <li onClick={()=>setEducation(false) & setExprience(false) & setProfessional(false) & setSkill(true)}>Professional Skill</li>
            <li onClick={()=>setEducation(false) & setProfessional(false) & setSkill(false) & setExprience(true)}>Experience</li>
            <li onClick={()=>setEducation(false) & setSkill(false) & setExprience(false) & setProfessional(true)}>Certificates</li>
        </ul>
       </div>
       {
        education && <Education/> 
       }
       {
        skill && <Skill/>
       }
       {
        professional && <Professional/>
       }
       {
        exprience && <Exprience/>
       }

    </div>
  )
}

export default Details