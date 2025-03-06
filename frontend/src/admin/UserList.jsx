import { NavLink } from "react-router-dom";
import { Title, ProfileCard } from "../router";
import { TiEyeOutline } from "react-icons/ti";
import { User2 } from "../components/hero/Hero";
import { Card, Table } from 'react-bootstrap';
import React from 'react';

export const UserList = () => {
  return (
    <Card className="shadow p-4 rounded">
      <Card.Header className="bg-transparent border-0 p-3">
        <Title level={5} className="fw-normal">
          User Lists
        </Title>
      </Card.Header>
      <hr />
      
      <Card.Body className="p-0">
        <div className="table-responsive">
          <Table hover className="align-middle">
            <thead className="bg-light text-uppercase small">
              <tr>
                <th className="py-3">S.N</th>
                <th className="py-3">Username</th>
                <th className="py-3">Email</th>
                <th className="py-3">Role</th>
                <th className="py-3">Photo</th>
                <th className="py-3">Date</th>
                <th className="py-3 text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="text-capitalize">Sunil BK</td>
                <td>example@gmail.com</td>
                <td className="text-capitalize">Admin</td>
                <td>
                  <ProfileCard>
                    <img src={User2} alt="User Profile" className="img-fluid" />
                  </ProfileCard>
                </td>
                <td>Dec 20 2024</td>
                <td className="text-end">
                  <NavLink to="#" className="text-primary">
                    <TiEyeOutline size={25} />
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};