import React from 'react'

function DetailsCart({title , uni ,score , des}) {
  return (
    <div className=' w-full h-1/3 group flex mb-5'>
        <div className='w-10 h-[6px] bg-black bg-opacity-30 lg:mt-16 mt-5 relative '>
            <span className='absoulate cursor-pointer w-5 h-5 rounded-full -top-2 -left-3 bg-black  bg-opacity-60 '></span>
            <span className='w-5 h-5 absolute -top-3 -left-2 rounded-full  inline-flex group-hover:bg-[#ff5823] duration-300  '></span>
        </div>
        <div className='cursor-pointer w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center shadow-2xl gap-10'>
           <div className='gap-5 flex flex-col'> 
           <div className='flex justify-between lgl:items-center flex-col lgl-flex-row'>
                <div>
                    <h2 className='text-xl md:text-2xl group-hover:text-white duration-300 pt-5'>{title}</h2>
                    <p className='text-sm mt-2  text-gray-400 group-hover:text-gray-300 duration-300 '>{uni}</p>
                </div>
                <div className='w-20 px-4 py-2 flex mt-2 justify-center items-center h-10 rounded-lg bg-opacity-20 bg-black shadow-2xl text-[#bf502a]'>{score}</div>
           </div>
            <p className='text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 '>{des}</p>
            </div>
        </div>
    </div>
  )
}

export default DetailsCart