const initialState = {
  isLoading: false,
  error: false,
  errorMessage: null,
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'BORROW_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'BORROW_REJECTED': {
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload,
      };
    }
    case 'BORROW_FULFILLED': {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default transaction;
