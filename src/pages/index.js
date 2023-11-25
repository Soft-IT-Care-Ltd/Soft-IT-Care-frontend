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

      <div className="section__gaps"></div>
      {/*  ===================================
      About 
      ======================================== */}
      <AboutUs />

      <div className="section__gaps"></div>
      {/*  ===================================
      Expricence 
      ======================================== */}
      <Expricence />

      <div className="section__gaps"></div>
      {/*  ===================================
      OurProduct 
      ======================================== */}
      <OurProduct />

      {/*  ===================================
      HomeGallery 
      ======================================== */}
      <HomeGallery />

      <div className="section__gaps"></div>
      {/*  ===================================
      WhyCustomer 
      ======================================== */}
      <WhyCustomer />

      <div className="section__gaps"></div>
      {/*  ===================================
      NextJourny 
      ======================================== */}

      <NextJourny />

      <div className="section__gaps"></div>
    </>
  );
}
