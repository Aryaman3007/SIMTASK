import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meals = ({ meal }) => {
  const { strMealThumb, strMeal, idMeal } = meal;

  return (
    <div className="container-fluid">
      <Card className="text-center">
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title style={{color: "rgb(198, 57, 57)"}}>{strMeal}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Link to={`/SingleFood/${idMeal}`}>
            <Button variant="danger">See Deatils</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Meals;
