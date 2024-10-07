import React from 'react'
import { motion } from 'framer-motion'

const Workcard = ({heading, text, h1,h2,h3, image}) => {
  return (
    <motion.div 
    whileTap={{
        scale:0.9
       }}
       whileHover={{
        scale:1.2,
        borderColor:"#45f45",
        backgroundColor:"rose-50"
        
       }}
       transition={{
        bounceDamping:20, borderRadius:2, bounceStiffness:600
       }}
    className=" w-full border rounded-lg overflow-hidden shadow-lg">
        <div className=' w-full rounded-xl'>

         <img className=" round w-[30] p-2 " src={image} alt="" />
         

 
        </div>

  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{heading}</div>
    <p className=" ">
     {text} </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{h1}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{h2}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{h3}</span>
  </div>
</motion.div>

  )
}

export default Workcard
