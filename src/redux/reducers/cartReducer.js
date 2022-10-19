const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_CART_PRODUCTS':
            return state = action.payload;
        default:
            return state;
    }
}

export default cartReducer;