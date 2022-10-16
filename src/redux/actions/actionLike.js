import { put, deleteMethod } from '../../utilities/https';

export const addLike = (body) => {
    const url = '/like/add';
    return new Promise((resolve, reject) => {
        const promise = put(url, body);
        promise.then((response) => {
            resolve({
                type: 'ADD_LIKE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const removeLike = (likeId) => {
    const url = `/like/remove/${likeId}`;
    return new Promise((resolve, reject) => {
        const promise = deleteMethod(url);
        promise.then((response) => {
            resolve({
                type: 'ADD_LIKE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}