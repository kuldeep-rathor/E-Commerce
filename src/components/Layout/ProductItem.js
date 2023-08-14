import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductItem = (props) => {
  return (
    <Card style={{ width: "15rem", margin: "50px" }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>${props.price}</Card.Text>
          </div>
          <Button variant="primary">Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
