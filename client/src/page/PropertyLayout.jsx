import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { RiHotelBedLine, RiRuler2Line } from "react-icons/ri";
import { MdBathtub, MdVerified } from "react-icons/md";

import { generalUrl, queryData } from "../utils/queryApi";

const PropertyLayout = ({ prosel }) => {
  const {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  } = prosel;
  //console.log(coverPhoto.url);

  return (
    <>
      <Row className=" p-2 ">
        <Col className="mt-2">
          <img
            src={coverPhoto.url}
            width={350}
            height={260}
            className="rounded"
          />
          <div className="d-flex justify-content-between align-items-center  ">
            <h5 className=" p-1 d-flex align-items-center ">
              {isVerified && <MdVerified className=" text-success" />}
              USD {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              {rentFrequency && `/${rentFrequency}`}
            </h5>
            <img src={agency.logo.url} width={20} height={20} />
          </div>
          <div className="d-flex justify-content-between align-items-center pe-2 ">
            <p className=" ps-2 text-info">
              {rooms} <RiHotelBedLine className="text-info ms-1" /> |{baths}{" "}
              <MdBathtub className="text-info ms-2" /> | {Math.floor(area)} sqft{" "}
              <RiRuler2Line className="text-info ms-2" />
            </p>
          </div>
          <p className=" ps-2">{title.substring(0, 30) + "..."}</p>
        </Col>
      </Row>
    </>
  );
};

export default PropertyLayout;
