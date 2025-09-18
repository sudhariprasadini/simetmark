import React from "react";
import { Link } from "react-router-dom";
import servicesData from "../../../data/services-data";
import ctaImage from "../../../assets/img/page/cta-1.jpg";
// import image1 from "../../../assets/img/portfolio/portfolio-5.jpg";
// import image2 from "../../../assets/img/portfolio/portfolio-8.png";

const ServicesSingleMain = ({ singleData }) => {
  return (
    <>
      <div className="services__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 columns_sticky">
              <div className="all__sidebar">
                <div className="all__sidebar-item">
                  <h4>Our Services</h4>
                  <div className="all__sidebar-item-category">
                    <ul>
                      {servicesData.slice(0, 5).map((data, id) => (
                        <li key={id}>
                          <Link to={`/services/${data.id}`}>
                            {data.title}
                            <i className="flaticon-right-up"></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="all__sidebar-item-help mb-25"
                  style={{ backgroundImage: `url(${ctaImage})` }}
                >
                  <h3>Ready for Your Next Construction?</h3>
                  <Link className="build_button mt-20" to="/contact-us">
                    Get an Advice<i className="flaticon-right-up"></i>
                  </Link>
                </div>
                <div className="all__sidebar-item">
                  <h4>Materials We Machine</h4>
                  <div className="all__sidebar-item-download">
                    <ul>
                      <li>Carbon steels (AISI/EN grades)</li>
                      <li>
                        Stainless steels (austenitic, martensitic, duplex)
                      </li>
                      <li>Cast iron (grey, ductile)</li>
                      <li>Aluminum alloys (6061, 7075, etc.)</li>
                      <li>Copper, brass, bronze</li>
                      <li>
                        Tool steels and hardened steels (for EDM & tool
                        components)
                      </li>
                      <li>
                        Titanium and nickel alloys (Inconel) — with suitable
                        tooling & strategies
                      </li>
                      <li>
                        Engineering plastics (Delrin, Nylon, PTFE) for
                        non-metallic parts
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="services__details-area">
                <img src={singleData.image} alt="image" />
                <h3 className="mt-25 mb-20">{singleData.title}</h3>
                <p className="mb-20">{singleData.p1}</p>

                <h4 className="mb-20">{singleData.h4}</h4>
                <ul>
                  {singleData.whyChoose.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="row mt-40 mb-40">
                  <div className="col-sm-6 sm-mb-25">
                    <img
                      className="img_full"
                      src={singleData.image2}
                      alt="image"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      className="img_full"
                      src={singleData.image3}
                      alt="image"
                    />
                  </div>
                </div>
                <h4 className="mb-20">Core processes & operations:</h4>
                <ul>
                  {singleData.coreProcesses.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h4 className="mb-20">Performance & tolerances (typical):</h4>
                <ul>
                  {singleData.performance.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3>Precision CNC Services:</h3>
                <div className="mt-30" id="accordionExample">
                  {singleData.precisionServices.map((service, index) => (
                    <div className="faq-item" key={index}>
                      <h5
                        className={`icon ${index === 0 ? "" : "collapsed"}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index + 1}`}
                      >
                        {service.title}
                      </h5>
                      <div
                        id={`collapse${index + 1}`}
                        className={`faq-item-body collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        data-bs-parent="#accordionExample"
                      >
                        <p>{service.description}</p>
                        <h5 className="mt-3 mb-2">
                          <b>Core processes & operations:</b>
                        </h5>
                        <ul>
                          {service.coreProcesses.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        <h5 className="mt-3 mb-2">
                          <b>Performance & tolerances (typical):</b>
                        </h5>
                        <ul>
                          {service.performance.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSingleMain;
