import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = () => {
    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Search your dream job"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="primary" id="button-addon2">
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </InputGroup>
        </div>
    )
}

export default SearchBox
