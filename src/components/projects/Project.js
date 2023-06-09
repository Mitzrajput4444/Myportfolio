import React from 'react'
import ProjectCard from './ProjectCard'
import { FaGithub , FaGlobe} from 'react-icons/fa'
import { proj1 , proj2 , proj3 , proj4 , proj5 , proj6 } from '../../assets'


// import {proj2} from '../../assets/images/proj2.jpg'
// import {proj1} from '../../assets/images/proj1.jpg'

function Project() {
  return (
    <div id='Projects' className=' w-full py-10 md:py-20  border-b-[1px] border-b-black'>
            <div className='proj-mainn'>
                <div className='flex justify-center items-center md:my-4 text-center'><h3>My Project<span className='proj-underline'><span className='proj-highlight'></span></span></h3></div>
                <div className='proj-main'> 
                  <div className='proj-sub grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-14'>
                    <ProjectCard imgg={proj1} title='Food-delivry Website' icon={<FaGithub/>} icon2={<FaGlobe/>} 
                    des="A fully functional project based on Online Food Ordering System that uses PHP."/>
                    <ProjectCard imgg={proj2} title='Learning Management System' icon={<FaGithub/>} icon2={<FaGlobe/>} 
                    des="Led the development of a Learning Management System (LMS) for a team project.o	Developed the platform's core features, including assignment submission and grading, messaging, and file sharing using technologies such as PHP, HTML, CSS and Java Script."/>
                    <ProjectCard imgg={proj3} title='Weather App (Country Weather)' icon={<FaGithub/>} icon2={<FaGlobe/>}  
                    des="The app will allow the user to Find Any Country Weather , type in a location for each panel, and retrieve the current weather in the location."/>
                    <ProjectCard imgg={proj4} title='Restaurant Management System' icon={<FaGithub/>} icon2={<FaGlobe/>}  
                    des="In This Website Customer Can Order Food and Also they have Book Table Reservation Particular Day wise.In This Website Customer Can Order Food and Also they have Book Table Reservation Particular Day wise."/>
                    <ProjectCard imgg={proj5} title='E-State Website' icon={<FaGithub/>} icon2={<FaGlobe/>}  
                    des=" o	User Can Easily Find Property ex. Buy Home Sell their Home, Rent Property.Flip property. Manage property. Bird-dogging. Real estate photography.Use Jet-stream For Authentication.Tools and Technologies used:- PHP , Laravel , MVC Framework
                    "/>
                    <ProjectCard imgg={proj6} title='Mini Blog' icon={<FaGithub/>} icon2={<FaGlobe/>}  des="Write and publish simple blogging.Keeps edit history for written blogs.Tags and disqus supported comment system on blogs.The platform provides a way to promote positivity ideas in blog formTools and Technologies used:- Tailwind,MVC Model, Laravel
"/>
                   
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Project