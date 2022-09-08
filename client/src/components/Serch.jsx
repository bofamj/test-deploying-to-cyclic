import React, { useState, useEffect } from "react";
import { Form, option, Container, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { filterData } from "../utils/data";

const Serch = ({ forSale, forSaleSort, test }) => {
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
    let updatedList = test;

    //*filter by max price

    if (search.maxPrice !== "") {
      updatedList = updatedList.filter(
        (items) => items.price < search.maxPrice
      );
      forSaleSort(updatedList);
    }

    //*filter by roms
    if (search.roomsMin == "") {
      forSaleSort(updatedList);
    } else {
      updatedList = updatedList.filter(
        (items) => items.rooms == search.roomsMin
      );
      forSaleSort(updatedList);
    }

    //*filter by bath rome
    if (search.bathsMin == "") {
      forSaleSort(updatedList);
    } else {
      updatedList = updatedList.filter(
        (items) => items.baths == search.bathsMin
      );
      forSaleSort(updatedList);
    }

    /* if (updatedList.length > 0) {
        /* forSaleSort(updatedList);
      } else {
        return;
      }  
    }*/
    //forSaleSort(updatedList);
  };

  const handelSort = () => {
    let updatedList = test;

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
    forSaleSort(test);
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
    <Container className="d-flex f justify-md-content-center align-items-center   ">
      <Row className="d-flex flex-wrap justify-content-center align-items-center  pt-2 ">
        <Col>
          <Form.Select
            className="me-1"
            aria-label="Default select example"
            name={filterData[1].queryName}
            onChange={handelChange}
          >
            <option>Max Price(USD)</option>
            {maxPrice.map((item, index) => (
              <option key={index} value={item.value} name={item.name}>
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
        <Col className="   ">
          <Button type="button" className="btn px-3   " onClick={handelReset}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Serch;
/*//Output: [500,44,32,15,13,5,1]
    /* updatedList.sort(function (a, b) {
      if (search.sort == "Lowest Price") {
        // Price is only important when cities are the same
        return b.price - a.price;
      } /* else if (search.sort == "Highest Price") {
        // Price is only important when cities are the same
        return a.price - b.price;
      } 
      return a.price - b.price;
    }); 
    /* if (search.sort == "Lowest Price") {
      //updatedList.sort((a, b) => (a.price < b.price ? 1 : -1));
      updatedList.sort(function (a, b) {
        return b.price - a.price;
      });
    }
   */
