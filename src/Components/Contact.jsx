// Contact.jsx (modernized with animations & clean UX)
import React from 'react';
import Container from './Container';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [state, handleSubmit] = useForm('mjkvbeeo');

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4cddccc4-ca22-45eb-98f4-dfe859cd96a6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  
  if (state.succeeded) {
    return (
      <Container bgColor="#0B1C2E">
        <div className="text-center text-white py-24">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Thanks for reaching out!</h2>
          <p className="text-sm">I'll get back to you as soon as possible.</p>
        </div>
      </Container>
    );
  }

 

  return (
    <Container bgColor="#0B1C2E">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-12 sm:px-6 lg:px-8 text-white"
      >
        <h3 className="text-5xl font-bold mb-3 text-white">CONTACT ME</h3>
        <div className="flex mb-8">
          <div className="bg-blue-500 w-5 h-5 rounded-full"></div>
          <div className="h-[2px] mt-2 ml-2 w-[15%] bg-blue-500"></div>
        </div>

        <section className="bg-blue-300 rounded-xl">
          <div className="max-w-screen-xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2 text-gray-900 font-medium">
                <p className="text-lg leading-relaxed">
                  Whether you have a question or just want to say hi, I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="mt-8 space-y-2">
                  <a href="tel:+916205725286" className="text-2xl font-bold text-pink-700 block">
                    +91 620 572 5286
                  </a>
                  <p className="text-sm sm:text-lg not-italic">
                    Ankesh Kumar Singh<br />
                    ankeshkumarsingh2791@gmail.com
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg lg:col-span-3">
                <form
                  action="https://formspree.io/f/mjkvbeeo"
                  method="POST"
                  onSubmit={onSubmit}
                  className="space-y-6"
                >
                  <div>
                    <input
                      className="w-full rounded-lg border outline-none border-gray-300 p-3 text-sm focus:ring focus:ring-blue-200"
                      placeholder="Your Name"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        className="w-full rounded-lg border outline-none  border-gray-300 p-3 text-sm focus:ring focus:ring-blue-200"
                        placeholder="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div>
                      <input
                        className="w-full rounded-lg border outline-none border-gray-300 p-3 text-sm focus:ring focus:ring-blue-200"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        name="phone"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      className="w-full rounded-lg border text-black outline-none border-gray-300 p-3 text-sm focus:ring focus:ring-blue-200"
                      placeholder="Your Message"
                      rows="6"
                      id="message"
                      name="message"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <div>
                    <button
                      disabled={state.submitting}
                      type="submit"
                      className="inline-block w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Container>
  );
};

export default Contact;
