import React from 'react'
import NavBar from '../Components/NavBar'
import Contact from '../Components/Contact'
import Container from '../Components/Container'
import Footer from '../Components/Footer'

const ContactPage = () => {
  return (
    <>
    <NavBar />
     <Container bgColor={"#0B1C2E"}>
        <div className='pt-20 w-full '>

           <Contact />
        </div>
     </Container>
     <Footer />
    </>
  )
}

export default ContactPage
