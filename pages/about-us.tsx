import Footer from '@/components/layout/footer'
import React from 'react'
import MainSectionAbout from '@/components/mainSections/AboutUs'
import ClientsLogo from '@/components/sections/ClientsLogo'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'

const aboutUs = () => {
  return (
    <>
    <MainSectionAbout />
      {/* space */}
      <div className="space-section"></div>
      <Testimonials />
      <ClientsLogo />
      <Process />
      <Footer />
    </>
  )
}

export default aboutUs