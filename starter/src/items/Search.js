import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from '../items/Book'

export default function Search(props) {
  //ThienNLNT make source code
  const [textInput, setTextInput] = useState('')
  //ThienNLNT make source code
  const [searchedBook, setSearchedBook] = useState([])
  //ThienNLNT make source code
  const history = useHistory()

  //ThienNLNT make source code
  const setDefaultBoxs = (searchedLocal, selectedBook) => {
    return searchedLocal.map((book) => {
      for (let i = 0; i < selectedBook.length; i++) {
        if (selectedBook[i].id === book.id) {
          return { ...book, shelf: selectedBook[i].shelf }
        }
      }
      return { ...book, shelf: 'none' }
    })
  }

  //ThienNLNT make source code
  const handleWhenInputTextSearch = (event) => {
    if (textInput.length !== 0) {
      BooksAPI.search(textInput).then((searchedBook) => {
        if (!searchedBook.error) {
          BooksAPI.getAll().then((selectedBook) => {
            setSearchedBook(setDefaultBoxs(searchedBook, selectedBook))
          })
        } else {
          setSearchedBook([])
        }
      })
    } else if (textInput.length === 0) {
      setSearchedBook([])
    }
  }
  //ThienNLNT make source code
  useEffect(() => {
    handleWhenInputTextSearch()
  }, [textInput])
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => history.push('/')}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(event) => setTextInput(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBook &&
            searchedBook.map((book, index) => (
              <Book
                key={index}
                booksDefault={book.shelf}
                book={book}
                flgSearch
                title={book.title}
                authors={book.authors}
                urlImage={book.imageLinks && book.imageLinks.thumbnail}
              />
            ))}
        </ol>
      </div>
    </div>
  )
}
