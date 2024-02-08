import './App.css'
import React, { useState, useEffect } from 'react'
import Boxs from './items/Boxs'
import * as BooksAPI from './BooksAPI'
import { useHistory } from 'react-router-dom'

const booksDefault = [
  { title: 'Currently Reading', shelfName: 'currentlyReading' },
  { title: 'Want to Read', shelfName: 'wantToRead' },
  { title: 'Read', shelfName: 'read' },
]
function App() {
  //ThienNLNT make source code
  const [listBooks, setListBooks] = useState([])
  const history = useHistory()

  //ThienNLNT make source code
  useEffect(() => {
    BooksAPI.getAll().then((booksFromApi) => {
      setListBooks(booksFromApi)
    })
  }, [])

  //ThienNLNT make source code
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {booksDefault.map((bookshelf, index) => (
              <Boxs
                key={index}
                title={bookshelf.title}
                book={
                  listBooks &&
                  listBooks.filter(
                    (book) => book && book.shelf === bookshelf.shelfName,
                  )
                }
                setNewBook={setListBooks}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => history.push('/search')}>Add a book</button>
        </div>
      </div>
    </div>
  )
}

export default App
