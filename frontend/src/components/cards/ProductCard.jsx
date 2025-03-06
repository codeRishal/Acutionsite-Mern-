import PropTypes from "prop-types";
import { RiAuctionFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import { Caption, PrimaryButton, ProfileCard, Title } from "../common/Design";
import { NavLink } from "react-router-dom";
import { Card, Badge, Row, Col } from 'react-bootstrap';
import React from 'react';

export const ProductCard = ({ item }) => {
  return (
    <Card className="h-100 shadow">
      <div className="position-relative" style={{ height: '224px' }}>
        <NavLink to={`/details/${item?._id}`}>
          <Card.Img
            src={item?.image}
            alt={item?.title}
            className="h-100 object-fit-cover rounded-3"
            style={{ transition: 'transform 0.3s' }}
            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}
          />
        </NavLink>
        
        <ProfileCard className="shadow position-absolute end-3 bottom-3">
          <RiAuctionFill size={22} className="text-success" />
        </ProfileCard>

        <div className="position-absolute top-0 start-0 p-2 w-100">
          <div className="d-flex justify-content-between">
            <Badge bg={item?.isSoldout ? 'danger' : 'success'} className="py-2 px-3">
              {item?.isSoldout ? 'Sold Out' : 'On Stock'}
            </Badge>
            <Badge bg="success" className="py-2 px-3">
              {item?.totalBids} Bids
            </Badge>
          </div>
        </div>
      </div>

      <Card.Body>
        <Title className="text-uppercase">{item.title}</Title>
        <hr />
        <Row className="align-items-center py-3">
          <Col className="d-flex align-items-center gap-3">
            <RiAuctionFill size={40} className="text-success" />
            <div>
              <Caption className="text-success">Current Bid</Caption>
              <Title>${item?.biddingPrice}.00</Title>
            </div>
          </Col>
          <div className="vr p-0" style={{ width: '1px', height: '40px' }}></div>
          <Col className="d-flex align-items-center gap-3">
            <GiTakeMyMoney size={40} className="text-danger" />
            <div>
              <Caption className="text-danger">Buy Now</Caption>
              <Title>${item?.price}.00</Title>
            </div>
          </Col>
        </Row>
        <hr />

        <div className="d-flex justify-content-between align-items-center mt-3">
          <PrimaryButton className="rounded-3">Place Bid</PrimaryButton>
          <PrimaryButton className="rounded-3 p-3">
            <MdOutlineFavorite size={20} />
          </PrimaryButton>
        </div>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    isSoldout: PropTypes.bool,
    totalBids: PropTypes.number,
    biddingPrice: PropTypes.number,
    price: PropTypes.number
  }).isRequired
};