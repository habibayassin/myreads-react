import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';

function BookOptions({onShelf, book, updateShelf}) {

    const updateBookShelf = event => {updateShelf(book, event.target.value);}
    const prevShelf = onShelf? book.shelf : 'none'
    console.log(prevShelf)

    return(
            <div className="book-shelf-changer">
                <select onChange={updateBookShelf} defaultValue={prevShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
       
    );

}

BookOptions.propTypes = {
    onShelf: PropTypes.bool.isRequired,
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
};


export default BookOptions