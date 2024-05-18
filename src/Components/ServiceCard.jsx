import React from 'react'

const ServiceCard = ({ type, para,image}) => {
  return (
    <div className="w-full bg-[#f9f8f9] border-[#AC93A7] rounded-lg border-2">
     

      <div className="px-3 pb-4 ">
        <div className="w-full h-28 mt-2 flex justify-center py-4   items-center gap-2">
         <img className="w-[70px]   " src={image} alt="" />
         
        </div>
        
      <div className='w-full flex flex-col items-center justify-center'>
      <h3 className=" sm:text-lg font-bold text-sm  " >{type}</h3>

    <p className="sm:text-sm text-xs px-2  mt-5 ">{para}</p>
      </div>
      </div>
    
    </div>
  )
}

export default ServiceCard
