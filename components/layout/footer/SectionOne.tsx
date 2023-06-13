import React from "react";
import { BsArrowRight } from "react-icons/bs";

const SectionOne = () => {
  return (
    <div className="d-flex flex-column py-4 footer-sec-1  left-right-space w-100">
      <div className="d-flex flex-column flex-lg-row py-4">
        <div className="col-12 col-lg-10 d-flex flex-column justify-content-center">
          <h4>COLLABORATION</h4>
          <h2>
            Got a project? <br />
            Let’s talk.
          </h2>
        </div>
        <div className="col-12 col-lg-2 d-flex flex-column justify-content-center align-items-lg-end">
          <button type="submit" className="conatct-btn px-3 py-2">
            Contact Us <BsArrowRight />
          </button>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column flex-lg-row py-4">
        <p>
          We’re a team of creatives who are excited about unique ideas and help
          fin-tech <br /> companies to create amazing identity by crafting
          top-notch UI/UX.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
