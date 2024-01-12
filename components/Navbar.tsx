
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [active,setActive]=useState('/')
return (
    <div className='flex items-center justify-between w-full p-4 font-semibold text-2xl text-gray-600'>
        <Link href='/'><span onClick={()=>{setActive('/')}} className={active==='/'?'text-green-400 border-b-4 border-green-400':'text-gray-700'}>About</span></Link>
        <Link href='/projects'> <span onClick={() => { setActive('/projects') }} className={active==='/projects' ? 'text-green-400 border-b-4 border-green-400' : 'text-gray-700'}>Projects</span></Link>
        <Link href='/resume'><span onClick={() => { setActive('/resume') }} className={active==='/resume' ? 'text-green-400 border-b-4 border-green-400 ' : 'text-gray-700'}>Resume</span></Link>
        
</div>
)
}

export default Navbar