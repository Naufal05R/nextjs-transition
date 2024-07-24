import Link from 'next/link'
import React from 'react'
import TransitionLink from './TransitionLink'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between'>
      <hgroup className='w-1/3'>
        <h1 className='font-mono text-4xl font-black'>MY APP</h1>
      </hgroup>
      <ul className='w-1/3 flex items-center px-6 justify-between rounded-full border border-slate-300 bg-slate-300/25 backdrop-blur'>
        <TransitionLink className='py-3' href={'/community'}>
          Community
        </TransitionLink>
        <TransitionLink className='py-3' href={'/feature'}>
          Feature
        </TransitionLink>
        <TransitionLink className='py-3' href={'/support'}>
          Support
        </TransitionLink>
        <TransitionLink className='py-3' href={'/contact'}>
          Contact
        </TransitionLink>
      </ul>
      <fieldset className='w-1/3 text-right'>
        <button className='px-6 py-2 bg-slate-900 rounded-full text-slate-100'>
          Sign In
        </button>
      </fieldset>
    </nav>
  )
}

export default Navbar