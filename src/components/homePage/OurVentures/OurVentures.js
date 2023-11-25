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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industries
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
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
