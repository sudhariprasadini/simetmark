import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import servicesData from "../../../data/services-data";

const ServicesMain = () => {
  const slideControl = {
    spaceBetween: 10,
    slidesPerView: 4,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 5000,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".services_next",
      prevEl: ".services_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  // Inline styles for immediate application
  const containerStyle = {
    padding: "60px 0",
    overflow: "hidden",
  };

  const cardStyle = {
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    border: "1px solid #e5e5e5",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0 10px",
  };

  const contentStyle = {
    padding: "32px 28px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
  };

  const iconStyle = {
    fontSize: "48px",
    color: "#F48520",
    marginBottom: "18px",
    display: "block",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "14px",
    color: "#000000",
    lineHeight: "1.3",
  };

  const descStyle = {
    color: "#595A5C",
    lineHeight: "1.6",
    fontSize: "16px",
    marginBottom: "auto",
    minHeight: "48px",
  };

  const buttonStyle = {
    color: "#F48520",
    textDecoration: "none",
    fontWeight: "600",
    marginTop: "20px",
    display: "inline-block",
    transition: "all 0.3s ease",
    fontSize: "16px",
  };

  // Responsive detection and styles
  const getResponsiveStyles = () => {
    const width = window.innerWidth;

    if (width <= 576) {
      return {
        container: { ...containerStyle, padding: "40px 0" },
        content: { ...contentStyle, padding: "24px 20px" },
        card: { ...cardStyle, margin: "0 5px" },
        icon: { ...iconStyle, fontSize: "40px", marginBottom: "15px" },
        title: { ...titleStyle, fontSize: "18px", marginBottom: "12px" },
        desc: { ...descStyle, fontSize: "14px", minHeight: "40px" },
        button: { ...buttonStyle, fontSize: "14px", marginTop: "15px" },
      };
    } else if (width <= 768) {
      return {
        container: { ...containerStyle, padding: "50px 0" },
        content: { ...contentStyle, padding: "28px 24px" },
        card: { ...cardStyle, margin: "0 8px" },
        icon: { ...iconStyle, fontSize: "44px", marginBottom: "16px" },
        title: { ...titleStyle, fontSize: "18px", marginBottom: "13px" },
        desc: { ...descStyle, fontSize: "15px", minHeight: "45px" },
        button: { ...buttonStyle, fontSize: "15px", marginTop: "18px" },
      };
    }

    return {
      container: containerStyle,
      content: contentStyle,
      card: cardStyle,
      icon: iconStyle,
      title: titleStyle,
      desc: descStyle,
      button: buttonStyle,
    };
  };

  const responsiveStyles = getResponsiveStyles();

  // Carousel container styles
  const carouselContainerStyle = {
    position: "relative",
    overflow: "hidden",
    padding: "20px 0",
  };

  return (
    <>
      <style>
        {`
          .services-scroll::-webkit-scrollbar {
            height: 8px;
          }
          .services-scroll::-webkit-scrollbar-track {
            background: #FFFFFF;
            border-radius: 4px;
          }
          .services-scroll::-webkit-scrollbar-thumb {
            background: #F48520;
            border-radius: 4px;
          }
          .services-scroll::-webkit-scrollbar-thumb:hover {
            background: #EC2025;
          }
          .services__one-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          }
          .more_btn:hover {
            color: #EC2025 !important;
          }
          
          /* Mobile responsive styles */
          @media (max-width: 576px) {
            .slider-arrow {
              display: none !important;
            }
            .services__one-item {
              margin: 0 5px !important;
            }
            .swiper-slide {
              padding: 0 10px;
            }
          }
          
          @media (max-width: 768px) {
            .services__one-item {
              margin: 0 8px !important;
            }
            .slider-arrow {
              right: 10px !important;
              top: 10px !important;
            }
          }
          
          @media (min-width: 769px) and (max-width: 992px) {
            .services__one-item {
              margin: 0 10px !important;
            }
          }
          
          /* Swiper navigation arrows responsive */
          .slider-arrow-prev,
          .slider-arrow-next {
            width: 50px;
            height: 50px;
            background: #F48520;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .slider-arrow-prev:hover,
          .slider-arrow-next:hover {
            background: #EC2025;
            transform: scale(1.1);
          }
          
          @media (max-width: 768px) {
            .slider-arrow-prev,
            .slider-arrow-next {
              width: 40px;
              height: 40px;
              font-size: 14px;
            }
          }
        `}
      </style>
      <div style={responsiveStyles.container}>
        <div className="container">
          <div style={carouselContainerStyle}>
            <div
              className="slider-arrow jc-end lg-jc-center mb-10"
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                zIndex: 10,
                display: window.innerWidth <= 576 ? "none" : "block",
              }}
            ></div>
            <Swiper modules={[Autoplay, Navigation]} {...slideControl}>
              {servicesData?.map((data, id) => (
                <SwiperSlide key={id}>
                  <div
                    className="services__one-item wow fadeInUp"
                    style={responsiveStyles.card}
                    data-wow-delay={`.${4 + id * 3}s`}
                  >
                    <div style={responsiveStyles.content}>
                      <div style={responsiveStyles.icon}>{data.icon}</div>
                      <h4 style={responsiveStyles.title}>
                        <Link
                          to={`/services/${data.id}`}
                          style={{ color: "#000000", textDecoration: "none" }}
                        >
                          {data.title}
                        </Link>
                      </h4>

                      <Link
                        className="more_btn"
                        to={`/services/${data.id}`}
                        style={responsiveStyles.button}
                      >
                        Read More<i className="flaticon-right-up"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className="wow fadeInDown"
            data-wow-delay="1.2s"
            style={{ textAlign: "center", marginTop: "60px" }}
          >
            <Link
              className="build_button mt-50"
              to="/request-quote"
              style={{
                padding: "14px 38px",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Request a Quote<i className="flaticon-right-up"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
