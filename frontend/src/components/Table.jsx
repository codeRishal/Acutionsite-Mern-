import { TiEyeOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Table as BootstrapTable, Badge, Button, Image } from 'react-bootstrap';
import React from 'react';

export const Table = () => {
  return (
    <div className="table-responsive">
      <BootstrapTable hover>
        <thead className="bg-light">
          <tr>
            <th>Title</th>
            <th>Bidding ID</th>
            <th>Bid Amount(USD)</th>
            <th>Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Auction Title 01</td>
            <td>Bidding_HvO253gT</td>
            <td>1222.8955</td>
            <td>
              <Image 
                src="https://bidout-react.vercel.app/images/bg/order1.png" 
                alt="Jeseimage" 
                width={40} 
                height={40} 
              />
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Badge bg="success" className="me-2" pill></Badge>
                Success
              </div>
            </td>
            <td>
              <div className="d-flex gap-2">
                <Button as={NavLink} to="#" variant="link" className="text-primary p-0">
                  <TiEyeOutline size={25} />
                </Button>
                <Button as={NavLink} to="/update-product" variant="link" className="text-success p-0">
                  <CiEdit size={25} />
                </Button>
                <Button variant="link" className="text-danger p-0">
                  <MdOutlineDeleteOutline size={25} />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </BootstrapTable>
    </div>
  );
};

/* Keep the commented out version of the Table component for future reference */