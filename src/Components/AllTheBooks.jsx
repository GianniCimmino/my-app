import {Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import books from "../Data/horror.json";
import { useState } from "react";

function SingleBook({book}) {
    const [selected, setSelected] = useState(false);

  return (
    <Col xs={6} md={4} lg={2} className="d-flex">
    <Card
      onClick={() => setSelected(!selected)}
      className="flex-grow-1"
      style={{
        outline: selected ? "3px solid red" : "3px solid transparent",
        margin: "-3px",
      }}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default function AllTheBooks(){
    const [query, setQuery] = useState("");
    
    const booksByQuery = (book) => book.title.toLowerCase().includes(query.toLowerCase());

    return (
        <Container>
      <Form.Group className="py-4">
        <Form.Label>Search</Form.Label>
        <Form.Control
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form.Group>
      <Row className="row-gap-3">
        {books.filter(booksByQuery).map((book) => (
          <SingleBook book={book} />
        ))}
      </Row>
    </Container>
  );
}