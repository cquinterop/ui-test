import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, CardBody, Button, Media,
  ButtonGroup, CardFooter, Progress
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function Box(props) {
  const { id, name, date, description, picture, section, hasLiked, hasSubmitted, hasErrors, handleVote, handleVoteSubmission, handleVoteAgain, likePercentage, dislikePercentage } = props;

  return (
    <Col lg="6">
      <Card style={{ background: `url(${process.env.PUBLIC_URL + picture}) center left / cover no-repeat` }} className="border-0 text-white bg-transparent rounded-0 my-3 votingbox">
        <CardBody className="d-flex p-0 pr-4 pb-3 box--gradient">
          <Media className="mt-auto mb-4">
            <Media className="mt-3 mr-2 d-flex font-size-1" style={{ backgroundColor: (likePercentage >= dislikePercentage) ? '#2cbab3' : '#ffad1d', width: '30px', height: '30px' }} left>
              <FontAwesomeIcon className="m-auto" icon={(likePercentage >= dislikePercentage) ? faThumbsUp : faThumbsDown} />
            </Media>
            <Media body>
              <Media heading>
                <span className="font-size-3">{name}</span>
                <p className="font-size-1 font-weight-light"><strong>{date}</strong> ago in {section}</p>
              </Media>
              {!hasSubmitted
                ? <Media className="font-size-1" body>
                  <p style={{ height: '55px' }} className="font-weight-light">{description}</p>
                  <ButtonGroup>
                    <Button onClick={e => handleVote(id, e.currentTarget.value)} value="up" active={hasLiked} className="rounded-0 border-0 mr-2 thumbup--transparent" aria-label="Thumb up">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </Button>
                    <Button onClick={e => handleVote(id, e.currentTarget.value)} value="down" active={hasLiked === false} className="rounded-0 border-0 mr-2 thumbdown--transparent flip-horizontal" aria-label="Thumb down">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </Button>
                  </ButtonGroup>
                  <Button onClick={() => hasLiked !== null && handleVoteSubmission(id)} className="btn-outline-light rounded-0" outline aria-label="Vote now">
                    Vote now
                </Button>
                </Media>
                : <Media className="font-size-1" body>
                  <p style={{ height: '57px' }} className="font-weight-light">{hasErrors ? 'Sorry, there was an error while processing your vote.' : 'Thank you for voting!'}</p>
                  <Button onClick={() => handleVoteAgain(id)} className="btn-outline-light rounded-0" outline aria-label="Vote again">
                    {hasErrors ? 'Try again' : 'Vote again'}
                  </Button>
                </Media>}
            </Media>
          </Media>
        </CardBody>
        <CardFooter className="border-0 p-0">
          <Progress multi className="bg-transparent font-weight-light font-size-2 rounded-0">
            <Progress bar value={likePercentage} max={100} className="text-left px-2 fit-content thumbup--transparent">
              <div><FontAwesomeIcon icon={faThumbsUp} /> <span>{likePercentage}%</span></div>
            </Progress>
            <Progress bar value={dislikePercentage} max={100} className="text-right px-2 fit-content thumbdown--transparent">
              <div><span>{dislikePercentage}%</span> <FontAwesomeIcon className="flip-horizontal" icon={faThumbsDown} /></div>
            </Progress>
          </Progress>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default Box;

Box.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  hasLiked: PropTypes.oneOfType([ PropTypes.number, PropTypes.bool]),
  hasSubmitted: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool,
  handleVote: PropTypes.func.isRequired,
  handleVoteSubmission: PropTypes.func.isRequired,
  handleVoteAgain: PropTypes.func.isRequired,
  likePercentage: PropTypes.number.isRequired,
  dislikePercentage: PropTypes.number.isRequired,
};
