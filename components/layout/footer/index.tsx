import React from 'react'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

const Footer = () => {
  return (
    <div className="d-flex w-100 flex-column left-right-space">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

export default Footer