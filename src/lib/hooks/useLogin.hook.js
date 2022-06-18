import { useWeb3React } from '@web3-react/core'
import { connector } from '../../config/web3.config'

export default function useLogin() {
    const { activate, deactivate, chainId, account, error } = useWeb3React()
    console.log("🚀 ~ file: useLogin.hook.js ~ line 6 ~ useLogin ~ error", error)
    console.log("🚀 ~ file: useLogin.hook.js ~ line 6 ~ useLogin ~ account", account)
    console.log("🚀 ~ file: useLogin.hook.js ~ line 6 ~ useLogin ~ chainId", chainId)
    console.log("🚀 ~ file: useLogin.hook.js ~ line 6 ~ useLogin ~ deactivate", deactivate)
    console.log("🚀 ~ file: useLogin.hook.js ~ line 6 ~ useLogin ~ activate", activate)



    const connectWalletMetamask = () => {
        activate(connector)
    }

    const disconnectWallet = () => {
        deactivate()
    }

    return {
        connectWalletMetamask,
        disconnectWallet,
        chainId,
        error,
        account
    }
}