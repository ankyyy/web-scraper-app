import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { getAllScrapResult } from '../Api';


function Sources() {
    const [scrapResult, setScrapResult] = useState([])
    const history = useHistory()

    useEffect(() => {
        getAllScrapResult().then(result => {
            setScrapResult(result)
        })
    }, [])
    return (
        <div className="mt-4">
            { scrapResult.map((result,index) => (
                <Card key={index}>
                    <Card.Body>
                        <div className="row">
                            <div className="col-10">
                                <a href={result.url} target="blank">{result.url}</a>
                            </div>
                            <div className="col-2">
                                <Button variant="primary" onClick={() => { history.push('/source/' + result._id) }}>Details</Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            ))
            }
        </div>
    );
}

export default Sources;
