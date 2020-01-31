import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import Box from '../components/ui/Box';

const getCelebrities = () => axios('http://localhost:3001/data')

function Votes() {
  const [data, setData] = useState([])
  useEffect(() => {
    const test = async () => {
      try {
        const { data: celebrities } = await getCelebrities()
        setData(celebrities)
      } catch (error) {
        console.error(error)
      }
    }
    test()
  }, [])
  return (
    <Container>
      <Row>
        <Col>
          <h2>Votes</h2>
        </Col>
      </Row>
      <Row>
        {data.map(item => <Box {...item} key={item.id} />)}
      </Row>
    </Container>
  );
};

export default Votes;
