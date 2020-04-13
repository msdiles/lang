import { useSelector, useDispatch } from 'react-redux'
import { fetchDelete } from '../actions/deleteActions'

export const useDelete = () => {
  const currentWordFormState = useSelector((state) => state.fetch.currentWord)
  const resultFromState = useSelector((state) => state.fetch.result)
  const dispatch = useDispatch()
  const isDeleted = resultFromState.deleted ? resultFromState.deleted : false

  const handleSubmitDelete = (e) => {
    const language = currentWordFormState.response.language
    const id = currentWordFormState.response._id
    language && id && dispatch(fetchDelete(language, id))
  }

  return { handleSubmitDelete, isDeleted }
}
