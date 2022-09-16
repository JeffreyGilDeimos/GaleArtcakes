export const addToCart = (productDetails) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: productDetails,
    });
  };
};

export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
};

export const updateQuantity = (productDetails) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: productDetails,
    });
  };
};
