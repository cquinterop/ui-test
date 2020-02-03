import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, CardBody, Button, Media,
  ButtonGroup, CardFooter, Progress
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { getVotePercentages, processVote } from '../../utils';
import { patchVote } from '../../api/services';

function Box(props) {
  const { id, name, date, description, picture, section, thumbsUp, thumbsDown } = props;

  const [hasLiked, setLike] = useState(null);
  const [hasSubmitted, setSubmission] = useState(false);
  const [percentages, setPercentages] = useState({ thumbsUp: 0, thumbsDown: 0 });
  const [votes, setVotes] = useState({ thumbsUp: 0, thumbsDown: 0 });

  useEffect(() => {
    setVotes({ thumbsUp, thumbsDown });
    const { likePercentage, dislikePercentage } = getVotePercentages(thumbsUp, thumbsDown);
    setPercentages({ thumbsUp: likePercentage, thumbsDown: dislikePercentage });
  }, [thumbsUp, thumbsDown]);

  const handleVoteSubmission = async () => {
    try {
      const vote = processVote(hasLiked, votes, 1);
      const { data: responseVotes } = await patchVote(id, vote);
      const responseVote = processVote(hasLiked, responseVotes);
      setVotes(state => ({...state, ...responseVote}));
      const { likePercentage, dislikePercentage } = getVotePercentages(responseVotes.thumbsUp, responseVotes.thumbsDown);
      setPercentages({ thumbsUp: likePercentage, thumbsDown: dislikePercentage });
      setSubmission(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVoteAgain = () => {
    setSubmission(false);
    setLike(null);
  };

  return (
    <Col lg="6">
      <Card style={{ background: `url(${process.env.PUBLIC_URL + picture}) center left / cover no-repeat` }} className="border-0 text-white bg-transparent rounded-0 my-3 votingbox">
        <CardBody className="d-flex p-0 pr-4 pb-3 box--gradient">
          <Media className="mt-auto mb-4">
            <Media className="mt-3 mr-2 d-flex font-size-1" style={{ backgroundColor: (percentages.thumbsUp >= percentages.thumbsDown) ? '#2cbab3' : '#ffad1d', width: '30px', height: '30px' }} left>
              <FontAwesomeIcon className="m-auto" icon={(percentages.thumbsUp >= percentages.thumbsDown) ? faThumbsUp : faThumbsDown} />
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
                    <Button onClick={() => setLike(true)} active={hasLiked} className="rounded-0 border-0 mr-2 thumbup--transparent" aria-label="Thumb up">
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </Button>
                    <Button onClick={() => setLike(false)} active={hasLiked === false} className="rounded-0 border-0 mr-2 thumbdown--transparent flip-horizontal" aria-label="Thumb down">
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </Button>
                  </ButtonGroup>
                  <Button onClick={() => hasLiked !== null && handleVoteSubmission()} className="btn-outline-light rounded-0" outline aria-label="Vote now">
                    Vote now
                </Button>
                </Media>
                : <Media className="font-size-1" body>
                  <p style={{ height: '57px' }} className="font-weight-light">Thank you for voting!</p>
                  <Button onClick={handleVoteAgain} className="btn-outline-light rounded-0" outline aria-label="Vote again">
                    Vote again
                  </Button>
                </Media>}
            </Media>
          </Media>
        </CardBody>
        <CardFooter className="border-0 p-0">
          <Progress multi className="bg-transparent font-weight-light font-size-2 rounded-0">
            <Progress bar value={percentages.thumbsUp} max={100} className="text-left px-2 fit-content thumbup--transparent">
              <div><FontAwesomeIcon icon={faThumbsUp} /> <span>{percentages.thumbsUp}%</span></div>
            </Progress>
            <Progress bar value={percentages.thumbsDown} max={100} className="text-right px-2 fit-content thumbdown--transparent">
              <div><span>{percentages.thumbsDown}%</span> <FontAwesomeIcon className="flip-horizontal" icon={faThumbsDown} /></div>
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
  thumbsUp: PropTypes.number.isRequired,
  thumbsDown: PropTypes.number.isRequired,
};
