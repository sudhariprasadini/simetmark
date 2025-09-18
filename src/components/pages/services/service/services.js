import { Link } from "react-router-dom";
import servicesData from "../../../data/services-data";

const ServicesMain = () => {
  return (
    <>
      <div
        className="services__page section-padding-three"
        style={{ padding: "60px 0" }}
      >
        <div className="container">
          <div className="row">
            {servicesData?.map((data, id) => (
              <div
                className="col-lg-6 col-md-6"
                key={id}
                style={{ marginBottom: "35px" }}
              >
                <div
                  className="services__one-item"
                  style={{
                    padding: "32px 28px",
                    borderRadius: "14px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                    margin: "0 0 10px 0",
                  }}
                >
                  {data.icon}
                  <h4 style={{ margin: "18px 0 14px 0" }}>
                    <Link to={`/services/${data.id}`}>{data.title}</Link>
                  </h4>
                  <Link
                    className="more_btn"
                    to={`/services/${data.id}`}
                    style={{ marginTop: "10px", display: "inline-block" }}
                  >
                    Read More<i className="flaticon-right-up"></i>
                  </Link>
                </div>
              </div>
            ))}
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
