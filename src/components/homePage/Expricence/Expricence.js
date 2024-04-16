/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Expricence = () => {
  return (
    <>
      <section className="home__exprience">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="home__exprience__content">
                {/* item */}
                <div className="home__exprience__item">
                  <h4>55+</h4>
                  <p>Team Members</p>
                </div>
                <div className="home__exprience__item__bdr">
                  <img src="/images/shaps/bdr.png" alt="bdr" />
                </div>
                {/* item */}
                <div className="home__exprience__item">
                  <h4>3</h4>
                  <p>Offices</p>
                </div>
                <div className="home__exprience__item__bdr">
                  <img src="/images/shaps/bdr.png" alt="bdr" />
                </div>
                {/* item */}
                <div className="home__exprience__item">
                  <h4>5 + </h4>
                  <p>Years Experience</p>
                </div>
                <div className="home__exprience__item__bdr">
                  <img src="/images/shaps/bdr.png" alt="bdr" />
                </div>
                {/* item */}
                <div className="home__exprience__item">
                  <h4>7000+</h4>
                  <p>Happy Clients</p>
                </div>
                <div className="home__exprience__item__bdr">
                  <img src="/images/shaps/bdr.png" alt="bdr" />
                </div>
                {/* item */}
                <div className="home__exprience__item">
                  <h4>4</h4>
                  <p>Associate Ventures</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Expricence;
