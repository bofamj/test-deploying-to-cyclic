import React from "react";

import { Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ImageSrollbar({ data }) {
  return (
    <>
      <Carousel className="w-100">
        {data.map((item) => (
          <Carousel.Item>
            <img
              className="d-block w-100 image-responsive rounded"
              src={item.url}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
