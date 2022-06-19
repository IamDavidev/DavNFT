import { useWeb3React } from '@web3-react/core'
import { connector } from '../../config/web3.config'
import useUser from './useUser.hook'

export default function useLogin() {
    const { activate, deactivate, account, error } = useWeb3React()
    const { user, SignIn } = useUser()

    const connectWalletMetamask = () => {
        activate(connector)
    }

    const disconnectWallet = () => {
        deactivate()
    }

    console.log(user)

    return {
        connectWalletMetamask,
        disconnectWallet,
        SignIn,
        error,
        account,
        user
    }
}