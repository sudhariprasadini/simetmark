import { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import image1 from "../../../assets/img/about/about-1.jpg";
// import image2 from "../../../assets/img/about/about-2.jpg";

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const openVideoModal = () => {
    setOpenVideo(true);
  };
  return (
    <>
      <div className="about__one section-padding">
        <div className="container">
          {/* Full-width header */}
          <div className="row">
            <div className="col-12">
              <div
                className="about__one-left-title"
                style={{ marginBottom: "40px", textAlign: "left" }}
              >
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                  <b>About Our Company</b>
                </span>
                <h2 className="wow fadeInRight" data-wow-delay=".6s">
                  <b>
                    Welcome to Simetmark (Pvt) Ltd, your trusted partner in
                    precision machining and advanced manufacturing solutions.
                  </b>
                </h2>
              </div>
            </div>
          </div>
          {/* Main content */}
          <div className="row al-center">
            <div className="col-lg-7 lg-mb-25">
              <div className="about__one-left">
                <div className="row al-center mt-45">
                  <div className="col-md-8 pl-50 xl-pl-10">
                    <div className="about__one-left-list">
                      <div
                        className="about__one-left-list-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <i className="flaticon-technology"></i>
                        <div className="about__one-left-list-item-content">
                          <h4>Technologies and Processes</h4>
                          <ul>
                            <li>
                              <strong>Parts Manufacturing:</strong> CNC milling
                              is essential in modern manufacturing, delivering
                              precise and efficient machining for a wide range
                              of parts and components. At our facility, we
                              provide advanced CNC milling solutions, including
                              4th and 5th axis machining, to meet diverse
                              production needs with high accuracy and
                              efficiency.
                            </li>
                            <li>
                              <strong>Steel Forging:</strong> A process of
                              shaping steel using compressive forces at high
                              temperatures. Forging produces parts with
                              exceptional strength, making it ideal for
                              components that must withstand extreme conditions.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="about__one-left-list-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <i className="flaticon-team"></i>
                        <div className="about__one-left-list-item-content">
                          <h4>Experience Engineers</h4>
                          <p>
                            Knowledge and practical skills enable them to tackle
                            challenges from start to finish
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about__one-right t-right">
                <img
                  className="wow img_right_animation lg_img_full"
                  src={image1}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        className="video-modal"
        channel="youtube"
        autoplay
        isOpen={openVideo}
        videoId="SZEflIVnhH8"
        onClose={() => setOpenVideo(false)}
      />
    </>
  );
};

export default About;
