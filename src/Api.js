
const basePath = 'http://localhost:5000/api/'
async function postData(path = '', data = {}) {
    try {
        const response = await fetch(basePath + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 400) {
            const error = await response.text()
            return { error }
        }
        return response.json();
    }
    catch (e) {
        console.log(e)
        return { error: 'Internal Server Error' }
    }
}

async function getData(path = '') {
    const response = await fetch(basePath + path);
    return response.json();
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