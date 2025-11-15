import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
          <div className='h-full group lg:w-1/2 w-full relative rounded-none transition-all hover:rounded-[70px] overflow-hidden'>
            <img className= 'h-full w-full object-cover' src={props.image1} alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10 '>
              <h2 className='uppercase text-5xl font-[font500] border-2 pt-2 px-4 text-white border-amber-50 rounded-full'>Your Project</h2>
            </div>          
          </div>
          <div className='h-full group lg:w-1/2 w-full relative rounded-none transition-all hover:rounded-[70px] overflow-hidden'>
            <img className= 'h-full w-full object-cover' src={props.image2}  alt="" />
            <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10 '>
              <h2 className='uppercase text-5xl font-[font500] border-2 pt-2 px-4 text-white border-amber-50 rounded-full'>Your Project</h2>
            </div>          
          </div>
    </>
  )
}

export default ProjectCard