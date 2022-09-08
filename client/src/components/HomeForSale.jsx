import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import froSalImg from "../assets/House_sale-min.jpg";

const HomeForSale = () => {
  return (
    <Container className=" h-75 text-dark py-5 ">
      <Row
        xs={1}
        md={1}
        lg={2}
        className="justify-content-center align-items-center"
      >
        <Col>
          <img src={froSalImg} className="img-fluid rounded-3 " alt="..." />
        </Col>
        <Col className="py-5">
          <h2>Need To Buy a Home?</h2>
          <p>
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval.
          </p>
          <Link to="/property-sale" className="link py-2">
            <button type="button" className="btn btn-danger py-2">
              Find your New Home
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeForSale;
