/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@/components/common/Button";

const OurVentures = () => {
  return (
    <>
      <section className="home__our__ventures">
        <Container>
          <div className="home__our__ventures__content__overlay">
            <img src="/images/shaps/shap1.png" alt="shap1" />
          </div>
          <Row>
            <Col lg={12}>
              <div className="home__our__ventures__content">
                <h2>
                  Our <span>Ventures</span>
                </h2>
                <p>
                At Soft IT Care Ventures, we are on a mission to catalyze innovation, empower visionaries, and shape the future. Our venture arm is the heartbeat of groundbreaking ideas, where we embrace the spirit of entrepreneurs, businessman & massive people and fuel the journey of promising ventures.
                </p>
                <Button btnName="Learn More" btnLink="" />

                <div className="home__our__ventures__sub__brands">
                  {/* item */}
                  <div className="home__our__ventures__sub__brands__img">
                    <img src="images/funnel.webp" alt="funnel" />
                  </div>
                  {/* item */}
                  <div className="home__our__ventures__sub__brands__img">
                    <img src="images/giftvaly.webp" alt="giftvaly" />
                  </div>
                  {/* item */}
                  <div className="home__our__ventures__sub__brands__img">
                    <img src="images/hostweb.webp" alt="hostweb" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurVentures;
