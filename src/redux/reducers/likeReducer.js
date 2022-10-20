const initialState = [];

const likeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_PRODUCT_LIKE':
            return state = action.payload;
        default:
            return state;
    }
}

export default likeReducer;