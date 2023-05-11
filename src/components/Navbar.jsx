import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="navbar bg-primary text-primary-content fixed flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Mental Health</a>
                <button className='pr-4'>Logout</button>
        </div>
    </>
    
  )
}

export default Navbar