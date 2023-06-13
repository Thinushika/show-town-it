import Link from "next/link";
import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row py-4 footer-sec-2">
        <div className="col-12 col-lg-3 d-flex flex-row">
          <Link href={"#"} className="social-links me-lg-2">
            Fb.
          </Link>
          <p className="">|</p>
          <Link href={"#"} className="social-links mx-lg-2">
            lg.
          </Link>
          <p className="">|</p>
          <Link href={"#"} className="social-links mx-lg-2">
            Tw.
          </Link>
          <p className="">|</p>
          <Link href={"#"} className="social-links mx-lg-2">
            Be.
          </Link>
        </div>
        <div className="col-12 col-lg-9 d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-4">
            <h3>Rotterdam</h3>
            <p >
              Ohio Digital Media LTD. <br />
              Graaf Florisstraat 22A,
              <br />
              3021 CH Rotterdam
              <br />
              Netherlands
            </p>

            <h3 className="mt-5">Barcelona</h3>
            <p>
              Ohio Digital LTD. <br />
              365 Gran Via de Corts <br />
              Catalanes, BA 08015
            </p>
          </div>
          <div className="col-12 col-lg-4">
            <h3>Work inquiries</h3>
            <p className="mb-0">
            Interested in working with us?
            </p>
            <Link href={"#"} className="social-links">
            hello@clbthemes.com
          </Link>

          <h3 className="mt-5">Career</h3>
            <p className="mb-0">
            Looking for a job opportunity?
            </p>
            <Link href={"#"} className="social-links ">
            See open positions
          </Link>


          </div>
          <div className="col-12 col-lg-4">
          <h3>Career</h3>
          <form className="contact-form"> 
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
                
          <div className="d-flex flex-row justify-content-start align-items-start ckeckbox py-3">
              <input type="checkbox" className="me-2 mt-1 form-checkbox" />
              <p>I’m okay with getting emails and having that activity tracked to improve my experience.</p>
            </div>
            <button type="submit" className="">Sign up</button>
          </form>

          </div>
        </div>
      </div>
      <hr style={{color:'#fff !important'}} />
    </>
  );
};

export default SectionTwo;
