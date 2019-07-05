const userReducer = (
  state = {
    loggedInUser:''
  },
  action
) => {
  switch (action.type) {
    case "LOAD_USER":
      state = {
        loggedInUser: action.payload
      };
      return state;
    default:
      return state;
  }
};

export default userReducer;
