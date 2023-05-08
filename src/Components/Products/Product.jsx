import React from 'react'

// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function Product() {
   return(
    <div className='bg-[#f5f3f3]'>
      
    <div 
      className='bg-[url("https://static.praxisdienst.com/out/pictures/master/themeworld/1/h_suchliste_pax-notfallausrstung(2).jpg")] object-fit h-[32rem] lg:w-auto bg-no-repeat bg-contain  md:mx-32 lg:mx-36 lg:m-10 relative rounded-md mt-10   ' >
         
            <div className='bg-white lg:w-2/6 lg:m-10 lg:absolute lg:text-left lg:ml-26 lg:mt-16 lg:p-9 rounded  drop-shadow-lg' >
              <h2 className='text-cyan-600 lg:text-left   lg:py-3 font-extrabold lg:text-2xl m-5 text-left'>DIGITAL OTOSCOPES</h2>
                <p className='text-left font-light m-5 lg:m-1'>
                  At the forefront of the digital revolution in healthcare, digital otoscopes offer numerous benefits over traditional otoscopes.At the forefront of the digital revolution in healthcare, digital otoscopes offer numerous benefits over traditional otoscopes.
                </p>
                <button className='bg-cyan-500 hover:bg-cyan-600 w-auto p-2 my-5 mr-80 rounded lg:p-2 lg:my-5 text-white lg:mr-80 '>LEARN MORE</button>
            </div>
      </div>
  </div>
   
      )
   }

export default Product;