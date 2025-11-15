
import React, { useEffect } from 'react'
import ProjectCard from '../Components/Project/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {

  const Projects=[{image1:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
    image2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'},
    {image1:'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
    image2:'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e'},
    {image1:'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
    image2:'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000'}]

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function(){
      gsap.from('.hero',{
        height:'100px',
        stagger:{
          amount:0.4
        },
        scrollTrigger:{
          trigger:'.lol',
          start:'top 100%', 
          end:'top -150%',
          scrub:true
        } 
      })
    })
  return (
    <div className='lg:p-4 p-2 mb-[100vh] '>
      <div className='pt-[45vh] '>
        <h2 className='font-[font500] uppercase lg:text-[9vw] text-6xl text-black'>Projects</h2>
      </div>
      <div className='-lg:mt-20 lol '>
        {Projects.map(function(elem,idx){
          return <div key={idx} className='hero w-full lg:h-[500px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 '>
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>
        })}  
      </div>
    </div>
  )
}

export default Projects
