import React from 'react'
import Video from './Video.jsx'
// import Video from "../Components/Home/Video.jsx";

const Homeherotext = () => {
  return (
    <div className='font-[font500] mt-72 lg:mt-0 text-center pt-5'>
      <div className='lg:text-[9.5vw] text-[11vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>The spark for</div>
      <div className='lg:text-[9.5vw] text-[11vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>all <div className='h-[7vw] rounded-full overflow-hidden'><Video/> </div> things </div>
      <div className='lg:text-[9.5vw] text-[11vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>creative</div>
     

    </div>
    
    
  )
}

export default Homeherotext