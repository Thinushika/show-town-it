import Footer from "@/components/layout/footer";
import React from "react";
import MainSectionProducts from "@/components/mainSections/Products";
import Image from "next/image";

const products = () => {
  return (
    <>
      <MainSectionProducts />
      {/* space */}
      <div className="space-section"></div>

      <div className="d-flex flex-column text-center align-items-center justify-content-center w-100 left-right-space py-5 my-5 services-styles">
        <h3>Products</h3>
        <p className="w-50 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae
          odio pretium, pellentesque enim et, gravida lorem. Phasellus blandit,
          velit in volutpat ultrices, lorem elit vestibulum dui, et fermentum
          nulla felis vel lorem.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default products;
