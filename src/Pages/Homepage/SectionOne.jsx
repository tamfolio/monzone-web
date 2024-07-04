import React from 'react'

function SectionOne() {
  return (
    <div className='flex flex-col items-center justify-center pt-[95px] relative bg-[#FDB813]'>
        <h1 className='text-[70px] font-black w-[802px] text-center'>Your All-in-One Banking App</h1>
        <img src="/assets/mobile1.png" alt="" className='mt-[79px]'/>
        <img src="/assets/barcode.png" alt="" className='absolute right-[126px] '/>
    </div>
  )
}

export default SectionOne