import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from '../constants'

const initialState = {
  books: [],
  loading: true,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: false
      }

    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state
  }
}

export default reducer
