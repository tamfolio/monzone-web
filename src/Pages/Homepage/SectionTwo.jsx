import React from 'react'

function SectionTwo() {
  return (
    <div className='py-[50px] lg:py-[100px] pl-[24px] lg:pl-[122px] px-[24px] lg:px-[90px]'>
        <h1 className='text-[33px] lg:text-[60px] font-bold w-[346px] lg:w-[628px]'>Banking, Loans & Savings. <span className='italic text-[#FDB813]'>Simplified</span>.</h1>
        <div className='mt-[100px] flex flex-col lg:flex-row items-center justify-center gap-[100px] w-[100%]'>
            <div className='flex flex-col items-center justify-center w-[360px]'>
                <img src="/assets/mob1.png" alt=""  className='w-[309px] h-[460px]'/>
                <h1 className='text-[35px] font-bold my-[40px]'>Banking</h1>
                <div className='flex items-start h-[50px]'>
                    <p className='text-center text-[18px]'>Secure your finances, make and receive payments, and stay on top of your financial activities</p>
                </div>
                
            </div>
            <div className='flex flex-col items-center justify-center w-[360px]'>
                <img src="/assets/mob2.png" alt="" className='w-[309px] h-[460px]' />
                <h1 className='text-[35px] font-bold my-[40px]'>Loans</h1>
                <div className='flex items-start justify-start h-[50px]'>
                <p className='text-center text-[18px]'>Access the capital you need to grow your business</p>
                </div>
                
            </div>
            <div className='flex flex-col items-center justify-center w-[360px]'>
                <img src="/assets/mob3.png" alt="" className='w-[309px] h-[460px]' />
                <h1 className='text-[35px] font-bold my-[40px]'>Savings</h1>
                <div className='flex items-start justify-start h-[50px]'>
                <p className='text-center text-[18px]'>Reach your financial goals more quickly with our multiple savings options</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SectionTwo