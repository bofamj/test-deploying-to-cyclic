import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import spinner from "../assets/Iphone-spinner-2.gif";

const Loading = () => {
  return (
    <Container className=" w-100 mt-5 d-flex justify-content-center align-items-center">
      <img src={spinner} width="75" />
    </Container>
  );
};

export default Loading;
