import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from '../constants'

const booksLoaded = newBooks => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: newBooks
  }
}

const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  }
}

const booksError = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService
    .getBooks()
    .then(books => dispatch(booksLoaded(books)))
    .catch(err => dispatch(booksError(err)))
}

export { fetchBooks }
