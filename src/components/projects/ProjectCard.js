import React from 'react'
import { proj1 , proj2 , proj3 , proj4 , proj5 , proj6 } from '../../assets'
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaArrowAltCircleUp, FaScroll } from 'react-icons/fa'

function ProjectCard({des,title,imgg , icon , icon2}) {
  return (
    <div className=' proj-card-main'>
        <div className='proj-img'><img src={imgg} /></div>
        <div className='head-proj'>
            <div><h3>{title}</h3></div>
           <div className='proj-f-icon'> <h4> {icon} </h4> <h4>{icon2}</h4></div>
        </div>
        <div className='des des2'><span className='right-arrow'> < FaArrowAltCircleDown/> </span><span>{des}</span></div>
    </div>
  )
}

export default ProjectCard