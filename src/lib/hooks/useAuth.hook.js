import { useWeb3React } from "@web3-react/core"

import { supabase } from '../../config'
import { connector } from '../../config/web3.config'
import useUser from "./useUser.hook"


export default function useAuth() {
    const { activate } = useWeb3React()
    const { setUserGlobalState } = useUser()

    const signInWithMetamask = () => {
        activate(connector)
    }

    const sighInWithGoogle = () => ''

    const signInWithGmailandPassword = async ({ email, password }) => {

        const { error, user } = await supabase.auth.signIn({
            email,
            password
        })

        return {
            user,
            error
        }
    }

    const signUpWithGmailandPassword = async ({ email, password, userName, profilePicture, banner, id, address, verified, name, isLoggedIn }) => {


        const userData = {
            email,
            userName,
            profilePicture,
            banner,
            id,
            address,
            verified,
            name
        }

        const { error, session, user } = await supabase.auth.signUp({
            email,
            password,
        }, {
            data: userData
        })

        console.log(">>>session", session)
        console.log(">>>user", user)
        if (error) {
            console.error('supabase', 'signUp', error)
            throw new Error(error)
        }

        setUserGlobalState({
            userName,
            address,
            verified,
            banner,
            email,
            isLoggedIn,
            name,
            profilePicture,
            id
        })
    }



    return {
        signInWithMetamask,
        sighInWithGoogle,
        signInWithGmailandPassword,
        signUpWithGmailandPassword,
    }
}