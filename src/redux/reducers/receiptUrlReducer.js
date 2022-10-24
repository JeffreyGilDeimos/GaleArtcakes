const initialState = [];

const receiptUrlReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_RECEIPT_URL':
            return state = action.payload.receiptUrl;
        default:
            return state;
    }
}

export default receiptUrlReducer;