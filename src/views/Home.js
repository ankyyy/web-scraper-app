import React, { useState } from 'react';
import { Spinner, Button } from 'react-bootstrap';

import SearchBar from '../components/SearchBar';
import TableComponent from '../components/Table';
import { fetchScrapResult, saveScrapResult } from '../Api';
import Dialog from '../components/Dialog';

const HEADER_MAP = {
    'lastModified': 'Last Modified Date',
    'characterSet': 'Character Set',
    'url': 'Link',
    'caption': 'Caption',
    'isRelativeToWebPage': 'Relative'
}

function Home() {
    const [links, setLinks] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [searchUrl, setSearchUrl] = useState('')
    const [showDialog, setShowDialog] = useState({ show: false, message: '' })

    const fetchAnchorsTags = async (url) => {
        setSpinner(true)
        setSearchUrl(url)
        const response = await fetchScrapResult(url)
        setSpinner(false)
        if (response.error) {
            setShowDialog({ show: true, message: response.error })
            return
        }
        console.log(response)
        setLinks(response.result)
    }
    const saveSources = async () => {
        setSpinner(true)
        const response = await saveScrapResult({ url: searchUrl, subLinks: links })
        if (response.error) {
            setShowDialog({ show: true, message: response.error })
            return
        }

        setShowDialog({ show: true, message: 'Data Saved' })
        setSpinner(false)
    }
    return (
        <div>
            <SearchBar onSearch={fetchAnchorsTags} onClear={() => setLinks([])}></SearchBar>
            <div className="mt-4">
                {!!links.length && <Button className="mb-2" variant="primary" onClick={() => saveSources()}>Save Result</Button>}

                <TableComponent rows={links} headerMap={HEADER_MAP}></TableComponent>
            </div>

            {spinner && <div className="text-center">
                <Spinner animation="border" role="status" >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>}
            <Dialog show={showDialog.show} onClose={() => setShowDialog({ show: false })} message={showDialog.message}></Dialog>
        </div>
    );
}

export default Home;
