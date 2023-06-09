import React, { useState } from 'react'
import { FaFacebookF , FaTwitter , FaLinkedin, FaInstagram , FaPhone , FaMailBulk , FaAddressCard, FaPersonBooth, FaVoicemail, FaAddressBook, FaArtstation, FaUsers, FaUser, FaCcVisa, FaSimCard, FaIdCard, FaDownload} from "react-icons/fa"
import {MdClose} from 'react-icons/md'
import { motion } from 'framer-motion'
import { navData } from '../primary'
import axios from 'axios';

function Contact() {
  const [showSmallfm , setShowSmallfm] = useState(false);
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [msg , setMsg] = useState("");
  const dataHandle = (e) => {
    e.preventDefault();
    if(name.length === ""){
    alert ("Please Enter name");
  }
  else if(email.length === ""){
    alert ("Please Enter email");
  }
  else if(msg.length === ""){
    
    alert ("Please Enter email");
  }
  else{
    const url = "http://localhost/mycontact.php"
    let contact = new FormData();
    contact.append('name',name);
    contact.append('email',email);
    contact.append('msg',msg);
    axios.post(url,contact)
    .then(response=>alert(response.data))
    .then(error=>alert(error)); 
    // alert ("Thanks For Contact Me....!");
  }
 }
  return (
    <div id='Contact' className='main w-full py-20 border-b-[1px] border-b-black'>
      <div className='contact-main'>
      
        <div className='big-fm'>
              <h3>Or Write Me</h3>
                <form action="" onSubmit={dataHandle} method='post'>
             <div className='msg-fm'>
             <div className='icon-input-parent'>
              <span className='icon-input'><FaUser/></span>
                  <input type='text' placeholder='Enter Your Name' required value={name} onChange={(e)=> setName(e.target.value)}/>
              </div>
              <div className='icon-input-parent'>

              <span className='icon-input'><FaAddressBook/></span>
                  <input type='text' placeholder='Enter Your Email' required value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className='icon-input-parent-textarea'>

              <span className='icon-input-textarea'><FaIdCard/></span>
               <textarea name="msg" id="" cols="20" value={msg} onChange={(e)=> setMsg(e.target.value)} rows="5" placeholder= 'Enter Your Message' required></textarea>
              </div>
              <div className='btn-contact'>
                {
                  showSmallfm && (
                    <motion.span initial={{opacity:0}} animate={{opacity:1 , transition:{duration:0.8}}} className='small-fm'>
                    <div className='main-contact-small'>
                      <div>  <h3>Contact Us</h3> 
                      <span onClick={()=>setShowSmallfm(false)} className='absolute  top-6 right-4 black-gray-400 hover:text-[white] duration-300 text-2xl cursor-pointer'>
                      <MdClose/>
                    </span>
                      </div>
                        <div className='sub-menu'>
                          <div className='left-b'> <FaAddressCard/></div>
                          <div>
                            Address
                            <div>LuharFaliya Opp. Ramji Temple,Nana varachha Surat</div>
                          </div>
                        </div>
                        <div className='sub-menu'>
                          <div className='left-b'> <FaPhone/> </div>
                          <div>
                            Phone
                            <div>(+91)9979945258</div>
                          </div>
                        </div>
                        <div className='sub-menu'>
                          <div className='left-b'> <FaMailBulk/> </div>
                          <div>
                            Email
                            <div>Gohilmittal144@gmail.com</div>
                          </div>
                        </div>
                        <div>
                         
                        </div>
                    </div>
                  </motion.span>
                  )
                }
                <button onClick={()=>setShowSmallfm(true)} className=' btn-msg btn mx-4'> Contact Me </button>
                <input className=' btn btn-msg'  type="submit" value="Send Message" /> 
              </div>
              <div className='social-icon'>
                   <div> <a href='https://www.facebook.com/'>  <FaFacebookF/></a></div>
                   <div> <a href='https://www.instagram.com/mitz_rajput4444/'></a> <FaInstagram/></div>
                   <div> <a href="https://in.linkedin.com/"><FaLinkedin/></a> </div>
                   <div> <a href='https://twitter.com/?lang=en-in'> <FaTwitter/></a></div> 
              </div>
             </div>
                </form>
        </div>
      </div>
       
    </div>
  )
}

export default Contact