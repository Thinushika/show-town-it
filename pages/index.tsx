import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    
  }, []);
  
  
  return (
    <>
      <h1>Home</h1>
      <p className='w-50 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
        neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae odio
        pretium, pellentesque enim et, gravida lorem. Phasellus blandit, velit
        in volutpat ultrices, lorem elit vestibulum dui, et fermentum nulla
        felis vel lorem.
      </p>
      
    </>
  )
}
