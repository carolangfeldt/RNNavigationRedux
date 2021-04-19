const initialState = {
  isLoading: true,
  isSignIn: false,
  userToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        isSignIn: true,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isSignIn: false,
        userToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
