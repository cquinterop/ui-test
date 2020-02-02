import React from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Card, Button, CardText } from 'reactstrap';

function PageNotFound() {
  const history = useHistory();
  return (
    <Container>
      <Row>
        <Col className="mx-auto mt-5" xs="6">
          <Card className="text-center">
            <CardText className="font-size-3 font-weigth-bold" >Error 404</CardText>
            <CardText>page not found</CardText>
            <Button onClick={() => history.goBack()}>
              Go Back
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PageNotFound;
