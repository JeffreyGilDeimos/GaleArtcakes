const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            console.log(action);
            return state = action.payload;
        case 'LOGOUT_USER':
            return state = initialState;
        default:
            return state;
    }
}

export default userReducer;