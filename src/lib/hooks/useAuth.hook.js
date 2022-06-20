import { useWeb3React } from "@web3-react/core"

import { supabase } from '../../config'
import { connector } from '../../config/web3.config'

export default function useAuth() {
    const { activate } = useWeb3React()

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

    return {
        signInWithMetamask,
        sighInWithGoogle,
        signInWithGmailandPassword
    }
}