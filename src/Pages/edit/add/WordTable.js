import React from 'react'

const WordTable = ({ russian = '', english = [] }) => {
  const addedRussian = russian !== '' ? <p>Оригинал:{russian}</p> : ''
  console.log(english)
  const addedEnglish =
    english !== [] ? (
      <div>
        <p>Перевод:</p>
        <ul>
          {english.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    ) : (
      ''
    )
  return (
    <React.Fragment>
      {addedRussian}
      {addedEnglish}
    </React.Fragment>
  )
}

export default WordTable
