import { useSelector, useDispatch } from "react-redux"
import {  fetchAdd } from "../actions/addActions"

export const useAdd=({translateFrom=''})=>{
  const currentWordFromState = useSelector((state) => state.fetch.currentWord)
  const resultFromState = useSelector((state) => state.fetch.result)
  const dispatch = useDispatch()
  const isAdded = resultFromState.added!==undefined ? resultFromState.added : undefined

const handleSubmitAdd = (e) => {
  e.preventDefault()
  const word=currentWordFromState.response
  const language = translateFrom
  word && language && dispatch(fetchAdd(language,word))
}

  return {handleSubmitAdd,isAdded}
}
