import React, { useEffect, useState } from "react";
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/constants'

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

  return transactionContract;

}

    export const TransactionProvider = ({children}) => {

        const [currentAccount, setCurrentAccount] = useState("");
        const [formData, setFormData] = useState( {adress: '', amount: '', keyword: '', message: ''})
        const [isLoading, setLoading] = useState(false)
        const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))

        
        const handleChange= (e, name) => {
            setFormData((prev)=> ({...prev, [name]:e.target.value}))
        }
        const checkIfWalletIsConnected = async() => {
            try {

                if (!ethereum) return alert("Please install metamask");

                const accounts = await ethereum.request({method: 'eth_accounts'});
    
                if (accounts.length) {
                    setCurrentAccount(accounts[0])
                } else {
                    alert("No accounts found")
                }
    
                console.log(accounts)

            } catch(error) {
                console.log(error);
                alert("No ethereum account found")

                throw new Error("No ethereum object.")
            }
         
        }

        const connectWallet = async () => {
            try {
                if(!ethereum) return alert("Please install metamask");

                const accounts = await ethereum.request({method: 'eth_requestAccounts'})
                
                setCurrentAccount(accounts[0])

            } catch(error) {
                console.log(error);
                alert("No ethereum account found")
                throw new Error("No ethereum object.")
            }
        }

        const sendTransactions = async () => {
            try {
                if(!ethereum) return alert("Please install metamask")
                const {addressTo, amount, keyword, message} = formData;
                const transactionContract = getEthereumContract()
                const parsedAmount = ethers.utils.parseEther(amount)

                await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [{
                        from: currentAccount,
                        to: addressTo,
                        gas: '0x5208', // 21000GWEI
                        value: parsedAmount._hex, //
                    }]
                })

                const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)
                setLoading(true);
                console.log(`Loading - ${transactionHash.hash}`)
                await transactionHash.wait()
                setLoading(false)
                console.log(`Success - ${transactionHash.hash}`)

                const transactionsCount = await transactionContract.getEthereumContract()

                setTransactionCount(transactionsCount.toNumber())
                
            } catch (error) {
                    console.log(error)
            }
        }

        useEffect(()=> {
            checkIfWalletIsConnected();
        }, [])
        return (
            <TransactionContext.Provider value={{connectWallet, currentAccount, formData, sendTransactions, handleChange}}>
                {children}
            </TransactionContext.Provider>
        )
    }
