import React from 'react'
import { useTypewriter , Cursor } from 'react-simple-typewriter'
import { FaFacebookF , FaTwitter , Falinkedin , FaReact, FaLinkedin, FaInstagram, FaPhp , FaDownload} from "react-icons/fa"
import { SiPhp , SiLaravel , SiGithub, SiJavascript} from "react-icons/si"
import { Link } from 'react-scroll';

function Leftmain() {
    const [text] = useTypewriter({
        words:["FULLSTACK DEVELOPER.","REACT DEVELOPER.","PHP-LARAVEL DEVELOPER."],
        loop:true,
        typeSpeed:20,
        deleteSpeed:10,
        delaySpeed:2000,
    });
  return (
    
           <div className='left-main md:w-1/2'>
            <div className='left-main-sub flex w-full flex-col gap-2 md:gap-5'>
                <p className='font-normal'>WELCOME TO MY WEB WORLD!!!!</p>
                <h1 className='myname font-bold'> {" "}HI,I'M {" "}<span className='myColor'>MITTAL GOHIL</span></h1>
                <h1 className='md:text-2xl font-bold text-aliceblue magic-word'>
                     A <span className='ml-2'>{text}</span>
                     <Cursor cursorColor='#ff5823' />
                
                </h1>
                <p className='summary'>Experienced Web Developer adept in all stages of advances web development knowledgeable in user interface,testing and debugging process.<br/>Proficient in an assortment of technologies including PHP , React , CSS ,  Javascript , Laravel  And  MySQL  Server Able to effectively self-manage during independent projects as well as collaborate in a team.  

                </p>
            </div>
       <div className='flex w-full left-icon-main md:gap-20 md:mt-10'>
       <div className='flex flex-col gap-5 mt-4'>
                <h2 className='ani'>Find Me In </h2>
                <div className='flex gap-4'>
                    <span className='myIcon'> <FaFacebookF/> </span>
                    <span className='myIcon'>  <FaLinkedin/> </span>
                    <span className='myIcon'> <a href='https://www.instagram.com/mitz_rajput4444/'> <FaInstagram/></a> </span>
                    <span className='myIcon'> <FaTwitter/> </span>
                </div>
     
        </div>
        <div className='flex flex-col gap-5 mt-4'>
                <h2 className='ani'>Best Skill In</h2>
                <div className='flex gap-4'>
                    <span className='myIcon'><a href="https://react.dev/"> <FaReact/> </a> </span>
                    <span className='myIcon'> <a href='https://www.php.net/'> <SiPhp/> </a>  </span>
                    <span className='myIcon'> <a href="https://laravel.com/docs/10.x/readme"> <SiLaravel/> </a> </span>
                    <span className='myIcon'> <SiJavascript/> </span>
                </div>
     
        </div>

 
            </div>
            <div className='btnn mt-10 md:mt-16'>
               <button className='btn hire-me'>Hire Me </button>
              <a href='./src/Mitz.pdf' download="Mitz.pdf"> <button className='btn get-resume'>Get Resume<span className='get-resume-icon' ><FaDownload/></span> </button></a>
            </div>

        </div>
    
  )
}

export default Leftmain