import Link from 'next/link'
import React from 'react'

const SectionThree = () => {
  return (
    <div className="d-flex flex-column flex-lg-row py-4">
        <div className="col-12 col-lg-6 text-center text-lg-start">
            <p className='footer-text'>© 2016-2023 Colabrio. All rights reserved | Purchase</p>
        </div>
        <div className="col-12 col-lg-6 d-flex flex-column flex-lg-row text-center justify-content-lg-end text-lg-end">
            <Link href={'#'} className='mx-lg-2 links-style'>
            Security 
            </Link>
            <p className='d-none d-lg-block'>|</p> 
            <Link href={'#'} className='mx-lg-2 links-style'>
            Privacy & Cookie Policy 
            </Link>
            <p className='d-none d-lg-block'>|</p>  
            <Link href={'#'} className='ms-lg-2 links-style'>
            Terms of Service 
            </Link>
        </div>
    </div>
  )
}

export default SectionThree