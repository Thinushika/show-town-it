import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Testimonials = () => {

  const testimonialsData = [
    {
      id: 1,
      imgPath: '',
      desc: '',
      name:'',
      position:''
    },
    {
      id: 2,
      imgPath: '',
      desc: '',
      name:'',
      position:''
    },
    {
      id: 3,
      imgPath: '',
      desc: '',
      name:'',
      position:''
    }
  ]
  return (
    <div className="d-flex flex-column flex-lg-row left-right-space py-5 w-100 testimonials-styles">
      <div className="col-12 col-lg-6">
        <h3>Testimonials</h3>
        <h2 className='mb-4'>What our clients say <br /> about our studio.</h2>
        <button type="submit" className="conatct-btn px-3 py-2">
            More Reviews <BsArrowRight />
          </button>
      </div>
      {/* slider */}
      <div className="col-12 col-lg-6">

      </div>
    </div>
  )
}

export default Testimonials