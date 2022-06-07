import { useEffect, useState } from 'react'
import logo from '../assets/ALGOINU 200.png'

export default function Navbar() {
    const [navGlass, SetNavGlass]=useState()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                SetNavGlass(true)
            }else{
                SetNavGlass(false)
            }
        })
    },[])
    return(
        <div className={`mx-auto w-full z-10 justify-between items-center fixed top-0 left-0 text-white flex py-5 px-5 md:px-10 mx-auto ${navGlass && 'glass'}`}>
            <a className='flex items-center' href='/'>
                <img src={logo} width='60px'/>
                <h1 className='ml-2 text-2xl md:text-3xl font-bold'>ALGOINU</h1>
            </a>
            <div className='lg:flex gap-10 hidden '>
                <a href='#about'>About</a>
                <a href='#roadmap'>Roadmap</a>
                <a href='#tokenomics'>Tokenomics</a>
            </div>
            <button onClick={()=>document.getElementById('mobile').classList.toggle('hidden')} className='text-2xl lg:hidden'><span className='fa fa-bars fa-lg'></span></button>
            <div className='lg:flex hidden gap-3'>
                <a href='/' className='bg-slate-700 px-10 py-3 mt-3 text-center rounded-full'>Stake</a>
                <a href={`https://app.tinyman.org/#/swap?asset_in=0&asset_out=515424632`} className='btn bg-slate-700 px-10 py-3 mt-3 text-center rounded-full'>Swap Token</a>
            </div>
            <div id='mobile' className='mobile-nav hidden lg:hidden fixed top-0 right-0 pt-10 w-[80%] h-[100%] px-5 flex flex-col'>
                <div className='flex justify-end'>
                    <button onClick={()=>document.getElementById('mobile').classList.toggle('hidden')} className='text-2xl'><span className='fa fa-times fa-lg'></span></button>
                </div>
                <div className=' flex pt-10 flex-col'>
                    <a href='#about'>About</a>
                    <a href='#roadmap'>Roadmap</a>
                    <a href='#tokenomics'>Tokenomics</a>
                    <a href='/' className='btn bg-slate-700 px-10 py-3 mt-3 text-center rounded-full'>Stake</a>
                    <a href={`https://app.tinyman.org/#/swap?asset_in=0&asset_out=515424632`} className='btn bg-slate-700 px-10 py-3 mt-3 text-center rounded-full'>Swap Token</a>
                </div>
            </div>
        </div>
    
    
    )
}