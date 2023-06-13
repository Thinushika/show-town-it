import Footer from '@/components/layout/footer'
import React from 'react'
import MainSectionAbout from '@/components/mainSections/AboutUs'
import ClientsLogo from '@/components/sections/ClientsLogo'
import Process from '@/components/sections/Process'

const aboutUs = () => {
  return (
    <>
    <MainSectionAbout />
      {/* space */}
      <div className="space-section"></div>
      <ClientsLogo />
      <Process />
      <Footer />
    </>
  )
}

export default aboutUs