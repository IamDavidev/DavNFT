import { useSelector, useDispatch } from 'react-redux'
import { resetUser, updateUser, updatedAddress } from '../redux/states/user.state'

export default function useUser() {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()


    const SignIn = ({ username, email, name, profilePicture, banner, id, address, verified, isLoggedIn }) => [
        dispatch(updateUser({
            user: {
                username,
                email,
                name,
                profilePicture,
                banner,

            },
            id,
            address,
            verified,
            isLoggedIn,
        }))
    ]

    const SignWithAddress = ({ address }) => {
        dispatch(updatedAddress({
            address
        }))
    }

    const SignOut = () => {
        dispatch(resetUser())
    }

    return {
        user,
        SignOut,
        SignIn,
        SignWithAddress
    }
}