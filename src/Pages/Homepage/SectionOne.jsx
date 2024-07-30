import React, { useEffect, useState } from 'react';

function SectionOne() {
  const [os, setOs] = useState('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;

    // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setOs('iOS');
    }
    // Detect Android
    else if (/android/i.test(userAgent)) {
      setOs('Android');
    }
    // Default case if neither iOS nor Android is detected
    else {
      setOs('Other');
    }
  }, []);

  return (
    <div className='flex flex-col items-center justify-center pt-[95px] lg:relative bg-[#FDB813] noise'>
      <h1 className='text-[40px] lg:text-[70px] font-black w-[341px] lg:w-[802px] text-center'>Your All-in-One Banking App</h1>
      {os === 'iOS' && <img src="/assets/barcodeOne.png" alt="iOS Barcode" className='lg:absolute lg:right-[126px] mt-[50px] lg:mt-[0px]' />}
      {os === 'Android' && <img src="/assets/barcodeTwo.png" alt="Android Barcode" className='lg:absolute lg:right-[126px] mt-[50px] lg:mt-[0px]' />}
      <img src="/assets/mobile1.png" alt="Mobile" className='mt-[79px]' />
    </div>
  );
}

export default SectionOne;
