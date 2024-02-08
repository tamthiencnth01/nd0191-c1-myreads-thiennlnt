import React from 'react'
import Book from '../items/Book'

export default function Boxs(props) {
  //ThienNLNT make source code
  const { book, title, setNewBook } = props
  //ThienNLNT make source code
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {book &&
            book.map((item, index) => (
              <li key={index}>
                <Book
                  booksDefault={item.shelf}
                  book={item}
                  setNewBook={setNewBook}
                  title={item.title}
                  authors={item.authors}
                  urlImage={item.imageLinks && item.imageLinks.thumbnail}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  )
}
