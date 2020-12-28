import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { isValidHttpUrl } from '../util';

function SearchBar({ onSearch, onClear }) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value

        setValue(value)
        const isValidUrl = isValidHttpUrl(value)
        if (!isValidUrl) {
            setError(true)
        }
        if((error && isValidUrl) || !value){
            setError(false)
        }

    }

    return (
        <div>
            <InputGroup className="mt-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="url">Enter URL</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="eg. www.google.com"
                    value={value}
                    onChange={handleChange}
                />
                <InputGroup.Append>
                    <Button variant="outline-primary" onClick={() => { setValue(''); onClear(); }}>Clear</Button>
                </InputGroup.Append>
                <InputGroup.Append>
                    <Button disabled={error || !value} variant="primary" onClick={() => { onSearch(value) }}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            {error && <Alert variant='danger'>
                Invalid Url
              </Alert>}
        </div>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
}

export default SearchBar;
