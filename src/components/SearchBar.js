import React, { useRef,useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function SearchBar({ onSearch, onClear }) {
    const searchRef = useRef(null);
    const [disabled, setDisabled] = useState(true)
    return (
        <InputGroup className="mt-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Enter URL</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                ref={searchRef}
                placeholder="eg. www.google.com"
                onChange={(event) => !!event.target.value ? setDisabled(false) : setDisabled(true)}
            />
            <InputGroup.Append>
                <Button variant="outline-primary" onClick={() => { searchRef.current.value = ''; onClear(); }}>Clear</Button>
            </InputGroup.Append>
            <InputGroup.Append>
                <Button disabled={disabled} variant="primary" onClick={() => { onSearch(searchRef.current.value) }}>Search</Button>
            </InputGroup.Append>
        </InputGroup>

    );
}

export default SearchBar;
