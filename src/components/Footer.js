import React from "react";
import {
  NavItem, NavLink, Nav,
  Container, Row, Col,
  UncontrolledTooltip
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
      <footer>
        <Container>
          <hr className="dotted" />
          <Row>
            <Col className="d-flex justify-content-center justify-content-md-start" md="8">
              <Nav>
                <NavItem>
                  <NavLink className="font-weight-light text-secondary size-1" href="#">
                  <small>Terms and Conditions</small>
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-light text-secondary size-1" href="#">
                  <small>Privacy Policy</small>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="font-weight-light text-secondary size-1" href="#">
                  <small>Terms and Conditions</small>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col className="d-flex justify-content-center justify-content-md-end" md="4">
              <Nav>
                <div className="pt-2 font-weight-light text-secondary size-1" >
                  <small>Follow us</small>
                </div>
                <NavItem>
                  <NavLink className="text-secondary" href="#" id="tooltipfacebook" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                  <UncontrolledTooltip target="tooltipfacebook">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink className="text-secondary" href="#" id="twittertooltip" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </NavLink>
                  <UncontrolledTooltip target="twittertooltip">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;
