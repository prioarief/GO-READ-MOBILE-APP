const initialState = {
  isLoading: false,
  error: false,
  history: [],
  errorMessage: null,
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case 'BORROW_PENDING': {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
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
        errorMessage: null,
      };
    }
    case 'RETURN_PENDING': {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case 'RETURN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload,
      };
    }
    case 'RETURN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
      };
    }
    case 'HISTORY_PENDING': {
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    }
    case 'HISTORY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload,
      };
    }
    case 'HISTORY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        history: action.payload.data.data,
      };
    }

    default:
      return state;
  }
};

export default transaction;
