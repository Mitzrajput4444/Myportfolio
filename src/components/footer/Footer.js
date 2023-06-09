import React from 'react'
import {logo} from "../../assets/index"
import {  FaPhone , FaMailBulk , FaAddressCard, FaAddressBook} from "react-icons/fa"



function Footer() {
  return (
    <div className='flex flex-col pt-10 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center'>
              <div className='md:flex'>
                  <div className='logoMain-footer pb-4'>
                               <img className='logo-footer' src={logo} alt="logo" /><span>CODE-AHOLIC</span>
                         </div>
               <div>
                  <div className='sub-menu-footer'>
                <div className='left-b'> <FaAddressCard/></div>
                <div>
                  Address
                  <div>LuharFaliya Opp. Ramji Temple,Nana varachha Surat</div>
                </div>
              </div>
              <div className='sub-menu-footer'>
                <div className='left-b'> <FaPhone/> </div>
                <div>
                  Phone
                  <div>(+91)9979945258</div>
                </div>
              </div>
              <div className='sub-menu-footer'>
                <div className='left-b'> <FaMailBulk/> </div>
                <div>
                  Email
                  <div>Gohilmittal144@gmail.com</div>
                </div>
              </div>
                         </div>
              </div>
          <div>
         
          </div>
        </div>
         <div className='rights-footer md:text-sm '>	&copy; 2020 All Rights Reserved By Mittal Gohil</div>
    </div>
  )
}

export default Footer