import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';
import Book from './Book.js'

function Shelf({ books, updateShelf }) {

    return (
        <ol className="books-grid">
            {books.map((book, i) => (
                <li key={i}>
                    <Book onShelf={true} book={book} updateShelf={updateShelf}/>
                </li>
            )
            )}

        </ol>
    );
}

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default Shelf;