import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';
import BookOptions from './BookOptions.js'
import Placeholder from '../placeholder-images-image_large.png'

function Book({ onShelf, book, updateShelf }) {

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail? 
                        book.imageLinks.thumbnail: Placeholder})`
                }}></div>
                <BookOptions onShelf={onShelf} book={book} updateShelf={updateShelf}/>
            </div>
            <div className="book-title">{book.title ? book.title : 'No title available'}</div>
            {book.authors && book.authors.map((a, i) => (<div className="book-authors" key={i}>{a}</div>))}
        </div>
    );

}

Book.propTypes = {
    onShelf: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default Book