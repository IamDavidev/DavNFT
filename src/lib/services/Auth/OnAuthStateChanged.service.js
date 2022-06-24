import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../config/firebas.config'

export default function onAuthStateChangedFirebase(setUserGlobalState) {
    try {


        onAuthStateChanged(auth, (user) => {
            // setUserGlobalState()
            console.log(user)
        })
    } catch (err) {
        throw new Error(err)
    }
}