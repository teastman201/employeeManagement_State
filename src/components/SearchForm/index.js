import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchForm(props) {
    return (
        <Form>
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