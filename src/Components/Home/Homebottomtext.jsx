import React from 'react'
import { Link } from 'react-router-dom'

const Homebottomtext = () => {
  return (
    <div className='font-[font500] flex items-center justify-center gap-2'>
      <div className='border-3 hover:border-amber-500 hover:text-amber-700 height-44 flex items-center px-10 border-white rounded-full uppercase'>
      <Link className=' text-[4vw] mt-6' to='/Projects'>Projects</Link>
      </div>
      <div className='border-3  hover:border-amber-500 hover:text-amber-700  height-44 flex items-center px-10 border-white rounded-full uppercase'>
      <Link className=' text-[4vw] mt-6' to='/Agence'>Agence</Link>
      </div>
    </div>
  )
}

export default Homebottomtext