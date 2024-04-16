import Expricence from "@/components/homePage/Expricence/Expricence";
import OurProduct from "@/components/homePage/OurProduct/OurProduct";
import AboutUs from "@/components/homePage/AboutUs/AboutUs";
import Banner from "@/components/homePage/Banner/Banner";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import HomeGallery from "@/components/homePage/HomeGallery/HomeGallery";
import WhyCustomer from "@/components/homePage/WhyCustomer/WhyCustomer";
import NextJourny from "@/components/homePage/NextJourny/NextJourny";

export default function Home() {
  return (
    <>
      {/*  ===================================
      Banner 
      ======================================== */}
      <Banner />

      <div id="about-us"></div>
      <div className="section__gaps"></div>
      {/*  ===================================
      About 
      ======================================== */}
      <AboutUs />

      <div className="section__gaps"></div>
      {/*  ===================================
      Expricence 
      ======================================== */}
      <Expricence id="expricence" />

      <div className="section__gaps"></div>
      {/*  ===================================
      OurProduct 
      ======================================== */}
      <OurProduct />

      {/*  ===================================
      HomeGallery 
      ======================================== */}
      <div id="life-at-sitc"></div>
      <div className="section__gaps"></div>
      <HomeGallery />

      <div className="section__gaps"></div>
      {/*  ===================================
      WhyCustomer 
      ======================================== */}
      <WhyCustomer />
      <div id="career"></div>
      <div className="section__gaps"></div>
      {/*  ===================================
      NextJourny 
      ======================================== */}

      <NextJourny id="next-journey" />
      <div className="section__gaps"></div>
      <div id="contact-us"></div>
    </>
  );
}
