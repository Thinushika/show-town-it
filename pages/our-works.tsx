/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import Footer from "@/components/layout/footer";
import React, { useContext, useState } from "react";
import MainSectionOurWorks from "@/components/mainSections/OurWorks";
import Image from "next/image";
import { ThemeContext } from "@/components/theme/ThemeProvider";
// theme styles
import lightStyles from "@/styles//Light.module.css";
import darkStyles from "@/styles//Dark.module.css";

const ourWorks = () => {
  const { theme } = useContext(ThemeContext);
  const productColColor =
    theme === "dark" ? darkStyles.productColColor : lightStyles.productColColor;

  const [selectedCategory, setSelectedCategory] = useState('All');

  const productsData = [
    {
      id: 1,
      path: '/imgs/products/products (1).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#',
      category: 'Category A',
    },
    {
      id: 2,
      path: '/imgs/products/products (2).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#',
      category: 'Category B',
    },
    {
      id: 3,
      path: '/imgs/products/products (3).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#',
      category: 'Category C',
    },
    {
      id: 4,
      path: '/imgs/products/products (2).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#',
      category: 'Category A',
    },
    {
      id: 5,
      path: '/imgs/products/products (3).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#',
      category: 'Category B',
    },
    {
      id: 6,
      path: '/imgs/products/products (1).jpeg',
      title: 'Bright Captive',
      desc: 'Branding Identity',
      link: '#',
      category: 'Category C',
    }
  ]

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(item => item.category === selectedCategory);


  return (
    <>
      <MainSectionOurWorks />
      {/* space */}
      <div className="space-section"></div>
      <div className="d-flex flex-row pt-5 mt-5">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`${selectedCategory === 'All' ? 'activeCategory' : ''} categoryButton talkButtonSize me-2`}
        >
          All Categories
        </button>
        <button
          onClick={() => setSelectedCategory('Category A')}
          className={`${selectedCategory === 'Category A' ? 'activeCategory' : ''} categoryButton talkButtonSize me-2`}
        >
          Category A
        </button>
        <button
          onClick={() => setSelectedCategory('Category B')}
          className={`${selectedCategory === 'Category B' ? 'activeCategory' : ''} categoryButton talkButtonSize me-2`}
        >
          Category B
        </button>
        <button
          onClick={() => setSelectedCategory('Category C')}
          className={`${selectedCategory === 'Category C' ? 'activeCategory' : ''} categoryButton talkButtonSize `}
        >
          Category C
        </button>
      </div>
      <div className="d-flex row row-cols-1 row-cols-sm-2 row-cols-lg-3 w-100 left-right-space pb-5 pt-5 mb-5 services-styles">
        {filteredProducts.map((item) => (
          <div key={item.id} className="col p-2">
            <div className={`d-flex flex-column product-col ${productColColor}`}>
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
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ourWorks;
