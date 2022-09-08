import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { generalUrl, queryData } from "../utils/queryApi";
import ForRentLayout from "../page/forRentLayout";
import Loading from "./Loading";
import RentSearch from "./RentSearch";

const ForRent = () => {
  const [forRent, setForRent] = useState([]);
  const [forRentCopy, setForRentCopy] = useState([]);
  const [loading, setLoading] = useState(false);

  //*fetching ret  form the raped api
  const fetchRentProperty = async () => {
    setLoading(true);
    const forRent = await queryData(`${generalUrl}/rent`);
    setLoading(false);
    setForRent(forRent);
    setForRentCopy(forRent);
  };

  useEffect(() => {
    fetchRentProperty();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h1 className="m-2 d-flex justify-content-center page-text">
        PROPERTY FOR <span className="page-text-span ">RENT</span>
      </h1>
      <Container>
        <RentSearch
          forRent={forRent}
          forRentSort={setForRent}
          forRentCopy={forRentCopy}
        />
      </Container>
      <Container
        fluid
        className="mt-2 d-flex flex-wrap justify-content-center align-items-center "
      >
        {forRent.map((prosel) => (
          <Link className="red-mor-link" to={`/${prosel.externalID}`}>
            <ForRentLayout key={prosel.id} prosel={prosel} />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default ForRent;
