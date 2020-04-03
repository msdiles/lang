import React from 'react'

const ListOfTranslates = ({ result = {} }) => {
  return (
    <div className='list-of-translate'>
      <p>Перевод: </p>
      {result.response.translations.map((element, index) => (
        <div  key={index} className='list-of-words'>
          <p>{element.language}</p>
          <ul>{ListOfWords(element)}</ul>
        </div>
      ))}
    </div>
  )
}

const ListOfWords = element => {
  return element.words.map((word, index) => (
    <li key={index}>
      {index + 1}. {word}
    </li>
  ))
}

export default ListOfTranslates
