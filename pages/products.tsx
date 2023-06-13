import Footer from "@/components/layout/footer";
import React from "react";
import MainSectionProducts from "@/components/mainSections/Products";
import Image from "next/image";

const products = () => {

  const productsData = [
    {
      id: 1,
      path: '/imgs/products/products (1).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#'
    },
    {
      id: 2,
      path: '/imgs/products/products (2).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#'
    },
    {
      id: 3,
      path: '/imgs/products/products (3).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#'
    },
    {
      id: 4,
      path: '/imgs/products/products (2).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#'
    },
    {
      id: 5,
      path: '/imgs/products/products (3).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#'
    },
    {
      id: 6,
      path: '/imgs/products/products (1).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#'
    }
  ]

  return (
    <>
      <MainSectionProducts />
      {/* space */}
      <div className="space-section"></div>
      <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-lg-3 w-100 left-right-space py-5 my-5 services-styles">
        {
          productsData.map((item)=>(
            <div key={item.id} className="col  p-2 ">
          <div className="d-flex flex-column product-col ">
            <Image
              src={item.path}
              alt=""
              width={400}
              height={600}
              className="product-img-style img-fluid"
            />
            <div className="d-flex flex-column p-3">
              <h3 className="mt-3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
          ))
        }
      </div>
      <Footer />
    </>
  );
};

export default products;
