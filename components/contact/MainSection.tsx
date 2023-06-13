/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const MainSection = () => {
  return (
    <div className="d-flex justify-content-start align-items-end pb-5 bg-image position-absolute top-0 left-0 ">
      <div className="d-flex flex-column s-space agency">
        <h2 className='text-white '>Contact:Agency</h2>
        <p className='text-white'>Leave us a little info, and we'll be in touch.</p>
        <button className='red-button px-3 py-2'>Send us Email</button>
      </div>
    </div>
  )
}

export default MainSection