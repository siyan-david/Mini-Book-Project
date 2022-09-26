import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { data } from './data.js'
import Book from './Book'
// setup vars

// const author = 'MR. robot'
// const title = 'Robot Title'
// const img =
//   'https://m.media-amazon.com/images/I/9146gw46BWL._AC_UY327_FMwebp_QL65_.jpg'
function BookList() {
  return (
    <section className='booklist'>
      {data.map((x) => {
        // const { img, title, author } = book
        return <Book key={x.id} {...x} />
      })}
    </section>
  )
}

// ReactDOM.render(<BookList />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
)
