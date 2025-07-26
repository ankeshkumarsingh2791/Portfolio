import React from 'react';
import { Carousel } from 'antd';
import Container from './Container';
import TestCard from './TestCard';

const Testinomial = () => {
  return (
    <Container bgColor={'#364d79'}>
      <div className='bg-[#364d79] mt-8 px-12 py-5 text-center'>
        <h3 className='text-4xl sm:text-5xl font-bold text-white mb-4'>What Clients Say</h3>
        <div className='flex justify-center mb-6'>
          <div className='bg-blue-500 w-5 h-5 rounded-full'></div>
          <div className='h-[2px] mt-2 w-[15%] bg-blue-500'></div>
        </div>
        <p className='text-gray-200 max-w-2xl mx-auto text-sm sm:text-md'>
          Hear what our satisfied clients have to say about working together. Their feedback speaks to the passion and precision we put into every project.
        </p>
      </div>

      <Carousel autoplay dots={true} className='bg-[#364d79] px-4 pb-12'>
        <div>
          <TestCard />
        </div>
        <div>
          <TestCard />
        </div>
      </Carousel>
    </Container>
  );
};

export default Testinomial;