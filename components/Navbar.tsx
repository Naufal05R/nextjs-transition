import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between'>
      <hgroup className='w-1/3'>
        <h1 className='font-mono text-4xl font-bold'>MY APP</h1>
      </hgroup>
      <ul className='w-1/3 flex items-center justify-between rounded-full px-6 py-3 border border-slate-300 bg-slate-300/25 backdrop-blur'>
        <Link href={'/community'} className='hover:underline'>
          Community
        </Link>
        <Link href={'/feature'} className='hover:underline'>
          Feature
        </Link>
        <Link href={'/support'} className='hover:underline'>
          Support
        </Link>
        <Link href={'/contact'} className='hover:underline'>
          Contact
        </Link>
      </ul>
      <fieldset className='w-1/3 text-right'>
        <button className='px-4 py-2 bg-sky-500 rounded text-slate-100'>
          Sign In
        </button>
      </fieldset>
    </nav>
  )
}

export default Navbar