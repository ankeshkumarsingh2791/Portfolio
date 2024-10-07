import React from 'react'
import Container from './Container'


const BioData = () => {
  return (
    <>
    <Container bgColor={"#0B1C2E"}>

     <div className='w-full text-slate-100 mt-16 py-5 sm:flex sm:mt-20  justify-center   sm:p-10 '>
        <div className='hidden sm:block sm:w-1/2'>
          <div className=' ml-8 w-3/4 border-l-8 border-blue-500 border-t-8 '>
          <img src='bio.jpg' className='object-cover ' />
          </div>
        </div>
        <div className=' sm:w-1/2  flex flex-col '>
        <h3 className='text-5xl font-bold text-white '>MY BIODATA</h3>
        <div className='flex'>
            <div className='bg-blue-500 w-5 h-5 rounded-full'></div> <div className='h-[2px] align-middle mt-2 w-1/2 bg-blue-500'></div>
        </div>
        <p className='mt-5'>
        I am a 4th-year B.Tech Computer Science student at Dev Bhoomi Uttarakhand University, Dehradun. A proficient MERN Stack developer, passionate about creating innovative web solutions. Eager to learn and contribute to the tech industry. Dedicated, motivated, and always seeking new challenges to grow professionally.
        </p>
       <ul className='space-y-8 mt-10'>
        <li>
        <h3 className='my-3'>  HTML  </h3>
        <div>
    <span id="ProgressLabel" className="sr-only">Loading</span>
  
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow="50"
      className="block rounded-full bg-gray-200"
    >
      <span className="block h-4 rounded-full w-[80%] bg-blue-500 text-center text-[10px]/4 " >
        <span className="font-bold text-white"> 80% </span>
      </span>
    </span>
  </div>
        </li>
        <li>
        <h3 className='my-3'>  CSS/ Tailwind  </h3>
        <div>
    <span id="ProgressLabel" className="sr-only">Loading</span>
  
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow="50"
      className="block rounded-full bg-gray-200"
    >
      <span className="block h-4 rounded-full w-[90%] bg-blue-500 text-center text-[10px]/4 " >
        <span className="font-bold text-white"> 90% </span>
      </span>
    </span>
  </div>
        </li>
        <li>
        <h3 className='my-3'>  JavaScript  </h3>
        <div>
    <span id="ProgressLabel" className="sr-only">Loading</span>
  
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow="50"
      className="block rounded-full bg-gray-200"
    >
      <span className="block h-4 rounded-full w-[76%] bg-blue-500 text-center text-[10px]/4 " >
        <span className="font-bold text-white"> 76% </span>
      </span>
    </span>
  </div>
        </li>
        <li>
        <h3 className='my-3'>  React  </h3>
        <div>
    <span id="ProgressLabel" className="sr-only">Loading</span>
  
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow="50"
      className="block rounded-full bg-gray-200"
    >
      <span className="block h-4 w-[90%] rounded-full bg-blue-500 text-center text-[10px]/4 " >
        <span className="font-bold text-white"> 90% </span>
      </span>
    </span>
  </div>
           
        </li>
        <li>
        <h3 className='my-3'>  Java  </h3>
        <div>
    <span id="ProgressLabel" className="sr-only">Loading</span>
  
    <span
      role="progressbar"
      aria-labelledby="ProgressLabel"
      aria-valuenow="50"
      className="block rounded-full bg-gray-200"
    >
      <span className="block h-4 rounded-full w-[80%] bg-blue-500 text-center text-[10px]/4 " >
        <span className="font-bold text-white"> 80% </span>
      </span>
    </span>
  </div>
        </li>
       </ul>


        </div>

     </div>
    </Container>
    </>
  )
}

export default BioData
