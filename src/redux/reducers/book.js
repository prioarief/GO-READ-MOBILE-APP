const initialState = {
  book: {},
  tes: 0,
};

const book = (state = initialState, action) => {
  switch (action.type) {
    case 'TES': {
      return {
        ...state,
        tes: 10,
      };
    }
    case 'GETBOOK_PENDING': {
      return {
        ...state,
      };
    }
    case 'GETBOOK_REJECTED': {
      return {
        ...state,
      };
    }
    case 'GETBOOK_FULFILLED': {
      return {
        ...state,
        book: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default book;
