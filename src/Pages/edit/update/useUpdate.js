import { useDispatch, useSelector } from 'react-redux'
import { fetchUpdate } from '../../../actions/updateActions'

export const useUpdate = () => {
  const currentWordFromState = useSelector((state) => state.fetch.currentWord)
  const resultFromState = useSelector((state) => state.fetch.result)
  const dispatch = useDispatch()
  const isUpdated = resultFromState.updated ? resultFromState.updated : false

  const handleSubmitUpdate = () => {
    const word = currentWordFromState.response
    word && dispatch(fetchUpdate(word))
  }

  return { handleSubmitUpdate, isUpdated }
}
