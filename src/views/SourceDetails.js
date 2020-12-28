import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import TableComponent from '../components/Table';
import { getScrapResultById } from '../Api';

const HEADER_MAP = {
    'lastModified': 'Last Modified Date',
    'characterSet': 'Character Set',
    'url': 'Link',
    'caption': 'Caption',
    'isRelativeToWebPage': 'Relative'
}
function SourcesDetails() {
    const [scrapResult, setScrapResult] = useState({});
    const {id} = useParams();
    useEffect(() => {
        getScrapResultById(id).then(result => {
            setScrapResult(result)
            console.log(result)
        })
    }, [id])
    return (
        <div className="mt-4">
            <div className="row mb-2">
                <div className="col">
                   Main URL: <a href={scrapResult.url} target="blank">{scrapResult.url}</a>
                </div>
            </div>
         <TableComponent rows={scrapResult.subLinks} headerMap={HEADER_MAP}></TableComponent>
        </div>
    );
}

export default SourcesDetails;
