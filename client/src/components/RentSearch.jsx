import React, { useState, useEffect } from "react";
import { Form, option, Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { filterData } from "../utils/data";

const RentSearch = ({ forRent, forRentSort, forRentCopy }) => {
  const [minPrice, setMinPrice] = useState(filterData[0].items);
  const [maxPrice, setMaxPrice] = useState(filterData[1].items);
  const [sort, setSort] = useState(filterData[2].items);
  const [roomsMin, setRoomsMin] = useState(filterData[3].items);
  const [bathsMin, setBathsMin] = useState(filterData[4].items);
  const [search, setSearch] = useState({
    minPrice: "",
    maxPrice: "",
    roomsMin: "",
    bathsMin: "",
    sort: "",
  });
  const [sortName, setSortName] = useState(sort.map((item) => item.name));
  const [name, setName] = useState([]);

  //console.log(sortName);
  const handelChange = (e) => {
    // console.log(e.target);
    setSearch((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelSubmit = () => {
    let updatedList = forRentCopy;

    //*filter by max price

    if (search.minPrice !== "") {
      updatedList = updatedList.filter(
        (items) => items.price < search.minPrice
      );
      forRentSort(updatedList);
    }

    //*filter by roms
    if (search.roomsMin == "") {
      forRentSort(updatedList);
    } else {
      updatedList = updatedList.filter(
        (items) => items.rooms == search.roomsMin
      );
      forRentSort(updatedList);
    }

    //*filter by bath rome
    if (search.bathsMin == "") {
      forRentSort(updatedList);
    } else {
      updatedList = updatedList.filter(
        (items) => items.baths == search.bathsMin
      );
      forRentSort(updatedList);
    }
  };

  const handelSort = () => {
    let updatedList = forRentCopy;

    //*sort by highest  price

    if (search.sort == "Highest Price") {
      updatedList.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    //*sort by lowest  price

    if (search.sort == "Lowest Price") {
      updatedList.sort(function (a, b) {
        return a.price - b.price;
      });
    }
  };

  const handelReset = () => {
    forRentSort(forRentCopy);
    setSearch({
      minPrice: "",
      maxPrice: "",
      roomsMin: "",
      bathsMin: "",
    });
  };
  useEffect(() => {
    handelSort();
    handelSubmit();
  }, [search]);

  return (
    <Container className="d-flex  justify-md-content-center align-items-center ">
      <Row className="d-flex flex-wrap justify-content-center align-items-center  pt-2 ">
        <Col>
          <Form.Select
            className="me-1"
            aria-label="Default select example"
            name={filterData[0].queryName}
            onChange={handelChange}
          >
            <option>Min Price(USD)</option>
            {minPrice.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            className="me-1"
            aria-label="Default select example"
            name={filterData[2].queryName}
            onChange={handelChange}
          >
            <option>Sort</option>
            {sort.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            className="me-1"
            aria-label="Default select example"
            name={filterData[3].queryName}
            onChange={handelChange}
          >
            <option>Rooms</option>
            {roomsMin.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            name={filterData[4].queryName}
            onChange={handelChange}
          >
            <option>Baths</option>
            {bathsMin.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <Button type="button" className="btn px-3   " onClick={handelReset}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RentSearch;
