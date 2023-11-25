import Button from "@/components/common/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NextJourny = () => {
  return (
    <>
      <section className="next__journy">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="next__journy__content">
                <h2>
                  Want To Be Ready for The Next Journey With
                  <span>Soft IT Care</span> ?
                </h2>
                <Button btnLink="#" btnName="Read More" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NextJourny;
