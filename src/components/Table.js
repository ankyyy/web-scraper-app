import React from 'react';
import { Table } from 'react-bootstrap';
import { isValidHttpUrl } from '../util';

const BooleanRenderer = (value) => value === true ? 'True' : 'False'
const UrlRenderer = (value) => {
    return (<a href={value} target="blank">{value}</a>)
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
                    {headers.map((header, index) => <th key={'tablehead_' + index}>{headerMap[header]}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => <tr key={'tablerow_' + index}>{headers.map((header,index) =>
                    <td key={'tablehead_'+index}>{render(row[header])}</td>)}
                </tr>)}
            </tbody>
        </Table>
    );
}

export default TableComponent;
