import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function SubmitName() {
  return (
    <div className="my-5">
      <Container>
        <Row className="submitname py-3">
          <Col className="size-2 font-weight-light mb-3 mb-lg-0 text-center text-lg-left" lg="9">
            Is there anyone else you would want us to add?
          </Col>
          <Col className="d-flex justify-content-center" lg="3">
            <Button className="rounded-0" outline color="secondary" aria-label="Submit a name">
              Submit a Name
          </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubmitName;