import React from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book.js'

class SearchBook extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired,
    }
    state = {
        query: '',
        result: []
    }

    search = (event) => {

        let query = event.target.value;
        this.setState({ query });
        console.log(query);
        if (query) {
            BooksAPI.search(query).then(books => {
                books.length > 0? this.setState({ result: books }) : this.setState({ result: [] })
            });
        }
    }


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                        type="text" 
                        placeholder="Search by title or author" 
                        value={this.state.query}
                        onChange={this.search}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.result.length > 0 && this.state.query  &&
                    <ol className="books-grid">
                    {this.state.result.map((b, i)=> {
                        let onShelf = false
                        for (let t of this.props.books) {
                            if (t.id === b.id) {
                                onShelf = true;
                                break;
                            }
                        }
                        return(<Book key={i}
                        onShelf={onShelf}
                        book={b}
                        updateShelf={this.props.updateShelf}/>);
                    })} 
                    </ol>}
                    {this.state.result.length === 0 && this.state.query !== '' && (<h5>Invalid Search, try again</h5>)}
                </div>
            </div>
        );
    }
}


export default SearchBook