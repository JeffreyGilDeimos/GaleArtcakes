import { get, put, post } from '../../utilities/https';

export const getAllUsersByProduct = (productId) => {
    const url = `/like/getUsersByProduct/${productId}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PRODUCT_LIKE',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}

export const getLike = (email) => {
    const url = `/like/getLike/${email}`;
    return new Promise((resolve, reject) => {
        const promise = get(url);
        promise.then((response) => {
            resolve({              
                type: 'SAVE_PRODUCT_LIKE',
                payload: response
            })
        }).catch((error) => {
            reject(error)
        })
    })
}



export const addLike = (email, productId) => {
    const url = `/like/${email}/addLike/${productId}`;
    return new Promise((resolve, reject) => {
        const promise = put(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PRODUCT_LIKE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}

export const removeLike = (email) => {
    const url = `/like/removeLike/${email}`;
    return new Promise((resolve, reject) => {
        const promise = post(url);
        promise.then((response) => {
            resolve({
                type: 'SAVE_PRODUCT_LIKE',
                payload: response
            })
        }).catch((error) => {
            reject(error);
        })
    })
}