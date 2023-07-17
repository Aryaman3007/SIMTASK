import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Container fluid className="home">
        <Row>
          <div className="col-12">
            <div className="banner-container">
              <h1 className="text-center fw-bolder text-danger welcome-text">
                Welcome to QuickCravers
              </h1>

              <Button
                className="mt-3 btn-lg fw-bold d-block mx-auto py-2 px-4"
                style={{ backgroundColor: "rgb(198, 57, 57)", border: "none" }}
              >
                <Link
                  className="text-decoration-none text-white"
                  to="/Restaurant"
                >
                  Hungry? Order Online!
                </Link>
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
