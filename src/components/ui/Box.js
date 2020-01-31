import React, { useState, useEffect } from 'react';
import {
  Col, Card, CardBody, Button, Media,
  ButtonGroup, CardFooter, Progress 
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { getVotePercentages, processVote } from '../../utils'
import { patchVote } from '../../api/services'

function Box(props) {
  const { id, name, date, description, picture, section, thumbsUp, thumbsDown } = props;
  const [hasLiked, setLike] = useState(null);
  const [hasSubmitted, setSubmission] = useState(false);
  const [likePercentage, setLikePercentage] = useState(0);
  const [dislikePercentage, setDislikePercentage] = useState(0);
  const [likeAmount, setLikeAmount] = useState(0);
  const [dislikeAmount, setDislikeAmount] = useState(0);

  const handleVoteSubmission = () => {
    const { newLikes, newDislikes } = processVote(likeAmount, dislikeAmount, hasLiked);
    const data = hasLiked ? { thumbsUp: newLikes } : { thumbsDown: newDislikes };
    patchVote(id, data);
    hasLiked ? setLikeAmount(newLikes) : setDislikeAmount(newDislikes);
    const { likePercentage, dislikePercentage } = getVotePercentages(newLikes, newDislikes);
    setLikePercentage(likePercentage);
    setDislikePercentage(dislikePercentage);
    setSubmission(true);
  }

  const handleVoteAgain = () => {
    setSubmission(false);
    setLike(null);
  }

  useEffect(() => {
    const { likePercentage, dislikePercentage } = getVotePercentages(thumbsUp, thumbsDown);
    setLikePercentage(likePercentage);
    setDislikePercentage(dislikePercentage);
    setLikeAmount(thumbsUp);
    setDislikeAmount(thumbsDown);
  }, [thumbsUp, thumbsDown]);

  return (
    <Col lg="6">
      <Card style={{ background: `url(${process.env.PUBLIC_URL + picture}) center left / cover no-repeat` }} className="border-0 text-white bg-transparent rounded-0 my-3 votingbox">
        <CardBody style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 24%, rgba(0,0,0,0.82) 100%)' }} className="d-flex p-0 pr-4 pb-3">
          <Media className="mt-auto mb-4">
            <Media className="mt-3 mr-2 d-flex size-1" style={{ backgroundColor: (likeAmount >= dislikeAmount) ? '#2cbab3' : '#ffad1d', width: '30px', height: '30px' }} left>
              <FontAwesomeIcon className="m-auto" icon={(likeAmount >= dislikeAmount) ? faThumbsUp : faThumbsDown} />
            </Media>
            <Media body>
              <Media heading>
                <span className="size-3">{name}</span>
                <p className="size-1 font-weight-light"><strong>{date}</strong> ago in {section}</p>
              </Media>
              {!hasSubmitted
                ? <Media className="size-1" body>
                  <p style={{height: '55px'}} className="font-weight-light">{description}</p>
                  <ButtonGroup>
                    <Button onClick={() => setLike(true)} className="rounded-0 border-0 mr-2 voteup--transparent" aria-label="Thumb up">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </Button>
                    <Button onClick={() => setLike(false)} className="rounded-0 border-0 mr-2 votedown--transparent flip-horizontal" aria-label="Thumb down">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </Button>
                  </ButtonGroup>
                  <Button onClick={handleVoteSubmission} className="btn-outline-light rounded-0" outline aria-label="Vote now">
                    Vote now
                </Button>
                </Media>
                : <Media className="size-1" body>
                  <p style={{height: '55px'}} className="font-weight-light">Thank you for voting!</p>
                  <Button onClick={handleVoteAgain} className="btn-outline-light rounded-0" outline aria-label="Vote again">
                    Vote again
                  </Button>
                </Media>}
            </Media>
          </Media>
        </CardBody>
        <CardFooter className="border-0 p-0">
          <Progress multi className="bg-transparent font-weight-light size-2 rounded-0 progress">
            <Progress bar value={likePercentage} max={100} className="text-left px-2 fit-content voteup--transparent">
              <div><FontAwesomeIcon icon={faThumbsUp} /> <span>{likePercentage}%</span></div>
            </Progress>
            <Progress bar value={dislikePercentage} max={100} className="text-right px-2 fit-content votedown--transparent">
              <div><span>{dislikePercentage}%</span> <FontAwesomeIcon className="flip-horizontal" icon={faThumbsDown} /></div>
            </Progress>
          </Progress>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default Box;
