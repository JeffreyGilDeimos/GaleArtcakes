import { get, put } from '../../utilities/https';

export const getPaymentsByUser = (email) => {
    const url = `/payments/${email}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'GET_PAYMENTS',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const saveOrder = (sessionId, email) => {
    const url = `/payments/add/${sessionId}/${email}`;
    return new Promise((resolve, reject) => {
        const promise = put(url);
        promise.then((response) => {
            resolve({
                type: 'GET_PAYMENTS',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}
