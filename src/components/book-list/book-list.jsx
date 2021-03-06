import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { withBookstoreService } from '../hocs'
import { fetchBooks } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem book={book}></BookListItem>
          </li>
        )
      })}
    </ul>
  )
}

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, loading, error } = this.props

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return <BookList books={books} />
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
