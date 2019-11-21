import React, { Fragment } from 'react'

import BookList from '../components/book-list'
import ShoppingCartTable from '../components/shopping-cart-table/shopping-cart-table'

export const HomePage = () => {
  return (
    <Fragment>
      <BookList />
      <ShoppingCartTable />
    </Fragment>
  )
}
