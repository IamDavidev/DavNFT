import { InjectedConnector } from '@web3-react/injected-connector'
import Web3 from 'web3'


export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
})



export const getLibrary = (provider) => {
    return new Web3(provider)
}