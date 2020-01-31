import React from 'react';
import {
  Col, Card, CardBody, Button,
  ButtonGroup, CardFooter,
  Progress, Media
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

function Box({ name, date, description, picture, section }) {
  return (
    <Col lg="6">
      <Card style={{ background: `url(${process.env.PUBLIC_URL + picture}) center left / cover no-repeat`, height: "550px" }} className="border-0 text-white bg-transparent rounded-0 my-5">
        <CardBody style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 24%, rgba(0,0,0,0.82) 100%)' }} className="d-flex p-0 pr-4 pb-3">
          <Media className="mt-auto mb-4">
            <Media className="mt-1 mr-2 d-flex size-1" style={{ backgroundColor: '#ffad1d', width: '30px', height: '30px' }} left>
              <FontAwesomeIcon className="m-auto" icon={faThumbsUp} />
            </Media>
            <Media body>
              <Media heading>
                <span className="size-2">{name}</span>
                <p className="size-1 font-weight-light"><strong>{date}</strong> ago in {section}</p>
              </Media>
              <Media className="size-1" body>
                <p className="font-weight-light">{description}</p>
                <ButtonGroup>
                  <Button className="rounded-0 border-0 mr-2 vote--up" aria-label="Thumb up">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </Button>
                  <Button className="rounded-0 border-0 mr-2 vote--down flip-horizontal" aria-label="Thumb down">
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </Button>
                </ButtonGroup>
                <Button className="btn-outline-light rounded-0" outline aria-label="Vote now">
                  Vote Now
                </Button>
              </Media>
            </Media>
          </Media>
        </CardBody>
        <CardFooter className="border-0 p-0">
          <Progress multi className="bg-transparent font-weight-light size-2 rounded-0" style={{ height: "50px" }}>
            <Progress bar value={50} max={100} className="text-left pl-2 fit-content vote--up">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} /> <span>64%</span>
              </div>
            </Progress>
            <Progress bar value={50} max={100} className="text-right pr-2 fit-content vote--down">
              <div>
                <span>64%</span>
                <FontAwesomeIcon className="flip-horizontal" icon={faThumbsDown} />
              </div>
            </Progress>
          </Progress>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default Box;
