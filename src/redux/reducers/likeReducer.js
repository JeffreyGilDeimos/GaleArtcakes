const initialState = [];

const likeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_LIKE':
            return state = action.payload;
        default:
            return state;
    }
}

export default likeReducer;