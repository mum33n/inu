import React from 'react'
import Feature from './Feature'
import earning from '../assets/earning.png'
export default function About() {
  return (
    <div id='about' className='py-20 w-[80%] container mx-auto text-white'>
        <h1 className='text-center font-bold text-3xl md:text-5xl mb-3'>ABOUT US</h1>
        <p className='text-xl md:text-2xl'>
        Algoinu was founded on January 1 2022, With the rise of memecoins in 2021 and rapid growth of algorand blockchain, algoinu($Inu) was born with the inspiration of the massive growth of memecoin such as dogecoin, shiba inu and samoyedcoin.
        </p>
        <div className='mt-10 flex-wrap flex gap-3 justify-center md:justify-between'>
            <div className='md:w-[30%] w-[90%]'>
                <Feature logo={earning} text='Staking Platform'></Feature>
            </div>
            <div className='md:w-[30%] w-[90%]'>
                <Feature logo={earning} text='Algoinu Nft'></Feature>
            </div>
            <div className='md:w-[30%] w-[90%]'>
                <Feature logo={earning} text='Tools Development'></Feature>
            </div>
        </div>
    </div>
  )
}
