import  { useContext } from 'react'
import UserContext from './UserContext'
const HomePage = () => {
  const user = useContext( UserContext )
  console.log(user)
  return( null )
}
export default HomePage
