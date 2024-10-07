import React from 'react'
import { Carousel } from 'antd';
import Workcard from './Workcard';
import TestCard from './TestCard';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Testinomial = () => {

const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
   
  return (
    <>
     <div className='bg-[#364d79] px-12 py-5'>
     <h3 className='text-5xl font-bold text-white mb-2  '>Happy Clients</h3>
        <div className='flex'>
            <div className='bg-blue-500 w-5 h-5 rounded-full'></div> <div className='h-[2px] align-middle mt-2 w-[15%] bg-blue-500'></div>
        </div>
     </div>
    <Carousel className='bg-[#364d79]  p-12'  autoplay>
        
    <div className=' w-full  flex  gap-8'>
        <TestCard />
       
 
    </div>
    <div>
      
   <TestCard />
    </div>
    <div>
     <TestCard />
    </div>
    <div>
     <TestCard />
    </div>
  </Carousel>



    </>
  )
}

export default Testinomial
