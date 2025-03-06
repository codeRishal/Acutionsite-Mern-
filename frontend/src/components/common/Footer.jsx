import { Container, PrimaryButton, ProfileCard, Title } from "./Design";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import React from 'react';
export const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-primary position-relative py-5 mt-5">
      {isHomePage && (
        <div className="bg-white w-100 py-5 position-absolute top-0 rounded-bottom" 
             style={{ marginTop: '-2.5rem' }}
        />
      )}

      <Container className={`${isHomePage ? 'mt-5' : ''}`}>
        <Row className="gy-4">
          <Col md={4}>
            <img src="../images/common/header-logo.png" alt="Logo" className="mb-3" />
            <p className="text-light">Created with the collaboration of over 60 of the worlds best Nuron Artists.</p>
            <hr className="my-4" />
            <Title className="text-light fw-normal">Get The Latest Nuron Updates</Title>
            <InputGroup className="mt-3">
              <Form.Control
                placeholder="Enter your email"
                className="rounded-start"
              />
              <PrimaryButton className="rounded-end">Submit</PrimaryButton>
            </InputGroup>
            <small className="text-light mt-2 d-block">Email is safe. We dont spam.</small>
          </Col>

          <Col md={8}>
            <Row className="gy-4">
              <Col xs={6} md={3}>
                <Title level={5} className="text-white fw-normal">Auction Categories</Title>
                <ul className="list-unstyled mt-4 text-light">
                  {['Ending Now', 'Vehicles', 'Watches', 'Electronics', 'Real Estate', 'Jewelry', 'Art', 'Sports & Outdoor']
                    .map((item, i) => <li key={i} className="mb-3">{item}</li>)}
                </ul>
              </Col>

              <Col xs={6} md={3}>
                <Title level={5} className="text-white fw-normal">About Us</Title>
                <ul className="list-unstyled mt-4 text-light">
                  {['About Sbidu', 'Help', 'Affiliates', 'Jobs', 'Press', 'Our blog', 'Collectors portal']
                    .map((item, i) => <li key={i} className="mb-3">{item}</li>)}
                </ul>
              </Col>

              <Col xs={6} md={3}>
                <Title level={5} className="text-white fw-normal">We are Here to Help</Title>
                <ul className="list-unstyled mt-4 text-light">
                  {['Your Account', 'Safe and Secure', 'Shipping Information', 'Contact Us', 'Help & FAQ']
                    .map((item, i) => <li key={i} className="mb-3">{item}</li>)}
                </ul>
              </Col>

              <Col xs={6} md={3}>
                <Title level={5} className="text-white fw-normal">Follow Us</Title>
                <div className="d-flex justify-content-between mt-4">
                  {[AiOutlineYoutube, FaInstagram, CiTwitter, CiLinkedin].map((Icon, i) => (
                    <ProfileCard key={i} className="bg-white">
                      <Icon size={22} />
                    </ProfileCard>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};