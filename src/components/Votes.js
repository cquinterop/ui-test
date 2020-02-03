import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCelebritiesAction } from '../redux/actions'
import { selectCelebrities } from '../redux/selectors'
import { Container, Row, Col } from "reactstrap";
import Box from '../components/ui/Box';

function Votes() {
  const dispatch = useDispatch();
  const celebrities = useSelector(state => selectCelebrities(state)) || [];

  useEffect(() => {
    dispatch(getCelebritiesAction());
  }, [dispatch])

  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            <h2>Votes</h2>
          </Col>
        </Row>
        <Row>
          {celebrities.map(celebrity => <Box {...celebrity} key={celebrity.id} />)}
        </Row>
      </Container>
    </div>
  );
};

export default Votes;
