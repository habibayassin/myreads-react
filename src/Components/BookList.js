import React from 'react'
import '../App.css'
import PropTypes from 'prop-types';
import Shelf from './Shelf.js'

function BookList({ books, updateShelf }) {

    const bookShelves = [{name:'Currently Reading', type:'currentlyReading'}, {name:'Want to Read', type:'wantToRead'}, {name:'Read', type:'read'}] //map on book shelves
    console.log(books);
    return (
        <div className="list-books-content">
            <div>
                {bookShelves.map((s, i) => {
                    const bookspershelf = books.filter(b => b.shelf === s.type)
                    return (
                        <div key={i} className="bookshelf">
                            <h2 className="bookshelf-title">{s.name}</h2>
                            <div className="bookshelf-books">
                                <Shelf books={bookspershelf} updateShelf={updateShelf}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );

}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default BookList;