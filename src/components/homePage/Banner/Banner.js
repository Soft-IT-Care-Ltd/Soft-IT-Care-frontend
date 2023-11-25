/* eslint-disable @next/next/no-img-element */
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <>
      <section className="home__banner">
          <video autoPlay loop muted>
              <source src="/images/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        <div className="home__banner__content">
          <Container>
            <Row>
              <Col lg={12}>
                {/* text */}
                <div className="home__banner__text">
                  <h4>
                    <img
                      src="images/left-border-img.png"
                      alt="image"
                      className="left"
                    />
                    WELCOME TO SOFT IT CARE
                    <img
                      src="images/right-border-img.png"
                      alt="image"
                      className="right"
                    />
                  </h4>
                  <h1>
                    <TypeAnimation
                      preRenderFirstString={true}
                      sequence={[
                        500,
                        "", // initially rendered starting point
                        1000,
                        "High",
                        1000,
                        "High Advanced",
                        1000,
                        "High Advanced Analytics",
                        500,
                      ]}
                      speed={70}
                      repeat={Infinity}
                    />
                  </h1>
                  <h5>SOFTWARE SOLUTIONS.</h5>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="home__banner__scroll">
            <Marquee>
              <h6>
                Inventing possibilities, delivering solutions / You Can Choose
                Only The Best Experience with the power of Technology
              </h6>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
