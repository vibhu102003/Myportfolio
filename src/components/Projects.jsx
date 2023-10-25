import React from 'react'
import blogphoto from '../assets/portfolio/blogphoto.webp'
import mariophoto from '../assets/portfolio/mariophoto.jpg'


const Projects = () => {

    const projects=[
        {
            id:1,
            src:blogphoto,
            url:"https://github.com/vibhu102003/Blog"
        },
        {
            id:2,
            src:mariophoto,
            url:"https://github.com/vibhu102003/MarioClub"
        }
    ]
    const openUrlInNewTab=(url)=>{
        window.open(url,'_blank');
    };


  return (
    <div name="project" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Projects</p>
                <p className='py-6 '>Check out some of my work right here</p>
                <ol>
                    <li>I.BlogWebsite</li>
                    <li>II.MarioClub</li>
                </ol>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-40 px-12 sm:px-0 '>
            {
                projects.map(({id,src,url})=>(

<div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="pjiimage" className='rounded-md duration-200 hover:scale-110' />
                    <div className='flex items-center justify-center'>  
                      <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={()=>openUrlInNewTab(url)}>Code</button>  
                    </div>
                </div>        
                ))
            }
                
            </div>
        </div>


    </div>
  )
}

export default Projects