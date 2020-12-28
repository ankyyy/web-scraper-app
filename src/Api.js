
const basePath = 'http://localhost:5000/api/'
async function postData(path = '', data = {}) {
    // Default options are marked with *
    try {
        const response = await fetch(basePath + path, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        if (response.status == 400) {
            const error = await response.text()
            return { error }
        }
        return response.json(); // parses JSON response into native JavaScript objects
    }
    catch (e) {
        console.log(e)
        return { error: 'some error ocurred' }
    }
}

async function getData(path = '') {
    // Default options are marked with *
    const response = await fetch(basePath + path);
    return response.json(); // parses JSON response into native JavaScript objects
}


export const fetchScrapResult = (url) => {
    return postData('getScrapResult', { url })
}


export const saveScrapResult = (body) => {
    return postData('scrapResult', body)
}

export const getAllScrapResult = (body) => {
    return getData('scrapResult')
}

export const getScrapResultById = (id) => {
    return getData('scrapResult/' + id)
}