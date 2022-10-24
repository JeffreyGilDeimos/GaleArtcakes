import { get } from '../../utilities/https';

export const getReceiptData = (sessionId) => {
    const url = `/sessions/${sessionId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_RECEIPT_DATA',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const getReceiptUrl = (sessionId) => {
    const url = `/sessions/intent/${sessionId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_RECEIPT_URL',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}