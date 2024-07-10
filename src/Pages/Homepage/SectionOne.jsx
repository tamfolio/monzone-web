import React from 'react'

function SectionOne() {
  return (
    <div className='flex flex-col items-center justify-center pt-[95px] lg:relative bg-[#FDB813]'>
        <h1 className='text-[40px] lg:text-[70px] font-black w-[341px] lg:w-[802px] text-center'>Your All-in-One Banking App</h1>
        <img src="/assets/barcode.png" alt="" className='lg:absolute lg:right-[126px] mt-[50px] lg;mt-[0px]'/>
        <img src="/assets/mobile1.png" alt="" className='mt-[79px]'/>
        
    </div>
  )
}

export default SectionOne