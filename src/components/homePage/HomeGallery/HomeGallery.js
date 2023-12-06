/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ImageData1, ImageData2, ImageData3, ImageData4 } from "./Data";

const HomeGallery = () => {
  return (
    <>
      <section className="home__gallery">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home__gallery__content">
                <h2>
                  Media & <span>Gallery</span>
                </h2>
                <div className="home__gallery__tabs">
                  <Tabs
                    defaultActiveKey="office"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="office" title="Office Party">
                      <Row>
                        {ImageData1?.map((data, i) => (
                          <Col sm={6} lg={4} key={i}>
                            <div className="home__gallery__item">
                              <img src={data.image} alt="gallery" />
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab>
                    <Tab eventKey="annual" title="Annual Tour">
                      <Row>
                        {ImageData2?.map((data, i) => (
                          <Col sm={6} lg={4} key={i}>
                            <div className="home__gallery__item">
                              <img src={data.image} alt="gallery" />
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab>
                    <Tab eventKey="birthday" title="Birthday">
                      <Row>
                        {ImageData3?.map((data, i) => (
                          <Col sm={6} lg={4} key={i}>
                            <div className="home__gallery__item">
                              <img src={data.image} alt="" />
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab>
                    <Tab eventKey="fun" title="Fun Time">
                      <Row>
                        {ImageData4?.map((data, i) => (
                          <Col sm={6} lg={4} key={i}>
                            <div className="home__gallery__item">
                              <img src={data.image} alt="" />
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeGallery;
