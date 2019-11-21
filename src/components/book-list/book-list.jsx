import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withBookstoreService } from '../hocs'
import BookListItem from '../book-list-item'
import { booksLoaded } from '../../actions'
import { compose } from '../../utils'

import './book-list.css'

class BookList extends Component {
  componentDidMount() {
    const books = this.props.bookstoreService.getBooks()

    this.props.booksLoaded(books)
  }

  render() {
    const { books } = this.props

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
}

const mapStateToProps = ({ books }) => ({ books })

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, { booksLoaded })
)(BookList)
