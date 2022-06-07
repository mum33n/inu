import React from 'react'

function Feature({logo, text} ) {
  return (
    <div className='w-full bg-blue-900 rounded-md flex flex-col gap-2 p-5'>
        <div className='p-5 mx-auto bg-white rounded-full'>
            <img className='block mx-auto' width='30px' src={logo}/>
        </div>
        <div className='text-center'>
            <h1 className='font-bold text-xl'>{text}</h1>
        </div>
    </div>
  )
}

export default Feature