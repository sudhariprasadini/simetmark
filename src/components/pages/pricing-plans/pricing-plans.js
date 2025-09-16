import React from "react";
import { Link } from "react-router-dom";

const PricingPlansMain = () => {
  // Technology data
  const technologies = [
    {
      id: 1,
      title: "CNC Vertical Lathe",
      specification: "Ø1250 mm x 1050 mm capacity",
      image: require("../../assets/img/service/service-1.jpg"),
      description:
        "High-precision vertical lathe machine designed for complex turning operations with exceptional accuracy and reliability.",
      capabilities: [
        "Heavy-duty machining operations",
        "Precision turning and boring",
        "Complex geometric cutting",
        "Automated tool changing",
        "Real-time monitoring systems",
      ],
      industries: ["Aerospace", "Automotive", "Energy", "Heavy Machinery"],
    },
    {
      id: 2,
      title: "CNC Milling Machines",
      specification: "X-680 | Y-1000 | Z-600 mm",
      image: require("../../assets/img/service/service-2.jpg"),
      description:
        "Advanced 3-axis CNC milling machine offering superior precision for complex component manufacturing.",
      capabilities: [
        "3D surface machining",
        "High-speed cutting operations",
        "Multi-axis interpolation",
        "Tool life monitoring",
        "Automatic workpiece setup",
      ],
      industries: [
        "Medical Devices",
        "Electronics",
        "Automotive",
        "Prototyping",
      ],
    },
    {
      id: 3,
      title: "Wire EDM Machines",
      specification: "±30° taper, hard metal precision",
      image: require("../../assets/img/service/service-3.jpg"),
      description:
        "Wire electrical discharge machining for intricate cuts in hardened materials with exceptional surface finish.",
      capabilities: [
        "Taper cutting up to ±30°",
        "Hardened steel processing",
        "Micro-machining capabilities",
        "Superior surface finish",
        "Complex contour cutting",
      ],
      industries: [
        "Tool & Die",
        "Medical",
        "Precision Engineering",
        "Mold Making",
      ],
    },
    {
      id: 4,
      title: "CNC Flame Cutting",
      specification: "3000 mm x 2000 mm",
      image: require("../../assets/img/service/service-4.jpg"),
      description:
        "Large-scale flame cutting system for thick steel plates with automated nesting and cutting optimization.",
      capabilities: [
        "Thick plate cutting (up to 300mm)",
        "Automated nesting software",
        "Multi-torch operations",
        "Bevel cutting capabilities",
        "Material optimization",
      ],
      industries: [
        "Shipbuilding",
        "Construction",
        "Heavy Fabrication",
        "Infrastructure",
      ],
    },
  ];

  // Inline styles for immediate application
  const containerStyle = {
    padding: "60px 0",
    overflow: "hidden",
  };

  const scrollContainerStyle = {
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch",
    padding: "20px 0",
    scrollbarWidth: "thin",
  };

  const cardsContainerStyle = {
    display: "flex",
    gap: "30px",
    padding: "0 20px",
    minWidth: "max-content",
  };

  const cardStyle = {
    flex: "0 0 400px",
    background: "#ffffff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    border: "1px solid #e5e5e5",
  };

  const imageStyle = {
    position: "relative",
    height: "250px",
    overflow: "hidden",
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
    color: "#333",
  };

  const specStyle = {
    display: "inline-block",
    background: "#F7B500",
    color: "#ffffff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "20px",
  };

  const descStyle = {
    color: "#666",
    lineHeight: "1.6",
    fontSize: "16px",
    marginBottom: "25px",
  };

  const sectionTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
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
    color: "#666",
  };

  const checkIconStyle = {
    color: "#F7B500",
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
    background: "#f8f9fa",
    color: "#333",
    padding: "6px 12px",
    borderRadius: "15px",
    fontSize: "13px",
    fontWeight: "500",
    border: "1px solid #e5e5e5",
  };

  const buttonStyle = {
    background: "#F7B500",
    color: "#ffffff",
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
    flex: isMobile ? "0 0 320px" : "0 0 400px",
  };

  const responsiveContainerStyle = {
    ...cardsContainerStyle,
    gap: isMobile ? "20px" : "30px",
    padding: isMobile ? "0 15px" : "0 20px",
  };

  const responsiveContentStyle = {
    ...contentStyle,
    padding: isMobile ? "20px" : "30px",
  };

  const responsiveImageStyle = {
    ...imageStyle,
    height: isMobile ? "200px" : "250px",
  };

  return (
    <>
      <style>
        {`
          .tech-scroll::-webkit-scrollbar {
            height: 8px;
          }
          .tech-scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          .tech-scroll::-webkit-scrollbar-thumb {
            background: #F7B500;
            border-radius: 4px;
          }
          .tech-scroll::-webkit-scrollbar-thumb:hover {
            background: #d4b045;
          }
        `}
      </style>
      <div style={containerStyle}>
        <div className="container-fluid">
          <div style={scrollContainerStyle} className="tech-scroll">
            <div style={responsiveContainerStyle}>
              {technologies.map((tech, index) => (
                <div
                  key={tech.id}
                  style={responsiveCardStyle}
                  className="wow fadeInUp"
                  data-wow-delay={`.${4 + index * 3}s`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(0, 0, 0, 0.1)";
                  }}
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
                          e.currentTarget.style.background = "#d4b045";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#F7B500";
                        }}
                      >
                        Learn More <i className="flaticon-right-up"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlansMain;
