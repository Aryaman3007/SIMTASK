import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h2 className="text-center fw-bolder text-danger welcome-text">
          About QuickCravers!
        </h2>
        <h5 className="text-center">
        Welcome to QuickCravers, your ultimate food delivery app that brings delicious meals right to your doorstep! 
        QuickCravers is a user-friendly mobile application that allows you to order your favorite meals from a wide range of 
        local restaurants, cafes, and food vendors. With a few taps on your smartphone, you can explore various cuisines, 
        view menus, customize orders, and have your food delivered quickly.
        <span style={{display: "block", margin:"15px", color:"red"}}>Enjoy the convenience of QuickCravers and discover a world of flavors at your fingertips! Happy eating! 🍔🍕🍜</span>
        </h5>
        <Button
          className="mt-3 btn-lg fw-bold d-block mx-auto py-2 px-4"
          style={{ backgroundColor: "rgb(198, 57, 57)", border: "none" }}
        >
          <Link className="text-decoration-none text-white" to="/Home">
            Go Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default About;
