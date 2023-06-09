import React, { useState } from 'react'
import {Link} from 'react-scroll'
import {logo} from "../../assets/index"
import { navData } from '../primary'
import { FiMenu } from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import { FaFacebookF , FaTwitter , Falinkedin , FaReact, FaLinkedin, FaInstagram, FaPhp , FaDownload} from "react-icons/fa"


function Navbar() {
  const [showMenu , setShowMenu] = useState(false);
  return (
    <div className='w-full px-3 h-20 sticky nav top-0 z-50 mx-auto flex justify-between items-center border-b-[1px] border-gray-700'>
        <div className='logoMain '>
            <img className='logo' src={logo} alt="logo" /><span>CODE-AHOLIC</span>
        </div>
        <div>
            <ul className='hidden md:inline-flex items-center gap-5 lg:gap-10'>
                {
                    navData.map(({_id,title,link})=>(
                        <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-[#ff5823]" key={_id}>
                          <Link to={title} spy={true} smooth={true} offset={-70} duration={500} activeClass="active">  {title}</Link>
                            </li>
                    ))
                }
            </ul>
            <span onClick={()=>setShowMenu(!showMenu)} className='text-xl md:hidden cursor-pointer w-10 h-10 inline-flex items-center justify-center rounded-full text-[#ff5823]'> <FiMenu/> </span>
            {
              showMenu && (
                <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide'>
                    <div className='flex flex-col'>
                    
                     <div className='flex items-center gap-2 mb-2 border-b-[1px] border-b-black '> <img className='logo' src={logo} alt="logo" /><span className='text-lg'>CODE-AHOLIC</span>
                   </div>
    
                      <p className='text-sm mt-4'>
                      Experienced Web Developer adept in all stages of advances web development knowledgeable in user interface,testing and debugging process. Server Able to effectively self-manage during independent projects as well as collaborate in a team.
                      </p>
                      <div>
                        <ul className='flex flex-col gap-4 mt-8'>
                          {
                            navData.map((item)=>(
                              <li key={item.id}  className=' cursor-pointer border-b-[1px] border-b-black'>
                                <Link onClick={()=>setShowMenu(false)} to={item.title} spy={true} smooth={true} offset={-70} duration={500} activeClass="active" >{item.title}</Link></li>
                            ))
                          }
                        </ul>
                      </div>
                      <div className='flex flex-col gap-5 mt-8'>
                <h2 className='ani'>Find Me In </h2>
                <div className='flex gap-4'>
                    <span className='myIcon'><a href='https://www.facebook.com/'>  <FaFacebookF/></a></span>
                    <span className='myIcon'> <a href="https://in.linkedin.com/"><FaLinkedin/></a> </span>
                    <span className='myIcon'> <a href='https://www.instagram.com/mitz_rajput4444/'> <FaInstagram/></a> </span>
                    <span className='myIcon'> <a href='https://twitter.com/?lang=en-in'> <FaTwitter/></a></span>
                </div>
     
        </div>
                    </div>
                    <span onClick={()=>setShowMenu(false)} className='absolute top-4 right-4 text-gray-400 hover:text-[#ff5823] duration-300 text-2xl cursor-pointer'>
                      <MdClose/>
                    </span>
                </div>
              )}
        </div>
    </div>
  )
}

export default Navbar