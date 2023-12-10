import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <section id="#about" className="home__about">
        <Container>
          <Row className="d_flex">
            {/* img */}
            <Col lg={6}>
              <div className="home__about__img">
                <Image
                  src="/images/about_us.jpeg"
                  width={750}
                  height={450}
                  alt="about-img"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="home__about__text">
                <h4>Get To Know</h4>
                <h2>
                  About <span>Us</span>
                </h2>
                <h3>Bangladesh-based software consultant agency.</h3>
                <p>
                  Soft IT Care is a Web design and development service providing
                  company in Bangladesh. It has versatile functions. It is the
                  only Best Web Design and Development Company which has all in
                  one. We specialize in Software Development, e-Commerce,
                  Graphic Design, Marketing and SEO, Website Security, Mobile
                  Application Development, and the list goes on.
                </p>
                <Button btnLink="#" btnName="Discover More" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
