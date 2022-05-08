import React from 'react'

const Navbar = () => {
  const pathname = window.location.pathname

  return (
    <div>
    {pathname === "/patientsfolders" ? <div className='bg-blue-900 fixed top-0 left-0 right-0 py-4 text-right pr-10'><a className='text-white bg-blue-700 p-2 rounded-md'  href="/dashboard">Inserer</a></div>  : 
    <div className='bg-blue-900 fixed top-0 left-0 right-0 py-4 text-right pr-10'><a className='text-white bg-blue-700 p-2 rounded-md'  href="/patientsfolders">Dossiers</a></div>
    }
    </div>
  )
}

export default Navbar