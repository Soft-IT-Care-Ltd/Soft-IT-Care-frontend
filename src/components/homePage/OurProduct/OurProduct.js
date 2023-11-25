/* eslint-disable jsx-a11y/alt-text */
import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OurVentures from "../OurVentures/OurVentures";

const OurProduct = () => {
  return (
    <>
      <section className="home__our__product">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home__our__product__content">
                <h2>Our Product</h2>
                <h4>The First Ever Automated </h4>
                <h5>ECommerce Sales Funnel</h5>
                <p>
                  Stunning product landing and website creation, hosting entire
                  website content, images, color management domains, Do powerful
                  work with this funnelliner Elementor of ours! We have got your
                  website platform A-to-Z covered.
                </p>
                {/* img */}
                <div className="home__our__product__logo">
                  <Image
                    src="/images/funnel-logo.webp"
                    width={300}
                    height={75}
                  />
                </div>
                {/* Animation video */}
                <div className="home__our__product__animation__video">
                  <Image src="/images/product.png" width={1400} height={500} />
                </div>
                <Button btnName="Learn More" btnLink="" />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="section__gaps"></div>
        {/*  ===================================
      OurProduct 
      ======================================== */}
        <OurVentures />
      </section>
    </>
  );
};

export default OurProduct;
