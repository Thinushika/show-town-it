import Footer from "@/components/layout/footer";
import Link from "next/link";
import React from "react";
import MainSectionContact from "@/components/mainSections/ContactUs";

const contactUs = () => {
  return (
    <>
      <MainSectionContact />
      {/* space */}
      <div className="space-section"></div>

      <div className="d-flex flex-column w-100 py-5 left-right-space">
        <div className="d-flex flex-column flex-lg-row  w-100 contact py-5">
          <div className="col-12 col-lg-6">
            <h3 className="mb-4 mb-lg-3">Get in touch</h3>
            <div className="d-flex flex-column flex-lg-row row row-cols-1 row-cols-sm-2">
              <div className="col mb-3 mb-lg-0">
                <p className="mb-1">Work Inquires</p>
                <p>
                  <b>+1.809.120.6705</b>
                </p>
              </div>
              <div className="col mb-3 mb-lg-0">
                <p className="mb-1">Careers & Press</p>
                <p>
                  <b>+1.809.120.4590</b>
                </p>
              </div>
              <div className="col mb-3 mb-lg-0">
                <p className="mb-1">Assistance hours:</p>
                <p>
                  Monday – Friday <br />6 am to 8 pm EST
                </p>
              </div>
              <div className="col mb-3 mb-lg-0">
                <p className="mb-1">Assistance hours:</p>
                <p>
                  Tuesday – Saturday <br />6 am to 8 pm EST
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column flex-lg-row row row-cols-1 row-cols-sm-2">
              <div className="col mb-3 mb-lg-0">
                <h3 className="mb-3">Post address</h3>
                <p>
                  541 Melville Ave, Palo Alto, <br />
                  CA 94301, <br />
                  United States
                </p>
              </div>
              <div className="col mb-3 mb-lg-0 d-flex flex-column">
                <h3 className="mb-3">Social media</h3>
                <Link href={"#"} className="social-links" target="_blank">
                  Facebook
                </Link>
                <Link href={"#"} className="social-links" target="_blank">
                  Instergram
                </Link>
                <Link href={"#"} className="social-links" target="_blank">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column flex-lg-row  w-100 contact py-5">
          <form className="d-flex flex-column w-100 contact-form">
            <div className="d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {/* name */}
              <div className="col d-flex flex-column py-3">
                <label htmlFor="name">Name(required)</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              {/* company */}
              <div className="col d-flex flex-column py-3 ">
                <label htmlFor="company">Company(required)</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Your company name"
                />
              </div>
              {/* email */}
              <div className="col d-flex flex-column py-3">
                <label htmlFor="email">Email(required)</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your working email"
                />
              </div>
              {/* phone */}
              <div className="col d-flex flex-column py-3">
                <label htmlFor="phone">Email(optional)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your actual phone number"
                />
              </div>
              {/* subject */}
              <div className="col d-flex flex-column py-3">
                <label htmlFor="subject">Subject(optional)</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Choose a subject"
                />
              </div>
              {/* budjet */}
              <div className="col d-flex flex-column py-3">
                <label htmlFor="budjet">Choose a Budget(USD)</label>
                <select
                  name="budjet"
                  id="budjet"
                  placeholder="Your working email"
                >
                  <option value="Less than 5K">Less than 5K</option>
                  <option value="5K - 10K">5K - 10K</option>
                  <option value="Over 10K">Over 10K</option>
                  <option value="Please advice">Please advice</option>
                </select>
              </div>
            </div>
            <label htmlFor="projectDetails">Project details</label>
            <textarea
              rows={6}
              name="projectDetails"
              id="projectDetails"
              placeholder="Brief project details"
            />
            <div className="d-flex flex-row justify-content-start align-items-start ckeckbox py-3">
              <input type="checkbox" className="me-2 mt-1 form-checkbox" />
              I’m okay with getting emails and having that activity tracked to improve my experience.
            </div>
            <button type="submit" className="">Get a Quote</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contactUs;
