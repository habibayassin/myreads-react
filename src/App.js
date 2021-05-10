import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './Components/BookList'
import SearchBook from './Components/SearchBook.js'
import { Route, Switch, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.map(b => (b.id === book.id && book) || b)
      }))
    })
    console.log(book);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  componentDidUpdate() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookList books={this.state.books} updateShelf={this.updateShelf} />
              <Link to='/search' className="open-search">
                <button>Add a book</button>
              </Link>
            </div>
          )} />
          <Route path='/search' render={() => (
            <SearchBook books={this.state.books} updateShelf={this.updateShelf} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
