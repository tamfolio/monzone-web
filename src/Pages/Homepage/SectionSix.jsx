import React from 'react'

function SectionSix() {
  return (
    <div className='bg-white py-[100px] flex items-center justify-center px-[152px] gap-[250px]'>
        <div className='w-[486px]'>
            <div className='flex items-center justify-start gap-[12px]'>
                <img src="/assets/lock.png" alt="" />
                <p className='text-[#535353]'>Safe & Secure</p>
            </div>
            <h1 className='text-[60px] font-bold w-[486px] mb-[40px]'>Your Security is Our Priority</h1>
            <h3 className='text-[#535353] font-medium text-[18px] mb-[34px]'>We're committed to keeping your data and finances safe. Our multi-layered security protocols and constant vigilance ensure that your information is protected from unauthorised access and threats.</h3>
            <div className='flex items-center justify-start gap-[16px]'>
                <p>Deposit Insured by</p>
                <img src="/assets/ndic.png" alt="" />
            </div>
        </div>
        <div>
            <img src="/assets/secure.png" alt="" />
        </div>
    </div>
  )
}

export default SectionSix