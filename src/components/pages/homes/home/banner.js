import React from "react";
import award from "../../../assets/img/shape/award.png";
import image from "../../../assets/img/banner/banner.jpg";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <div className="banner__one" style={{ backgroundImage: `url(${image})` }}>
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
                    Request a Quote<i className="flaticon-right-up"></i>
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
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
                <img src={award} alt="imageAward" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
