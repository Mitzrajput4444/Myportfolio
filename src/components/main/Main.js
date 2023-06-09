import React from 'react'
import Leftmain from './Leftmain';
import Rightmain from './Rightmain';
import { navData } from '../primary'


function Main() {
  return (
    <section id='Home' className='main w-full py-5 md:flex-row md:py-20 border-b-[1px] border-b-black'>
      <Leftmain/>
      <Rightmain/>
    </section>
  )
}

export default Main