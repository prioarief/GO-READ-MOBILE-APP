const inialState = {
  data: {},
  errorMessage: null,
  isLoading: false,
};

const auth = (state = inialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data[0],
      };
    }

    case 'REGISTER_PENDING': {
      return {
        ...state,
        data: {},
      };
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        data: {},
      };
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        data: action.payload.data.data.data[0],
      };
    }

    case 'ACTIVATION_PENDING': {
      return {
        ...state,
        data: {},
      };
    }
    case 'ACTIVATION_REJECTED': {
      return {
        ...state,
        data: {},
      };
    }
    case 'ACTIVATION_FULFILLED': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        data: {},
      };
    }

    default: {
      return state;
    }
  }
};

export default auth;
