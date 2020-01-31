import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function SubmitName() {
  return (
    <div className="my-5">
      <Container>
        <div className="submitname p-3">
          <Row >
            <Col className="size-2 font-weight-light mb-3 mb-lg-0 text-center text-lg-left" lg="9">
              Is there anyone else you would want us to add?
          </Col>
            <Col className="d-flex justify-content-center" lg="3">
              <Button className="btn-lg btn-outline-dark rounded-0" outline aria-label="Submit a name">
                Submit a Name
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SubmitName;