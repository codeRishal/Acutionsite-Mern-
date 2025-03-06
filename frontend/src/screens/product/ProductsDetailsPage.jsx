import { Container, Row, Col, Image, Card, Button, Form, Nav, Table } from 'react-bootstrap';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import React from 'react';

export const ProductsDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="pt-5">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <Image 
              src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg" 
              alt="" 
              className="w-100 h-100 object-fit-cover rounded"
              style={{ height: '70vh' }}
            />
          </Col>
          <Col md={6}>
            <h2 className="text-capitalize">Couple Wedding Ring</h2>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="text-success">
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStar size={20} />
                <IoIosStarHalf size={20} />
                <IoIosStarOutline size={20} />
              </div>
              <span className="text-muted">(2 customer reviews)</span>
            </div>

            <p>Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
            
            <div className="mb-3">
              <p className="mb-1">Item condition: New</p>
              <p className="mb-1">Item Verified: Yes</p>
              <p>Time left:</p>
            </div>

            <Row className="g-3 text-center mb-4">
              {[
                { value: '149', label: 'Days' },
                { value: '12', label: 'Hours' },
                { value: '36', label: 'Minutes' },
                { value: '51', label: 'Seconds' }
              ].map((item, index) => (
                <Col key={index} xs={6} md={3}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <h4>{item.value}</h4>
                      <small className="text-muted">{item.label}</small>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="mb-3">
              <p className="mb-2">Auction ends: <span className="text-muted">December 31, 2024 12:00 am</span></p>
              <p className="mb-2">Timezone: <span className="text-muted">UTC 0</span></p>
              <p className="mb-2">Price: <span className="text-muted">$200</span></p>
              <p>Current bid: <span className="h3">$500</span></p>
            </div>

            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Form className="d-flex gap-3">
                  <Form.Control type="number" name="price" />
                  <Button variant="light">
                    <AiOutlinePlus />
                  </Button>
                  <Button variant="secondary" disabled>Submit</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mt-5">
          <Nav className="gap-3 mb-4">
            {['description', 'auctionHistory', 'reviews', 'moreProducts'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "success" : "light"}
                onClick={() => handleTabClick(tab)}
                className="shadow-sm"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'reviews' && ' (2)'}
              </Button>
            ))}
          </Nav>

          <Card className="shadow-sm">
            <Card.Body>
              {activeTab === "description" && (
                <DescriptionTab />
              )}
              {activeTab === "auctionHistory" && <AuctionHistory />}
              {activeTab === "reviews" && (
                <div>
                  <h5 className="fw-normal">Reviews</h5>
                  <hr className="my-4" />
                  <h5 className="fw-normal text-danger">Coming Soon!</h5>
                </div>
              )}
              {activeTab === "moreProducts" && (
                <div>
                  <h1>More Products</h1>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

const DescriptionTab = () => (
  <>
    <h4>Description</h4>
    <p className="my-4">
      If you've been following the crypto space, you've likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as 'Crypto Collectibles.' The world of Biddings is growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to create and capture value. The market is open for players in every kind of field. Are you a collector.
    </p>
    <p className="mb-4">
      If you've been following the crypto space, you've likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as 'Crypto Collectibles.' The world of Biddings is growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to create and capture value. The market is open for players in every kind of field. Are you a collector.
    </p>

    <h4>Product Overview</h4>
    <Row className="mt-4 g-4">
      <Col md={6}>
        {[
          { label: 'Category', value: 'Category' },
          { label: 'Height', value: '200 (cm)' },
          { label: 'Length', value: '300 (cm)' },
          { label: 'Width', value: '400 (cm)' },
          { label: 'Weight', value: '50 (kg)' },
          { label: 'Medium used', value: 'Gold' },
          { label: 'Price', value: '$50000' },
          { label: 'Sold out', value: 'Yes' },
          { label: 'Verify', value: 'No' },
          { label: 'Created At', value: 'December 31, 2024 12:00 am' },
          { label: 'Updated At', value: 'December 31, 2024 12:00 am' }
        ].map((item, index) => (
          <div key={index} className="d-flex justify-content-between py-3 border-bottom">
            <span className="text-capitalize">{item.label}</span>
            <span className="text-muted">{item.value}</span>
          </div>
        ))}
      </Col>
      <Col md={6}>
        <div className="bg-success p-2 rounded">
          <Image 
            src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg" 
            alt="" 
            className="w-100 h-100 object-fit-cover rounded"
            style={{ height: '60vh' }}
          />
        </div>
      </Col>
    </Row>
  </>
);

export const AuctionHistory = () => (
  <div>
    <h5 className="fw-normal">Auction History</h5>
    <hr className="my-4" />
    
    <Table hover responsive className="rounded">
      <thead className="bg-light">
        <tr>
          <th className="py-3">Date</th>
          <th className="py-3">Bid Amount(USD)</th>
          <th className="py-3">User</th>
          <th className="py-3">Auto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-3">December 31, 2024 12:00 am</td>
          <td className="py-3">$200</td>
          <td className="py-3">Sunil Pokhrel</td>
          <td className="py-3"></td>
        </tr>
      </tbody>
    </Table>
  </div>
);