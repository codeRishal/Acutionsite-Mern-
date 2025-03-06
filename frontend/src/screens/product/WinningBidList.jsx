import React from "react";
import { Card } from 'react-bootstrap';


export const WinningBidList = () => {
  return (
    <Card className="shadow">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <h5 className="fw-normal">Winning Product Lists</h5>
        </div>

        <div className="text-center py-4">
          <p className="text-muted">No products found. Start by creating a new product!</p>
        </div>
      </Card.Body>
    </Card>
  );
};