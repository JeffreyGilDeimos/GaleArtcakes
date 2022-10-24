const initialState = [];

const receiptReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_RECEIPT_DATA':
            console.log('action recipt data are ', action.payload.data);
            return state = action.payload.data;
        default:
            return state;
    }
}

export default receiptReducer;