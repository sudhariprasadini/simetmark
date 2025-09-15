import React from "react";
import bannerBg from "../../../assets/img/shape/banner-shape.png";
import user from "../../../assets/img/avatar/user.png";
import award from "../../../assets/img/shape/award.png";
import image from "../../../assets/img/banner/banner.jpg";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <div
      className="banner__one"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="banner__one-content">
              <h1 className="wow fadeInRight" data-wow-delay=".4s">
                Precision Engineering for a Stronger Tomorrow
              </h1>
              <div
                className="banner__one-content-user wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="wow fadeInDown" data-wow-delay="1.2s">
                  <Link className="build_button mt-50" to="/request-quote">
                    Start Today<i className="flaticon-right-up"></i>
                  </Link>
                </div>
                <div>
                  <div>
                    <h5>CNC Machining</h5>
                  </div>
                  <div>
                    <h5>Steel Forging</h5>
                  </div>
                  <div>
                    <h5>Advanced Manufacturing</h5>
                  </div>
                </div>
              </div>
              <div className="banner__one-content-award bounce_y">
                <img src={award} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__one-image">
        <img className="img_full" src={image} alt="image" />
      </div>
    </div>
  );
};

export default BannerOne;
