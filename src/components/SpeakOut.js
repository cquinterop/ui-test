import React, { useState } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

function SpeakOut() {
  const [isClosed, setClose] = useState(false);
  const handleCloser = () => setClose(true);

  return (
    !isClosed && <div className="my-5">
      <Container>
        <Jumbotron className="position-relative rounded-0 py-4">
          <Row>
            <Col className="mb-3 mb-lg-0 text-center" lg="3">
              <div className="font-weight-light">
                Speak out. Be heard.
            </div>
              <div className="size-2 font-weight-bold">
                Be counted
            </div>
            </Col>
            <Col className="size-1 font-weight-light" lg="8">
              Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
            </Col>
          </Row>
          <Button onClick={handleCloser} className="speakout__close" aria-label="Close message" close />
        </Jumbotron>
      </Container>
    </div>
  );
};

export default SpeakOut;