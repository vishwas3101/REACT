import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NavbarContext } from '../../Context/NavContext'


const Fullscreennav = () => {
    
    const fullNavLinksref = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    const fullScreenRef = useRef(null)
    console.log(navOpen)
    
    function gsapAnimation(){
      const tl=gsap.timeline()
      tl.to('.fullScreennav',{
          display:'block'
        })
      tl.to('.stairing',{
        delay:0,
        height:'100%',
        stagger:{
          amount:-0.3
        }
      })
      tl.to('.link',{
        opacity:1,
        rotate:0,
        stagger:{
          amount:0.2
        }
      })
      tl.to('.navlink',{
        opacity:1
      })
    }
    function gsapAnimationReverse(){
      const tl=gsap.timeline()
      tl.to('.link',{
        opacity:0,
        rotate:90,
        stagger:{
          amount:0.1
        }
      })
      tl.to('.stairing',{
        height:0,
        stagger:{
          amount:-0.1
        }
      })
      
      tl.to('.navlink',{
        opacity:0
      })
      tl.to('.fullscreennav',{
        display:'none'
      })
    }

    useGSAP(function(){
      if(navOpen){
        gsap.to('.fullscreennav',{
          display:'block'
        })
        gsapAnimation()
      }
      else{
        
        gsapAnimationReverse()
      }
    },[navOpen])
  return (
    <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen z-10 w-screen absolute bg-black'>
       <div className='h-screen w-full fixed'>
        <div className='h-full w-full flex '>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>
       </div>
       <div ref={fullNavLinksref} className='relative '>
        <div className='navlink flex w-full justify-between lg:p-4 p-3  items-start '>
        <div className=''>
            <div className='w-36 bg-[#e8ff70]'>
            <svg className='w-full'xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103 44">
            <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
        </div>
        </div>
        <div onClick={()=>{
          setNavOpen(false)
        }} className='lg:h-30 lg:w-30 h-16 w-16 relative cursor-pointer'>
            <div className='lg:h-42 h-22 w-1 absolute origin-top -rotate-45 bg-[#e8ff70]'></div>
            <div className='lg:h-42 h-22 w-1 absolute right-0 origin-top rotate-45 bg-[#e8ff70]'></div>
            
        </div>
       </div> 
        <div className='py-24 lg:mt-0 mt-30'>
            <div className='link border-t-1 relative origin-top border-white '>
                <h1 className='font-[font300] text-center leading-[.8] pt-5 text-[8vw] uppercase pb-2'>Projects</h1>
                <div className='movelink absolute text-black flex top-0 bg-[#e8ff70]'>
                  <div className='moveX flex  items-center' >
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>NOT YET</h2>
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>NOT YET</h2>  
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />               
                  </div>
                  <div className='moveX flex  items-center' >
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>NOT YET</h2>
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>NOT YET</h2>  
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />               
                  </div>
                </div>
            </div>
            <div className='link border-t-1 relative origin-top border-white '>
                <h1 className='font-[font300] text-center leading-[.8] pt-5 text-[8vw] uppercase pb-2'>Agence</h1>
                <div className='movelink absolute text-black flex top-0 bg-[#e8ff70]'>
                  <div className='moveX flex  items-center' >
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>Wanna know</h2>
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>About us </h2>  
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />               
                  </div>
                  <div className='moveX flex  items-center' >
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>Wanna know</h2>
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30shrink-0 object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>About us</h2>  
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />               
                  </div>
                </div>
            </div>
            <div className='link border-t-1 relative origin-top border-white '>
                <h1 className='font-[font300] text-center leading-[.8] pt-5 text-[8vw] uppercase pb-2'>Contact</h1>
                <div className='movelink absolute text-black flex top-0 bg-[#e8ff70]'>
                  <div className='moveX flex  items-center' >
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>Have</h2>
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>IN</h2>  
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />               
                  </div>
                  <div className='moveX flex  items-center' >
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>through</h2>
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>Id </h2>  
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />               
                  </div>
                </div>
            </div>
            <div className='link border-y-1 relative origin-top border-white '>
                <h1 className='font-[font300] text-center leading-[.8] pt-5 text-[8vw] uppercase pb-2'>Blogue</h1>
                <div className='movelink absolute text-black flex top-0 bg-[#e8ff70]'>
                  <div className='moveX flex  items-center' >
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>NOT YET</h2>
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                   <h2 className='whitespace-nowrap font-[font300] text-center leading-[.8] pt-4 text-[8vw] uppercase'>NOT YET</h2>  
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />               
                  </div>
                  <div className='moveX flex  items-center' >
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>NOT YET</h2>
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                   <h2 className='whitespace-nowrap font-[font300] text-center lg:leading-[.8] lg:pt-4 text-[8vw] uppercase'>NOT YET</h2>  
                   <img className='lg:h-36 h-13.5 rounded-full lg:pt-4 lg:w-80 w-30 shrink-0 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />               
                  
                  </div>
                </div>
            </div>
        </div>  
       </div>
    </div>
  )
}

export default Fullscreennav  