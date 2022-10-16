export const loginUser = (localstorageDetails) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_USER',
            payload: localstorageDetails
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT_USER',
        })
    }
}