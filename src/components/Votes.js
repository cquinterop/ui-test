import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import { getCelebrities } from '../api/services';
import Box from '../components/ui/Box';

function Votes() {
  const [data, setData] = useState([])

  useEffect(() => {
    const setCelebrities = async () => {
      try {
        const { data: celebrities } = await getCelebrities()
        setData(celebrities)
      } catch (error) {
        console.error(error)
      }
    }
    setCelebrities()
  }, [])

  return (
    <div className="my-5">
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
    </div>
  );
};

export default Votes;
