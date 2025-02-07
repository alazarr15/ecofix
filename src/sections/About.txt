import React from 'react'

function About () {
  return (
    <>
    <h1 className='text-center text-5xl font-bold text-[#23b4b9] mt-32 mb-4'>About EcoFix</h1>
    <div className=' flex justify-center items-center mb-32'>
        <p className='w-[800px] text-xl font-semibold text-center p-2'>Established in 2024,
             Ecofix Technology Solutions PLC is a trusted partner in sustainable 
            printing and office equipment servicing. With over 20 years of expertise,
            we specialize in remanufacturing toner cartridges and delivering comprehensive
             maintenance services for major printer brands and office equipment. 
             <span className='hidden sm:block'>Our commitment
              to innovation and environmental stewardship is reflected in our custom-built
               printer toner cartridge refill and remanufacture machines, ensuring high-quality,
                eco-friendly refills At Ecofix, we aim to empower businesses with affordable 
                and reliable solutions while contributing to a greener future.</span>
        </p>
    </div>
    </>
  )
}

export default About