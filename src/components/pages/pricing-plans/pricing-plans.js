import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const PricingPlansMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const cardWidth = 420; // Card width + gap
  const visibleCards = 3; // Number of cards visible at once
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
        "Thread Cutting (internal & external)",
        "Taper and Step Turning",
        "Hole Drilling (with turret or live tooling)",
        "Handles large-diameter components with precision",
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
        "Slotting/Keyways (gears, pulleys, couplings)",
        "Pocket Milling (cavities, tool paths)",
        "Chamfering & Deburring (edge finishing)",
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
      image: require("../../assets/img/service/service-4.png"),
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

  // Create extended array for infinite scroll
  const extendedTechnologies = [
    ...technologies,
    ...technologies, // Duplicate for seamless infinite scroll
    ...technologies,
  ];

  // Navigation functions
  const scrollToCard = useCallback(
    (index) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      const realIndex = index % technologies.length;
      setCurrentIndex(realIndex);

      if (carouselRef.current) {
        const scrollPosition = (technologies.length + realIndex) * cardWidth;
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }

      setTimeout(() => setIsTransitioning(false), 300);
    },
    [isTransitioning, technologies.length, cardWidth]
  );

  const nextCard = () => {
    const nextIndex = (currentIndex + 1) % technologies.length;
    scrollToCard(nextIndex);
  };

  const prevCard = () => {
    const prevIndex =
      (currentIndex - 1 + technologies.length) % technologies.length;
    scrollToCard(prevIndex);
  };

  const handleCardClick = (index) => {
    const realIndex = index % technologies.length;
    if (realIndex !== currentIndex) {
      scrollToCard(realIndex);
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        const nextIndex = (currentIndex + 1) % technologies.length;
        scrollToCard(nextIndex);
      }
    }, 5000); // Auto scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, technologies.length]);

  // Initialize carousel position
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = technologies.length * cardWidth;
    }
  }, [technologies.length, cardWidth]);

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

  // Updated carousel styles
  const carouselContainerStyle = {
    position: "relative",
    overflow: "hidden",
    padding: "20px 0",
  };

  const carouselScrollStyle = {
    display: "flex",
    gap: "30px",
    padding: "0 20px",
    overflow: "hidden",
    scrollBehavior: "smooth",
    cursor: "grab",
  };

  const updatedCardStyle = {
    ...responsiveCardStyle,
    cursor: "pointer",
    transition: "all 0.3s ease",
    opacity: 1,
  };

  // Navigation buttons style
  const navButtonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#F7B500",
    color: "#ffffff",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    fontSize: "20px",
    zIndex: 10,
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const leftNavStyle = {
    ...navButtonStyle,
    left: "10px",
  };

  const rightNavStyle = {
    ...navButtonStyle,
    right: "10px",
  };

  // Indicators style
  const indicatorsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "30px",
  };

  const indicatorStyle = (isActive) => ({
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: isActive ? "#F7B500" : "#e0e0e0",
    cursor: "pointer",
    transition: "all 0.3s ease",
  });

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
          {/* Navigation Buttons */}
          <div style={carouselContainerStyle}>
            <button
              style={leftNavStyle}
              onClick={prevCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d4b045";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F7B500";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              &#8249;
            </button>

            <button
              style={rightNavStyle}
              onClick={nextCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d4b045";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F7B500";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              &#8250;
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              style={carouselScrollStyle}
              className="tech-scroll"
            >
              {extendedTechnologies.map((tech, index) => {
                const realIndex = index % technologies.length;
                const isActive = realIndex === currentIndex;
                const isVisible =
                  Math.abs((index % technologies.length) - currentIndex) <=
                  visibleCards / 2;

                return (
                  <div
                    key={`${tech.id}-${index}`}
                    style={{
                      ...updatedCardStyle,
                      opacity: isVisible ? 1 : 0.7,
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                    }}
                    className="wow fadeInUp"
                    data-wow-delay={`.${4 + index * 3}s`}
                    onClick={() => handleCardClick(index)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = isActive
                        ? "scale(1.1) translateY(-10px)"
                        : "scale(1.05) translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 40px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = isActive
                        ? "scale(1.05)"
                        : "scale(1)";
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
                );
              })}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div style={indicatorsStyle}>
            {technologies.map((_, index) => (
              <div
                key={index}
                style={indicatorStyle(index === currentIndex)}
                onClick={() => scrollToCard(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlansMain;
