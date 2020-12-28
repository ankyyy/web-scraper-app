import React from 'react';
import { Table } from 'react-bootstrap';

const BooleanRenderer = (value) => value === true ? 'True' : 'False'
const UrlRenderer = (value) => {
    return (<a href={value} target="blank">{value}</a>)
}

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

const render = (value) => {
    if (typeof value === 'boolean') {
        return BooleanRenderer(value)
    } else if (isValidHttpUrl(value)) {
        return UrlRenderer(value)
    } else {
        return value
    }
}


function TableComponent({ rows = [], headerMap = {} }) {
    if (rows.length === 0) {
        return null
    }
    const headers = Object.keys(headerMap)
    return (
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                    {headers.map(header => <th>{headerMap[header]}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row,index) => <tr key={'table_'+index}>{headers.map(header =>
                    <td>{render(row[header])}</td>)}
                </tr>)}
            </tbody>
        </Table>
    );
}

export default TableComponent;
