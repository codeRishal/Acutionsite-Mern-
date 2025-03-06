import { IoIosSearch } from "react-icons/io";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";
import { Container, Row, Col, Form, Button, Image, Card } from 'react-bootstrap';
import PropTypes from "prop-types";
import React from 'react';

export const User1 = "https://cdn-icons-png.flaticon.com/128/6997/6997662.png";
export const User2 = "https://cdn-icons-png.flaticon.com/128/236/236832.png";
export const User3 = "https://cdn-icons-png.flaticon.com/128/236/236831.png";
export const User4 = "https://cdn-icons-png.flaticon.com/128/1154/1154448.png";

export const Hero = () => {
  return (
    <>
      <section className="bg-primary py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-white pe-md-5">
              <h3 className="text-white">Build, sell & collect digital items.</h3>
              <p className="text-light my-4">
                Nulla facilisi. Maecenas ac tellus ut ligula interdum convallis. Nullam dapibus on erat in dolor posuere, none hendrerit lectus ornare. Suspendisse sit amet turpina sagittis, ultrices
                dui et, aliquam urna.
              </p>
              <SearchBox />
              <Row className="my-4 g-4">
                {[
                  { number: '842M', text: 'Total Product' },
                  { number: '842M', text: 'Total Auction' },
                  { number: '54', text: 'Total Category' }
                ].map((item, index) => (
                  <Col key={index} xs={4}>
                    <h4 className="text-white">{item.number}</h4>
                    <p className="text-light">{item.text}</p>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col md={6} className="position-relative py-5">
              <Image src="../images/home/hero.webp" alt="" fluid />
              
              <div className="position-absolute top-25 start-0 horiz-move">
                <Box title="Proof of quality" desc="Lorem Ipsum Dolar Amet" />
              </div>
              <div className="position-absolute bottom-50 end-0 horiz-move">
                <Box title="Safe and secure" desc="Lorem Ipsum Dolar Amet" />
              </div>

              <Card className="shadow-sm p-3 mx-4 mt-n3 vert-move w-75">
                <div className="d-flex align-items-center justify-content-between">
                  <h5>58M Happy Client</h5>
                  <div className="d-flex align-items-center">
                    {[User1, User2, User3, User4].map((user, index) => (
                      <div key={index} className="rounded-circle border border-2 border-white ms-n2" style={{width: '40px', height: '40px', overflow: 'hidden'}}>
                        <Image src={user} alt={`User${index + 1}`} fluid className="h-100 w-100 object-fit-cover" />
                      </div>
                    ))}
                    <div className="rounded-circle border border-2 border-white ms-n2 d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}>
                      <CiCirclePlus size={27} />
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="bg-white py-5 rounded-top" style={{marginTop: '-2rem'}}></div>
    </>
  );
};

const SearchBox = () => {
  return (
    <Form>
      <Form.Group className="position-relative">
        <div className="position-absolute start-0 top-50 translate-middle-y ps-4">
          <IoIosSearch color="black" size={25} />
        </div>
        <Form.Control
          type="search"
          placeholder="Search product..."
          className="py-3 ps-5 rounded-pill shadow-sm"
        />
        <Button 
          variant="success"
          className="position-absolute end-0 top-50 translate-middle-y me-2"
        >
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

const Box = ({ title, desc }) => {
  return (
    <Card className="shadow-sm p-3">
      <div className="d-flex align-items-center gap-3">
        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{width: '56px', height: '56px'}}>
          <AiOutlinePropertySafety size={27} className="text-primary" />
        </div>
        <div>
          <h5 className="mb-1">{title}</h5>
          <small>{desc}</small>
        </div>
      </div>
    </Card>
  );
};

Box.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};