import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import forRentImg from "../assets/haus_real_estate_rent.jpg";

const HomeForRent = () => {
  return (
    <div className="for-rent-cont ">
      <Container className=" h-75 text-light py-5 ">
        <Row
          /* className="  d-flex align-items-center mb-5 " */ xs={1}
          md={1}
          lg={2}
          className="justify-content-center align-items-center"
        >
          <Col className="py-3 ">
            <h2>Need To Rent a Home?</h2>
            <p>
              Find a lender who can offer competitive mortgage rates and help
              you with pre-approval.
            </p>
            <Link to="/property-rent" className="link ">
              <button type="button" className="btn btn-danger ">
                Find A Home To Rent
              </button>
            </Link>
          </Col>
          <Col className="py-3 ">
            <img src={forRentImg} className="img-fluid rounded-3" alt="..." />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeForRent;
