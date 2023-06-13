import MainSection from "@/components/contact/MainSection";
import Link from "next/link";
import React from "react";

const contactUs = () => {
  return (
    <>
      <MainSection />
      {/* space */}
      <div className="space-section"></div>

      <div className="d-flex w-100 py-5">
        <div className="d-flex flex-column flex-lg-row left-right-space w-100 contact">
        <div className="col-12 col-lg-6">
          <h3 className="mb-3">Get in touch</h3>
          <div className="d-flex flex-column flex-lg-row row row-cols-1 row-cols-sm-2">
            <div className="col">
              <p className="mb-1">Work Inquires</p>
              <p ><b>+1.809.120.6705</b></p>
            </div>
            <div className="col">
              <p className="mb-1">Careers & Press</p>
              <p><b>+1.809.120.4590</b></p>
            </div>
            <div className="col">
              <p className="mb-1">Assistance hours:</p>
              <p>
                Monday – Friday <br />6 am to 8 pm EST
              </p>
            </div>
            <div className="col">
              <p className="mb-1">Assistance hours:</p>
              <p>
                Tuesday – Saturday <br />6 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
        <div className="d-flex flex-column flex-lg-row row row-cols-1 row-cols-sm-2">
            <div className="col">
            <h3 className="mb-3">Post address</h3>
              <p>541 Melville Ave, Palo Alto, <br />
CA 94301, <br />
United States</p>
            </div>
            <div className="col d-flex flex-column">
            <h3 className="mb-3">Social media</h3>
              <Link href={'#'} className="social-links" target="_blank">Facebook</Link>
              <Link href={'#'} className="social-links" target="_blank">Instergram</Link>
              <Link href={'#'} className="social-links" target="_blank">Twitter</Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default contactUs;
