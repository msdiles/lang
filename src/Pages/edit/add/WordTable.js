import React from 'react'

const WordTable = ({ russian = '', english = [] }) => {
  const addedRussian = russian !== '' ? <p>Оригинал:{russian}</p> : ''
  console.log(english)
  const addedEnglish =
    english !== [] ? (
      <React.Fragment>
        <p>Перевод:</p>
        <ul>
          {english.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </React.Fragment>
    ) : (
      ''
    )
  return (
    <div className='word-table'>
      {addedRussian}
      {addedEnglish}
    </div>
  )
}

export default WordTable
