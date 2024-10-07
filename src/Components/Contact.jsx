import React from 'react'
import Container from './Container'
import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
    const [state, handleSubmit] = useForm("mjkvbeeo");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <>
    <Container bgColor={"#0B1C2E"}>
    <h3 className='text-5xl mt-10 font-bold text-white '>CONTACT ME</h3>
        <div className='flex'>
            <div className='bg-blue-500 w-5 h-5 rounded-full'></div> <div className='h-[2px] align-middle mt-2 w-[15%] bg-blue-500'></div>
        </div>
    <section className="bg-blue-300 my-10 rounded-xl">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2  font-medium lg:py-12">
        <p className="max-w-xl text-lg">
          At the same time, the fact that we are wholly owned and totally independent from
          manufacturer and other group control gives you confidence that we will only recommend what
          is right for you.
        </p>

        <div className="mt-8">
          <a href="#" className="text-2xl font-bold text-pink-600"> 620 572 5286 </a>

          <address className="mt-2 text-sm sm:text-lg not-italic">Ankesh Kumar singh <br /> ankeshkumarsingh2791@gmail.com</address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form  action="https://formspree.io/f/mjkvbeeo"  method="POST" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
             
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border  p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
               <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

         
          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
            <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>

          <div className="mt-4">
            <button
             disabled={state.submitting}
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </Container>
    </>
  )
}

export default Contact
