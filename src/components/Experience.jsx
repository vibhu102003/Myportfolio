import React from 'react';
 import c from "../assets/c.png"
 import css from "../assets/css.png"
 import git from "../assets/git.png"
 import html from "../assets/html.png"
 import  java from "../assets/java.png"
 import nodejs from "../assets/nodejs.png"
 import  reactImage from "../assets/react.png"
 import tailwind from "../assets/tailwind.png"
 import python from "../assets/python.png"
 
const Experience = () => {

const techs=[
    {
        id:1,
        src:html,
        title:'HTML',
        style:'shadow-orange-500'

    },
    {
        id:2,
        src:c,
        title:'C',
        style:'shadow-blue-500'

    },
    {
        id:3,
        src:css,
        title:'CSS',
        style:'shadow-blue-500'

    },
    {
        id:4,
        src:git,
        title:'GIT',
        style:'shadow-orange-500'

    },
    {
        id:5,
        src:java,
        title:'JAVA',
        style:'shadow-blue-500'

    },
    {
        id:6,
        src:nodejs,
        title:'Node.JS',
        style:'shadow-green-400'

    },
    {
        id:7,
        src:reactImage,
        title:'React.JS',
        style:'shadow-blue-600'

    },
    {
        id:8,
        src:tailwind,
        title:'TAILWIND',
        style:'shadow-sky-400'

    },
    {
        id:9,
        src:python,
        title:'PYTHON',
        style:'shadow-yellow-500'

    },
];

  return (
    <div name='experience' className='bg-gradient-to-b  from-black to-gray-800 w-full '>
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
             <div>
                 <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>
                These are the technologies and languages I've worked with
                   </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

{
    techs.map(({id,src,title,style})=>(

<div  key={id}className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg h-28 ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-0'>{title}</p>
                </div>

    ))
}



                
            </div>

            </div> 
    </div>
  )
}

export default Experience