import { Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

import HomeForSale from "../components/HomeForSale";

import "../App.css";
import house from "../assets/house-png-166 (2).png";
import blob from "../assets/blob-5.svg";
import HomeForRent from "../components/HomeForRent";

const Home = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className=" bg-dark text-light text-center text-sm-start py-5 ">
        <Container>
          <Row className="d-flex justify-content align-items-center">
            <Col xs={{ order: "last" }}>
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={item}
                  /* className=" font-weight-light lh-sm hero-text w-75" */
                  className=" display-4"
                >
                  Your Dream
                  <br /> House is Waiting
                  <br />
                  For You
                </motion.h1>
              </motion.div>
            </Col>
            <Col
              xs={{ order: "last" }}
              /* className="hero-img-container d-flex align-items-center justify-content-end d-none d-sm-block " */
              className="d-none d-sm-block "
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {/* <img src={blob} className="" /> */}
                <motion.img
                  src={house}
                  className=" rounded-3  w-100  img-fluid "
                  variants={item}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className=" w-100"> */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=""
      >
        <HomeForSale />
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="visible">
        <HomeForRent />
      </motion.div>
    </>
  );
};

export default Home;

/*<div className=" heder w-100">
        <Container className=" d-flex py-5 hero heder">
          <Row xs={1} md={2} className=" h-75 w-100  align-items-center">
            <Col xs={{ order: "last" }}>
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={item}
                  className=" font-weight-light lh-sm hero-text w-75"
                >
                  Your Dream
                  <br /> House is Waiting
                  <br className="text-info " />
                  For You
                </motion.h1>
              </motion.div>
            </Col>
            <Col
              xs={{ order: "last" }}
              className="hero-img-container d-flex align-items-center justify-content-end d-none d-sm-block "
            >
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <img src={blob} className="blob mt-5 " />
                <motion.img
                  src={house}
                  className=" rounded-3 image w-100 mt-5 img-fluid "
                  variants={item}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=" w-100">
        <motion.div variants={container} initial="hidden" animate="visible">
          <div className="sale-hero-cont container-lg">
            <HomeForSale />
          </div>
        </motion.div>
        <div className="sale-hero-cont  w-100">
          <motion.div variants={container} initial="hidden" animate="visible">
            <HomeForRent />
          </motion.div>
        </div>
      </div> */
