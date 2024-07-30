import React from 'react'

function SectionFive() {
  return (
    <div className='bg-[#E9E9E9] py-[100px] px-[24px] lg:px-[130px] flex items-center flex-col justify-center'>
        <h1 className='text-[30px] lg:text-[60px] font-bold w-[223px] lg:w-[468px] text-center'>What our customers say</h1>
        <div className='flex items-center justify-start lg:justify-center gap-[50px] mt-[80px] w-[100%] overflow-x-scroll lg:overflow-hidden'>
            <div className='bg-white min-w-[360px] lg:w-[360px] h-[430px] rounded-[20px] px-[22px] py-[30px]'>
                <img src="/assets/customer1.png" alt="" />
                <span className='text-[80px] text-[#FDB813] font-bold'>“</span>
                <h1 className='text-[24px] font-bold mt-[-40px] h-[125px]'>Monzone exceeded my expectations and quickly became my favorite banking app.</h1>
                <div className='mt-[80px]'>
                    <h1 className='text-[14px] font-medium'>Tomisin Dabiri</h1>
                    <h4 className='text-[14px] font-normal text-[#C9C9C9]'>Evergreen Skin</h4>
                </div>
            </div>
            <div className='bg-white min-w-[360px] lg:w-[360px] h-[430px] rounded-[20px] px-[22px] py-[30px]'>
                <img src="/assets/customer2.png" alt="" />
                <span className='text-[80px] text-[#FDB813] font-bold'>“</span>
                <h1 className='text-[24px] font-bold mt-[-40px] h-[125px]'>I'm all about quick transactions, and Monzone delivers</h1>
                <div className='mt-[80px]'>
                    <h1 className='text-[14px] font-medium'>Marvis Anthony</h1>
                    <h4 className='text-[14px] font-normal text-[#C9C9C9]'>Ballons and Confetti</h4>
                </div>
            </div>
            <div className='bg-white min-w-[360px] lg:w-[360px] h-[430px] rounded-[20px] px-[22px] py-[30px]'>
                <img src="/assets/customer3.png" alt="" />
                <span className='text-[80px] text-[#FDB813] font-bold'>“</span>
                <h1 className='text-[24px] font-bold mt-[-40px] h-[125px]'>I've been reaching my savings goals faster.</h1>
                <div className='mt-[80px]'>
                    <h1 className='text-[14px] font-medium'>Abayomi Yusuf</h1>
                    <h4 className='text-[14px] font-normal text-[#C9C9C9]'>Realtor</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFive