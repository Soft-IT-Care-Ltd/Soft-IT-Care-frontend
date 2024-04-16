import Call from "@/Svgs/Call";
import Facebook from "@/Svgs/Facebook";
import FooterLogo from "@/Svgs/FooterLogo";
import Instagram from "@/Svgs/Instagram";
import Linkdin from "@/Svgs/Linkdin";
import Location from "@/Svgs/Location";
import Sms from "@/Svgs/Sms";
import Twitter from "@/Svgs/Twitter";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowReturnRight } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    
    <>
      <section className="footer">
        <Container>
          <div className="footer__content">
            <Row>
              <Col lg={4}>
                <div className="footer__logo">
                  <FooterLogo />
                </div>
                <h4>Follow us</h4>
                <div className="social__icons">
                  <Link href="https://www.facebook.com/softitcare" target="_blank">
                    <Facebook />
                  </Link>
                  <Link href="https://twitter.com/SoftITCare" target="_blank">
                    <Twitter />
                  </Link>
                  <Link href="https://instagram.com/softitcare_com" target="_blank">
                    <Instagram />
                  </Link>
                  <Link href="https://www.linkedin.com/company/softitcarebd" target="_blank">
                    <Linkdin />
                  </Link>
                </div>
              </Col>
              <Col lg={8}>
                <Row>
                  <Col sm={3} lg={3}>
                    <h4> Pages </h4>
                    <ul className="footer__link">
                      <li>
                        <Link href="">
                          <BsArrowReturnRight /> Our Brands
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <BsArrowReturnRight /> Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <BsArrowReturnRight /> Career
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <BsArrowReturnRight /> Services
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <BsArrowReturnRight /> Blog
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={3} lg={3}>
                    <h4> Terms </h4>
                    <ul className="footer__link">
                      <li>
                        <Link href="">
                          <BsArrowReturnRight /> Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <BsArrowReturnRight /> Site Map
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <BsArrowReturnRight /> Terms & Conditions
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col sm={6} lg={6}>
                    <h4> Contact Us </h4>
                    <ul className="footer__link">
                      <li>
                        <Link href="tel:01799733234">
                          <Call /> +8801799733234
                        </Link>
                      </li>
                      <li>
                        <Link href="">
                          <Sms /> contact@softitcare.com
                        </Link>
                      </li>
                      <li>
                        <p>
                          <Location /> House No # 17, Road No # 8/A, Nikunja #1,
                          Dhaka - 1229, Bangladesh
                        </p>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="tiny__footer">
        <Container>
          <Row>
            <Col lg={12}>
              <p>
              Copyright &copy; 2016 - {currentYear} Soft IT Care. All rights reserved. Soft IT Care™ is a registered trademark.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
