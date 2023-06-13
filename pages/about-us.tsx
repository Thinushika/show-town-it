import Footer from '@/components/layout/footer'
import React from 'react'
import MainSectionAbout from '@/components/mainSections/AboutUs'
import ClientsLogo from '@/components/sections/ClientsLogo'

const aboutUs = () => {
  return (
    <>
    <MainSectionAbout />
      {/* space */}
      <div className="space-section"></div>
      <ClientsLogo />
      <Footer />
    </>
  )
}

export default aboutUs