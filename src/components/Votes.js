import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Boxes from '../components/ui/Boxes';

function Votes() {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            <h2>Votes</h2>
          </Col>
        </Row>
        <Row>
          <Boxes />
        </Row>
      </Container>
    </div>
  );
};

export default Votes;
