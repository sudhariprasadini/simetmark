import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import PricingPlansMain from "./pricing-plans";
import FooterOne from "../../layout/footers/footer-one";

const PricingPages = () => {
  return (
    <>
      <SEO pageTitle="Technologies" />
      <HeaderTwo />
      <BreadCrumb title="Technologies" innerTitle="Technologies" />
      <PricingPlansMain />
      <FooterOne />
    </>
  );
};

export default PricingPages;
