import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
  const imageDivRef= useRef(null)
  const imageRef= useRef(null)

  const imageArray=[
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/MyleneS_480x640.jpg?w=480&h=640&fit=crop&s=55944189ac2aa83e83e2ef8125e4809e',
    'https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac'
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: 'top 28%',
        end:'top -70%',
        pin:true,
        pinReparent:true,
        pinSpacing:true,
        pinType:'transform',
        scrub :1,
        anticipatePin:1,
        invalidateOnRefresh:true,

        onUpdate:(elem)=>{
          let imageIndex;
          if (elem.progress<1){
            imageIndex=Math.floor(elem.progress * imageArray.length)
          }else{
            imageIndex=imageArray.length-1;
          }
          imageRef.current.src=imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div>
      <div className='Section1'>
      <div ref={imageDivRef} className='absolute overflow-hidden  h-[20vw] w-[13vw] rounded-3xl top-96 left-[30vw]'>
        <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className='font-[font500] relative '> 
      <div className=' mt-[55vh]'>
        <h1 className='text-[12vw] text-center uppercase leading-[15vw] text-black '>【ＮＥＶＥＲ】<br/>
【ＳＥＴＴＬＥ】</h1>
      </div>
      <div className='pl-[40%] mt-20'>
        <p className='text-6xl  text-black '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From hanging out in the canteen to late-night study sessions, their bond grows stronger with every moment. They support each other during exams, celebrate small successes, and share endless jokes that become lifelong inside stories. Whether it’s playing sports, planning trips, or just sitting together discussing random topics, the circle becomes like a second family. These friendships create unforgettable experiences and stay cherished forever.</p>
      </div>
    </div>
      </div>
      <div className='Section2 h-screen'>

      </div>
    </div>
  )
}

export default Agence
