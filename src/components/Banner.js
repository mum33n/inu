import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/ALGOINU 200.png'

function Banner() {
  return (
      <div className='banner static'>
          <Navbar/>
          <div className='text-white flex-wrap items-center justify-between flex px-5 md:px-20 pt-[200px] pb-[100px]'>
              <div className='w-full md:w-[60%] text-2xl'>
                  Algoinu (inu) is a digital asset that backs a community concentrated on onboarding algorand users, educating market participants, making personal connections, and helping each other navigate life, built on the fastest Blockchain, algoinu is the most efficient, and most eco-friendly dog coin, the aim is able the represent the Blockchain to be an ambassador of Algorand.
                  <div> 
                  <a className='btn mt-5 py-2 inline-block p-5 text-lg md:text-xl white' href='/'>Download Whitepaper</a>
                  </div>

                  <div> 
                  <a className='btn mt-5 py-2 inline-block p-5 text-lg md:text-xl white' href='https://app.nf.domains/name/algoinutoken.algo?view=segments'>Buy a domain</a>
                  </div>
                  
                </div>
                
                <div className='md:w-[30%] mx-auto mt-5 w-[80%]'>
                    <img className='w-full block' src={logo}/>
                </div>
          </div>
      </div>
      
  )
}

export default Banner