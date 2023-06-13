import Footer from "@/components/layout/footer";
import React from "react";
import MainSectionProducts from "@/components/mainSections/Products";

const products = () => {
  return (
    <>
    <MainSectionProducts />
      {/* space */}
      <div className="space-section"></div>
      <h1>Products</h1>
      <p className="w-50 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
        neque malesuada, vehicula orci a, viverra risus. Suspendisse vitae odio
        pretium, pellentesque enim et, gravida lorem. Phasellus blandit, velit
        in volutpat ultrices, lorem elit vestibulum dui, et fermentum nulla
        felis vel lorem.
      </p>
      <Footer />
    </>
  );
};

export default products;
