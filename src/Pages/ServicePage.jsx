import React from 'react'
import Container from '../Components/Container'
import ServiceCard from '../Components/ServiceCard'

const ServicePage = () => {
  return (
   <Container bgColor={"#0B1C2E"}>
     <div className='w-full sm:p-10 py-10  sm:py-0'>
      <div className=' sm:px-36 sm:w-[70%] w-full text-white'>
      <h3 className='text-3xl'>SERVICES OFFERS</h3>
       <p>I Offer Web Development, Responsive Design, Deployment & Hosting, Custom Web Solutions,  Bug Fixing & Optimization, E-commerce Solutions</p>
      </div>
      <div className='sm:px-36 w-full mt-8 grid sm:gap-10 grid-cols-1 gap-4 sm:grid-cols-3'>
          <ServiceCard  image={"React.svg"} type={"Frontend Web Development"} para={"Expertise in building robust, scalable, and feature-rich web applications using Html, JavaScript, React, and Tailwindcss."} />

          <ServiceCard  image={"Web.svg"} type={"Responsive Design"} para={"Crafting visually appealing and user-friendly interfaces that seamlessly adapt to various devices and screen sizes."} />
    
          <ServiceCard  image={"All.svg"} type={"Custom Web Solutions"} para={"Tailored solutions to meet your specific business needs, ensuring a unique and personalized online presence."} />
    
         
    
      </div>

     </div>
   </Container>
  )
}

export default ServicePage
