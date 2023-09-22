const logInReducer = (state = "Sign In", action) => {
  if (action.type === "logIn") {
    return (state = action.payload);
  } else {
    return state;
  }
};
export default logInReducer;
