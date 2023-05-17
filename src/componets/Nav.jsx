import React  , {useState}from 'react'
import Lean from './images/lean-logo.png'



function Nav() {
  
  return (
    <div className='bg-[#62a0b9]  w-full flex space-x-80 '>

        <div className='w-20 m-3 mx-3 '>
            <img src={Lean} alt="" />
        </div>
      
    </div>
  )
}

export default Nav;