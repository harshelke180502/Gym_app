import React from 'react'

export default function Button(props) {
    const {text,func}=props
  return (
    
    <button onClick={func} className='px-8 max-auto py-4 rounded-medium border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
        <p className='text-center'>{text}</p>
        </button>
  )
}
