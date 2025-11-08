import React from 'react'
import Video from '../Components/Home/video'
import Homeherotext from '../Components/Home/Homeherotext'
import Homebottomtext from '../Components/Home/Homebottomtext'



const Home = () => {
  return(
    <div>
      <div className='h-screen w-screen fixed '>
        <Video/>
                 
      </div>
      <div className='h-screen w-screen relative pb-4 overflow-hidden flex flex-col justify-between'>
        <Homeherotext/>
        <Homebottomtext/>
        
      </div>
    </div>
  )
}

export default Home