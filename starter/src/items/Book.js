import React from 'react'
import * as BooksAPI from '../BooksAPI'

export default function Book(props) {
  //ThienNLNT make source code
  const {
    booksDefault,
    flgSearch,
    setNewBook,
    book,
    title,
    authors,
    urlImage,
  } = props
  //ThienNLNT make source code
  const handleBookChangeBox = (ev) => {
    if (ev.target.value !== 'flag') {
      BooksAPI.update(book, ev.target.value).then((res) =>
        BooksAPI.getAll().then((newBook) => setNewBook(newBook)),
      )
    }
  }
  //ThienNLNT make source code
  const handleBookChangeBoxInSearchPage = (ev) => {
    if (ev.target.value !== 'flag') {
      BooksAPI.update(book, ev.target.value)
    }
  }
  //ThienNLNT make source code
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${urlImage}")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(ev) => {
              if (!flgSearch) {
                handleBookChangeBox(ev)
              } else {
                handleBookChangeBoxInSearchPage(ev)
              }
            }}
            defaultValue={booksDefault}
          >
            <option value="flag" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors && authors.map((aut) => `${aut},`)}
      </div>
    </div>
  )
}
