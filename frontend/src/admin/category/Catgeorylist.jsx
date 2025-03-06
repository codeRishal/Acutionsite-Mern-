import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Title, PrimaryButton, ProfileCard } from "../../router";
import { TiEyeOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { User2 } from "../../components/hero/Hero";
import { Card, Table, Button, Image } from 'react-bootstrap';
import React from 'react';

export const Catgeorylist = () => {
  return (
    <Card className="shadow p-4 rounded">
      <Card.Header className="bg-transparent border-0 d-flex justify-content-between align-items-center">
        <Title level={5} className="fw-normal mb-0">
          Category Lists
        </Title>
        <NavLink to="/category/create">
          <PrimaryButton className="d-flex align-items-center gap-2 px-4 py-2 rounded">
            <AiOutlinePlus size={20} />
            <span>Create Category</span>
          </PrimaryButton>
        </NavLink>
      </Card.Header>

      <hr className="my-3" />

      <Card.Body className="p-0">
        <div className="table-responsive">
          <Table hover className="align-middle">
            <thead className="bg-light text-uppercase small">
              <tr>
                <th>S.N</th>
                <th className="px-4">User</th>
                <th>Title</th>
                <th>Date</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <ProfileCard>
                      <Image src={User2} alt="User Profile" fluid />
                    </ProfileCard>
                    <div>
                      <div className="fw-semibold text-capitalize">Sunil BK</div>
                      <div className="text-muted small">example@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td>Category One</td>
                <td>Dec 10 2020</td>
                <td>
                  <div className="d-flex justify-content-end gap-2">
                    <NavLink to="#" className="text-primary">
                      <TiEyeOutline size={25} />
                    </NavLink>
                    <NavLink to="/category/update/1000" className="text-success">
                      <CiEdit size={25} />
                    </NavLink>
                    <Button variant="link" className="text-danger p-0">
                      <MdOutlineDeleteOutline size={25} />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};