import { useHistory } from 'react-router-dom'

const HistoryPush = ({path})=>{
  const history =useHistory()
  history.push(path)
  return null
}

export default HistoryPush
