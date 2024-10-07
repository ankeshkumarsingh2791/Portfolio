
import React from 'react'

import Workcard from './Workcard'
import Container from './Container'
import NavBar from './NavBar'


const Project = () => {
  return (
    <>
    <NavBar></NavBar>
     <Container bgColor={"#0B1C2E"}>

      <div className='w-full mt-10 sm:p-10 py-16 mb-10   text-white '>
      <div className=' sm:px-36 sm:w-[70%] text-white'>
      <h3 className='text-3xl'> Recent Project Contribution </h3>
       <p>I Offer Web Development, Responsive Design, Deployment & Hosting, Custom Web Solutions,  Bug Fixing & Optimization, E-commerce Solutions</p>
      </div>
      <div className='sm:px-36 mt-16 grid gap-10 sm:grid-cols-3'>
        
   
      <a href='https://d2dtools.in/'>

        <Workcard 
        text={
          "Transform your files effortlessly with our intuitive file converter website. Supporting various formats, we ensure seamless conversions with just a few clicks. Whether it documents, images, or audio, streamline your workflow and enhance productivity in one easy-to-use platform."
        }
        image={"Screenshot (157).png"}
        h1={"#Frontend Development"} heading={"d2d-tool file type converter"} h2={"#file-converter"} h3={"#d2d-tool"} />
        </a> 
       <Workcard
       text={"Elevate educational management with our comprehensive school ERP website. Designed for efficiency, it streamlines administrative tasks, enhances communication, and fosters collaboration among students, parents, and staff."}
       image={"image-1.jpg"} h1={"#MERN Project"} h2={"#School-ERP "} h3={"Siksha-setu"} heading={"Siksha Setu "} />
       <Workcard  
        image={"Screenshot (162).png"}
        heading={"Music Web  Application "}
        h1={"#Music-App"} h2={"#Frontend"} h3={"#Responsive Design"}
         text={"Discover a vibrant music experience with our dynamic website, featuring curated playlists, artist profiles, and the latest industry news. Whether you're a casual listener or a passionate musician, enjoy seamless navigation and a rich audio experience tailored to your tastes."}
       />
   
   
       </div>
       </div>
     
     </Container>
    
    </>
  )
}

export default Project
