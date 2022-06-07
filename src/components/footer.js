import React from 'react'

function Footer() {
  return (
    <div className='foot p-10 mt-10 w-[100%] bg-slate-800 '>
        <div className=''>
            <h1 className='text-center text-white mb-5 text-3xl font-bold'>Join Our community</h1>
            <div className='flex text-white text-3xl gap-10 flex-col justify-center'>
                <div className='flex gap-4 md:gap-10 md:w-[60%] w-[95%] mx-auto items-center'>
                    <a href='/' className='border-2 p-2 rounded-full'><span className='fa-brands fa-discord'></span></a>
                    <div className='text-lg'> Join our Discord and become a part of an amazing community. You will also find the ALGOINU team there, ready to support you.
                    </div>
                </div>
                <div className='flex gap-4 md:w-[60%] w-[95%] md:gap-10 mx-auto items-center'>
                    <a href='/' className='border-2 p-2 px-3 rounded-full' ><span className='fa-brands fa-twitter'></span></a>
                    <div className='text-lg'> 
                    Follow us on Twitter for updates on ALGOINU space in general.
                    </div>
                </div>
                {/* <a href='/'><span className='fa-brands fa-telegram'></span></a> */}
            </div>
        </div>
    <div className='text-center text-white mt-5'>&copy; ALGOINU 2022, all right reserved</div>
    </div>
  )
}

export default Footer