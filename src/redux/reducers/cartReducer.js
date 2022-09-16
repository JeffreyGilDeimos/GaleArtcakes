const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [action.payload, ...state];
    case "REMOVE_FROM_CART":
      return [...state].filter((item) => item.id !== action.payload);
    case "UPDATE_QUANTITY":
      return (state = [...state].map((item) =>
        item.id === action.payload.id ? action.payload : item
      ));
    default:
      return state;
  }
};

export default cartReducer;
