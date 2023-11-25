/* eslint-disable @next/next/no-img-element */
import Button from "@/components/common/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhyCustomer = () => {
  return (
    <>
      <section className="why__customer">
        <Container>
          <Row className="d_flex">
            <Col lg={12}>
              <h2>
                Why Customers Select <span>Soft IT Care</span>
              </h2>
            </Col>
            <Col lg={6}>
              <div className="why__customer__content">
                <h3>Best Web Design and Development Company In Bangladesh</h3>
                <p>
                  Soft IT Care is a Web design and development service providing
                  company in Bangladesh. It has versatile functions. It is the
                  only Best Web Design and Development Company which has all in
                  one. We specialize in Software Development, e-Commerce,
                  Graphic Design, Marketing and SEO, Website Security, Mobile
                  Application Development, and the list goes on.
                </p>
                <p>
                  The projects we provide are unique and creative. From the very
                  beginning to till now, we have been working in this field with
                  the highest success and client satisfaction. Our team is
                  highly expert and we use digital technology to provide
                  services. We provide the best Web Design and Development full
                  services with an inexpensive range and deliver the projects in
                  time. Our team is responsible, accountable, effective, and
                  efficient. We promote honesty, integrity, and sincerity as
                  well.
                </p>
                <Button btnLink="#" btnName="Discover More" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="why__customer__img">
                <img src="/images/customer-select.webp" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyCustomer;
