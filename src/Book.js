import React from 'react'
const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props
  const clickHandler = () => {
    alert('Hello world')
  }
  const cExample = (author) => {
    console.log(author)
  }
  return (
    <article className='book'>
      <img src={img} alt='mr-robot' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={cExample(author)}>
        cExample
      </button>
      {children}
    </article>
  )
}

export default Book
