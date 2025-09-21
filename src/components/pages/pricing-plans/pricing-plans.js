import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const PricingPlansMain = () => {
  const slideControl = {
    spaceBetween: 60,
    slidesPerView: 3,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".pricing_next",
      prevEl: ".pricing_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
      1600: {
        slidesPerView: 3,
      },
    },
  };
  // Technology data
  const technologies = [
    {
      id: 1,
      title: "CNC Vertical Lathe",
      specification: "Ø1250 mm x 1050 mm capacity",
      image: require("../../assets/img/service/service-1.png"),
      description:
        "A heavy-duty CNC vertical turning machine designed to handle large-diameter and bulky parts. Its vertical orientation provides rigid clamping and stable rotation, reducing vibration when machining heavy components.",
      capabilities: [
        "External/ID Turning",
        "Facing and Contour Machining",
        "Grooving and Parting",
        "Boring (up to 1050 mm height)",
        // "Thread Cutting (internal & external)",
        // "Taper and Step Turning",
        // "Hole Drilling (with turret or live tooling)",
        // "Handles large-diameter components with precision",
      ],
      industries: [
        "Energy",
        "Mining",
        "Off-road vehicle manufacturing",
        "Marine",
      ],
    },
    {
      id: 2,
      title: "CNC Milling Machines",
      specification: "X-680 | Y-1000 | Z-600 mm",
      image: require("../../assets/img/service/service-2.png"),
      description:
        "A precision CNC milling center capable of machining medium-to-large components across multiple axes. Suitable for complex 2D/3D shapes, holes, cavities, and surface finishing.",
      capabilities: [
        "Face Milling (surface leveling)",
        "Contour Milling (complex 2D/3D forms)",
        "Drilling (accurate holes)",
        "Tapping (internal threads)",
        // "Slotting/Keyways (gears, pulleys, couplings)",
        // "Pocket Milling (cavities, tool paths)",
        // "Chamfering & Deburring (edge finishing)",
      ],
      industries: [
        "Automotive",
        "Aerospace",
        "Tooling & Mold Making",
        "Machinery & General Engineering",
      ],
    },
    {
      id: 3,
      title: "Wire EDM Machines",
      specification: "±30° taper, hard metal precision",
      image: require("../../assets/img/service/service-3.jpg"),
      description:
        "An advanced CNC wire-cut electric discharge machine specialized in high-accuracy cutting of hardened metals and complex shapes, ideal for precision tooling and intricate components.",
      capabilities: [
        // "Precision cutting of hard metals (steel, carbide, titanium, alloys)",
        // "±30° taper cutting (dies, stepped parts)",
        // "Die & Mold Components (progressive stamping tools, extrusion dies)",
        // "Contoured shapes & complex 2D profiles",
        // "Sharp internal corners & tight radii",
        "Thin slotting & keyways",
        "Punch & die manufacturing",
        "Gear or spline profiles",
        "Micro-component machining (aerospace, electronics)",
      ],
      industries: [
        "Aerospace",
        "Electronics",
        "Tool & Die Manufacturing",
        "Medical Devices",
        "Automotive Precision Parts",
      ],
    },
    {
      id: 4,
      title: "CNC Flame Cutting",
      specification: "3000 mm x 2000 mm",
      image: require("../../assets/img/service/service-4.png"),
      description:
        "A CNC-controlled flame cutting system designed for large-scale steel plate cutting. Provides efficient, cost-effective solutions for heavy structural and industrial fabrication.",
      capabilities: [
        "Cutting large steel sheets ",
        "Capable of cutting very thick steel economically",
        "Multiple torch/nesting programs for bulk production",
        "Structural and machinery component preparation",
      ],
      industries: [
        "Heavy Engineering",
        "Structural Steel Fabrication",
        "Shipbuilding",
        "Construction Machinery",
      ],
    },
  ];

  // Inline styles for immediate application
  const containerStyle = {
    padding: "60px 0",
    overflow: "hidden",
  };

  const cardStyle = {
    flex: "0 0 400px",
    background: "#FFFFFF",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    border: "1px solid #595A5C",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "30px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#000000",
  };

  const specStyle = {
    display: "inline-block",
    background: "#F48520",
    color: "#FFFFFF",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "20px",
  };

  const descStyle = {
    color: "#595A5C",
    lineHeight: "1.6",
    fontSize: "16px",
    marginBottom: "25px",
  };

  const sectionTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#000000",
    marginBottom: "15px",
  };

  const listStyle = {
    padding: "0",
    margin: "0 0 25px 0",
    listStyle: "none",
  };

  const listItemStyle = {
    fontSize: "15px",
    lineHeight: "28px",
    marginBottom: "8px",
    color: "#595A5C",
  };

  const checkIconStyle = {
    color: "#F48520",
    fontSize: "14px",
    marginRight: "8px",
  };

  const tagsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "30px",
  };

  const tagStyle = {
    background: "#FFFFFF",
    color: "#000000",
    padding: "6px 12px",
    borderRadius: "15px",
    fontSize: "13px",
    fontWeight: "500",
    border: "1px solid #595A5C",
  };

  const buttonStyle = {
    background: "#F48520",
    color: "#FFFFFF",
    border: "none",
    padding: "12px 32px",
    width: "100%",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  // Responsive styles for mobile devices
  const isMobile = window.innerWidth <= 768;
  const responsiveCardStyle = {
    ...cardStyle,
    flex: isMobile ? "0 0 420px" : "0 0 500px",
  };

  const responsiveContentStyle = {
    ...contentStyle,
    padding: isMobile ? "20px" : "30px",
  };

  // Updated carousel styles
  const carouselContainerStyle = {
    position: "relative",
    overflow: "hidden",
    padding: "20px 0",
  };

  const updatedCardStyle = {
    ...responsiveCardStyle,
    cursor: "pointer",
    transition: "all 0.3s ease",
    opacity: 1,
  };

  const responsiveImageStyle = {
    position: "relative",
    height: isMobile ? "200px" : "250px",
    overflow: "hidden",
  };

  return (
    <>
      <style>
        {`
          .tech-scroll::-webkit-scrollbar {
            height: 8px;
          }
          .tech-scroll::-webkit-scrollbar-track {
            background: #FFFFFF;
            border-radius: 4px;
          }
          .tech-scroll::-webkit-scrollbar-thumb {
            background: #F48520;
            border-radius: 4px;
          }
          .tech-scroll::-webkit-scrollbar-thumb:hover {
            background: #EC2025;
          }
        `}
      </style>
      <div style={containerStyle}>
        <div className="container-fluid">
          <div style={carouselContainerStyle}>
            <div
              className="slider-arrow jc-end lg-jc-center mb-10"
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                zIndex: 10,
              }}
            >
              <div className="slider-arrow-prev pricing_prev">
                <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
              </div>
              <div className="slider-arrow-next pricing_next">
                <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
              </div>
            </div>
            <Swiper modules={[Autoplay, Navigation]} {...slideControl}>
              {technologies.map((tech, id) => (
                <SwiperSlide key={id}>
                  <div
                    style={updatedCardStyle}
                    className="wow fadeInUp"
                    data-wow-delay={`.${4 + id * 3}s`}
                  >
                    <div style={responsiveImageStyle}>
                      <img src={tech.image} alt={tech.title} style={imgStyle} />
                    </div>
                    <div style={responsiveContentStyle}>
                      <div>
                        <h3 style={titleStyle}>{tech.title}</h3>
                        <span style={specStyle}>{tech.specification}</span>
                      </div>
                      <div>
                        <p style={descStyle}>{tech.description}</p>
                      </div>
                      <div>
                        <h4 style={sectionTitleStyle}>Capabilities</h4>
                        <ul style={listStyle}>
                          {tech.capabilities.map((capability, capIndex) => (
                            <li key={capIndex} style={listItemStyle}>
                              <i
                                className="flaticon-checked"
                                style={checkIconStyle}
                              ></i>
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 style={sectionTitleStyle}>Industries Served</h4>
                        <div style={tagsContainerStyle}>
                          {tech.industries.map((industry, indIndex) => (
                            <span key={indIndex} style={tagStyle}>
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <Link
                          to="/contact-us"
                          style={buttonStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#EC2025";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#F48520";
                          }}
                        >
                          Learn More <i className="flaticon-right-up"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlansMain;
