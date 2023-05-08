import React  , {useState}from 'react'
import Lean from './images/lean-logo.png'
import Menu from './images/Menu.png'
import Xicon from './images/Xicon.png'


function Nav() {
     const [xicon, setXicon] = useState(false);
      const handleClick = () => {
    setXicon(!xicon);
  }
  return (
    <div className='bg-cyan-500  w-full flex space-x-80 '>

        <div className='w-20 m-3 mx-3 '>
            <img src={Lean} alt="" />
        </div>
        <div className='w-9 py-3 lg:hidden md:hidden hidden'>
           <button onClick={handleClick}>
            {xicon ? <img src={Xicon} alt='Close Menu' /> : <img src={Menu} alt='Open Menu' />}
           </button> 
           {xicon && (
            <div className='flex'>
             
            </div>
           )}
        </div>
    </div>
  )
}

export default Nav;