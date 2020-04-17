import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeRequestType } from '../../actions/actions'

export const useRedirect = ({
  translateTo = '',
  requestWord = '',
  translateFrom = '',
}) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = (e) => {
    switch (e.target.name) {
      case 'add':
        dispatch(changeRequestType('add'))
        history.push({
          pathname: '/edit/add',
          props: {
            word: requestWord,
            translateFrom: translateFrom,
            translateTo: translateTo,
            redirect: true,
          },
        })
        break
      case 'update':
        dispatch(changeRequestType('update'))
        history.push({
          pathname: '/edit/update',
          props: { redirect: true, requestWord: requestWord },
        })
        break
      case 'delete':
        dispatch(changeRequestType('delete'))
        history.push({
          pathname: '/edit/delete',
          props: { redirect: true, requestWord: requestWord },
        })
        break
      default:
        break
    }
  }

  return handleClick
}
