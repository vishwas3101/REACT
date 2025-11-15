import React from 'react'
import { Link } from 'react-router-dom'

const Homebottomtext = () => {
  return (
    <div className='font-[font500] flex items-center justify-center gap-2 '>
      <p className='absolute text-[text300] lg:w-80 lg:right-10 right-0 bottom-60 lg:text-2xl text-xs w-50 leading-relaxed '> &nbsp;&nbsp;&nbsp;"Great things take time. Keep learning, keep growing, and trust that your hard work today will become your achievements tomorrow."</p>
      <div className='lg:border-3 border-2 hover:border-amber-500 hover:text-amber-700 lg:height-44 flex items-center lg:px-10  px-8 pt-2 pb-1 border-white rounded-full uppercase'>
      <Link className=' text-[4vw] lg:mt-6' to='/Projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-amber-500 hover:text-amber-700  lg:height-44 flex items-center lg:px-10 px-8 pt-2  pb-1 border-white rounded-full uppercase'>
      <Link className=' text-[4vw] lg:mt-6' to='/Agence'>Agence</Link>
      </div>
    </div>
  )
}

export default Homebottomtext