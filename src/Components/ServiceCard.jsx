import React from 'react'
import { motion } from "framer-motion"

const ServiceCard = ({ type, para,image}) => {
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
    
    className="w-full text-yellow-50  border-[#AC93A7] rounded-lg border-2">
     

      <div className="px-3 pb-4 ">
        <motion.div 
        animate={{x:[-20,0, 20, 0]}}
        transition={{
          duration:5,
          delay:2
        }}
        className="w-full h-28 mt-2 flex justify-center py-4   items-center gap-2">
         <motion.img 
           animate={{
            scale:[1,1,1,1],
            rotate: [0,360,360,0],
            borderRadius:["10%","10%","50%","10%"]
          }}

          transition={{
            duration:5
            , ease: "easeInOut",
            repeat:Infinity,
            repeatDelay:1,
          }}
         className="w-[70px]   " src={image} alt="" />
         
        </motion.div>
        
      <motion.div 
      className='w-full sm:flex sm:flex-col items-center justify-center'>
      <h3 className=" sm:text-lg font-bold text-sm  " >{type}</h3>

    <p className="sm:text-sm text-xs px-2  mt-5 ">{para}</p>
      </motion.div>
      </div>
    
    </motion.div>
  )
}

export default ServiceCard
