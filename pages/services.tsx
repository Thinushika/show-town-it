import Footer from '@/components/layout/footer'
import React from 'react'
import MainSectionServices from '@/components/mainSections/Services'

const services = () => {
  return (
    <>
    <MainSectionServices />
      {/* space */}
      <div className="space-section"></div>
      <h1>Services</h1>
      <p className='w-50 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
        neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae odio
        pretium, pellentesque enim et, gravida lorem. Phasellus blandit, velit
        in volutpat ultrices, lorem elit vestibulum dui, et fermentum nulla
        felis vel lorem.
      </p>
      <Footer />
      </>
  )
}

export default services