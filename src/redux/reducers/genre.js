const inialState = {
  value: [],
  detail: {},
  // data: [],
  errosMsg: null,
  isLoading: false,
};

const genre = (state = inialState, action) => {
  switch (action.type) {
    case 'GENRE_PENDING': {
      return {
        ...state,
        errorMsg: null,
        isLoading: true,
        value: {},
      };
    }
    case 'GENRE_REJECTED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
        value: {},
      };
    }
    case 'GENRE_FULFILLED': {
      return {
        ...state,

        // errorMsg: null,
        isLoading: false,
        value: action.payload.data.data,
      };
    }

    case 'INSERT_PENDING': {
      return {
        ...state,
        errorMsg: null,
        value: {},
      };
    }
    case 'INSERT_REJECTED': {
      console.log(action.payload);
      return {
        ...state,
        errorMsg: action.payload,
        value: {},
      };
    }
    case 'INSERT_FULFILLED': {
      return {
        ...state,

        // errorMsg: null,
        // value: action.payload.data.data,
      };
    }
    case 'DETAIL_PENDING': {
      return {
        ...state,
        errorMsg: null,
        value: {},
      };
    }
    case 'DETAIL_REJECTED': {
      console.log(action.payload);
      return {
        ...state,
        errorMsg: action.payload,
        // value: {},
      };
    }
    case 'DETAIL_FULFILLED': {
      return {
        ...state,
        detail: action.payload.data.data,

        // errorMsg: null,
        // value: action.payload.data.data,
      };
    }

    case 'DELETE_PENDING': {
      return {
        ...state,
        errorMsg: null,
        value: {},
      };
    }
    case 'DELETE_REJECTED': {
      console.log(action.payload);
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'DELETE_FULFILLED': {
      return {
        ...state,

        // errorMsg: null,
        // value: action.payload.data.data,
      };
    }
    case 'EDIT_PENDING': {
      return {
        ...state,
        errorMsg: null,
        value: {},
      };
    }
    case 'EDIT_REJECTED': {
      console.log(action.payload);
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'EDIT_FULFILLED': {
      return {
        ...state,
        errorMsg: null,
        // value: action.payload.data.data,
      };
    }

    default: {
      return state;
    }
  }
};

export default genre;
