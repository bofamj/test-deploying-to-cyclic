import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, useAnimation } from "framer-motion";

import { generalUrl, queryData } from "../utils/queryApi";
import PropertyLayout from "./../page/PropertyLayout";
import { Link } from "react-router-dom";
import Serch from "./Serch";
import Loading from "./Loading";

const Property = () => {
  const [forSale, setForSale] = useState([]);
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(false);

  //*fetching ret and sale propertiess form the raped api
  const fetchEaleProperty = async () => {
    setLoading(true);
    const forSale = await queryData(`${generalUrl}/sale`);
    setLoading(false);
    setForSale(forSale);
    setTest(forSale);
  };
  useEffect(() => {
    fetchEaleProperty();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const boxVariant = {
    visible: { opacity: 1, scale: 2 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <>
      {" "}
      <h1 className="m-2 d-flex justify-content-center page-text">
        PROPERTY FOR <span className="page-text-span ">SALE</span>
      </h1>
      <Container className="mt-3">
        <Serch forSale={forSale} forSaleSort={setForSale} test={test} />
      </Container>
      <Container
        fluid
        className="mt-2 d-flex flex-wrap justify-content-center align-items-center col-sm"
      >
        {" "}
        {forSale.map((prosel) => (
          <Link
            className="red-mor-link"
            to={`/${prosel.externalID}`}
            key={prosel.id}
          >
            <PropertyLayout key={prosel.id} prosel={prosel} />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Property;
