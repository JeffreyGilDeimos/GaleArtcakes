const initialState = [];

const paymentReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PAYMENTS':
            return state = action.payload;
        default:
            return state;
    }
}

export default paymentReducer;