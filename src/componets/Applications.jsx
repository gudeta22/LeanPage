import React from 'react'
// import PercentIcon from '@mui/icons-material/Percent';
import flask from './images/flask.png'
import doctor from './images/doctor.png'
import monitor from './images/monitor.png'
import emergency from './images/emergency.png'
function Applications() {
  const applications = [
    {
      id:1,
      border:"border-l-4 lg:border-l-0 border-gray-300 border-dotted",
      src:doctor,
      desc:"Used in Clinics",
      style:"lg:p-0  ",
    },
     {
      id:2,
      src:flask,
      border:"border-l-4  border-gray-300 border-dotted",
      desc:"Used In Labratories",
      style:"lg:p-0  lg:ml-0",
    },
     {
      id:3,
      src:monitor,
      desc:"Intensive Care Unit(ICU)",
      border:"border-l-4  border-gray-300 border-dotted",
      style:"lg:p-0 lg:mr-2",
    },
      {
      id:4,
      src:emergency,
      border:"border-l-4  border-gray-300 border-dotted",
      desc:"Emergency Room(ER)",
      style:"lg:p-0 lg:ml-6",
    }
  ]
  return (
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  rounded lg:mx-44  center lg:w-[82%] h-44  lg:m-0'>
         {applications.map(({src , id , style , desc , border})=>
         {

          return<div className='lg:mx-0 rounded bg-gray-100 lg:w-[100%] m-6'>
            <div 
            key={id}
            className={`${border} text-black p-8 flex lg:flex-col  ml-5 `}>
                  <img className="w-10 h-10 lg:mx-36 mb-0 rounded-sm border-cyan-600" src={src} alt="images" />
                  <p className={`  font-light hover:text-cyan-700 ml-5 my-2 ${style}`}>{desc}</p>
                  </div>
            </div>
         })}
    </div>
   
  )
}

export default Applications