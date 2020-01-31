import React from 'react';
import {
  Container, Row, Col, Card, CardText, CardBody,
  CardTitle, Button, ButtonGroup, CardFooter, CardLink
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

function MainRuling() {
  return (
    <Container>
      <Row>
        <Col md="6">
          <Card className="text-white bg-transparent rounded-0 my-5 p-0">
            <CardBody className="p-4 dark-blur-background">
              <CardTitle>
                <h1>
                  <small className="d-block font-weight-light size-1">
                    What’s your opinion on
                  </small>
                  <span className="size-3">
                    Pope Francis?
                  </span>
                </h1>
              </CardTitle>
              <CardText className="font-weight-light">
                He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
              </CardText>
              <CardLink className="size-1 text-white d-block mb-4" href="#">
                <FontAwesomeIcon icon={faWikipediaW} />
                <small className="font-weight-light ml-1 underline">More information</small>
              </CardLink>
              <CardText className="font-weight-bold">
                What’s Your Verdict?
              </CardText>
            </CardBody>
            <CardFooter className="border-0 p-0">
              <ButtonGroup className="col-12 p-0 hero__vote">
                <Button className="border-0 rounded-0 hero__vote voteup--transparent size-2" aria-label="Thumb up">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </Button>
                <Button className="border-0 rounded-0 hero__vote votedown--transparent size-2 flip-horizontal" aria-label="Thumb down">
                  <FontAwesomeIcon icon={faThumbsDown} />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainRuling;
