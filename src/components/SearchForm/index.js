import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";

function SearchForm(props) {
    return (
        <Form className="Search">
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    onChange={(event) => props.handleSearch(event)} />
            </Form.Group>
            <Button
                onClick={() => props.handleSort()}
            >Sort</Button>

        </Form>
    )
};

export default SearchForm;