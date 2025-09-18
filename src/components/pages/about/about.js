import { Link } from "react-router-dom";
import image from "../../assets/img/about/about-4.jpg";
import bgImage from "../../assets/img/portfolio/portfolio-8.png";

const AboutMain = () => {
  return (
    <>
      <div className="mission__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 lg-mb-25">
              <div className="mission__area-left mr-40 xl-mr-0">
                <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                  who we are
                </span>
                <h2 className="title_split_anim">
                  At Simetmark (Pvt) Ltd, we blend innovation, technology, and
                  expertise to provide world-class manufacturing solutions.
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission__area-right">
                <div className="row">
                  <div
                    className="col-md-6 md-mb-25 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="experience__area-list-item">
                      <i className="flaticon-team"></i>
                      <div className="experience__area-list-item-content">
                        <h4>OUR MISSION</h4>
                        <p>
                          Excellence, integrity, customer focus, collaboration,
                          and safety drive everything we do.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInUp" data-wow-delay=".9s">
                    <div className="experience__area-list-item">
                      <i className="flaticon-technology"></i>
                      <div className="experience__area-list-item-content">
                        <h4>OUR VISSION</h4>
                        <p>
                          “To become a trusted engineering solutions provider
                          known for precision machining, innovation, and
                          reliability in the global market.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__five section-padding pt-0">
        <div className="container">
          <div className="row al-center">
            <div className="col-lg-5 lg-mb-25">
              <div className="about__five-image wow img_left_animation">
                <img src={image} alt="image" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about__five-right ml-70 xl-ml-0">
                <div className="about__five-right-title">
                  <span
                    className="subtitle wow fadeInLeft"
                    data-wow-delay=".4s"
                  >
                    Why Choose Us
                  </span>
                  <h2 className="title_split_anim">
                    Trusted Partner in Construction and Design
                  </h2>
                </div>
                <div
                  className="features wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                  <h3>
                    Building Trust
                    <br />
                    Since 1989
                  </h3>
                </div>
                <ul className="wow fadeInUp" data-wow-delay=".6s">
                  <li>Responsive to Economic Trends</li>
                  <li>Strategic Diversification</li>
                  <li>Value-Added Exports (40%+)</li>
                  <li>Commitment to Sustainability</li>
                </ul>
                <div className="item_bounce">
                  <Link className="build_button mt-20" to="/portfolio">
                    See Projects<i className="flaticon-right-up"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
