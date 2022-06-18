import { useSelector, useDispatch } from 'react-redux'
import { createUser } from '../redux/states/user.state'

export default function useUser() {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()


    const signInUser = ({ username = "userSelect:" }) => {
        dispatch(createUser(username))
    }


    return {
        user,
        dispatch,
        signInUser
    }

}