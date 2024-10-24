import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";

export const Cart_item = (props) => {

  const { brand, description, images, price, rating, title } = props;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img  style = {{ height: '230px'}} variant="top" src={images[0]} />
        <Card.Body edit="true" style = {{height:'350px'}} className=" d-flex justify-content-between flex-column">
          <sub>{rating}</sub>
          <div className="">
            <Card.Title>{title}</Card.Title>
            <Card.Title>{brand}</Card.Title>
          </div>
          <Card.Text>{description}</Card.Text>
          <div className="d-flex align-items-center gap-2"><ReactStars size={30}   value={ rating}  edit= {true} count={5}/>
        <span>{rating}</span></div>
          <div className="d-flex justify-content-between "><Button variant="primary">Add to cart</Button>
          <h4>  $ {price}</h4>
          </div>
          

        </Card.Body>
      </Card>
    </div>
  );
};
