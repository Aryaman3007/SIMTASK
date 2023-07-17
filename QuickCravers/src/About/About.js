import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h3 className="text-center fw-bolder text-danger welcome-text">
          About QuickCravers!
        </h3>

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
