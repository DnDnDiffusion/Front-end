import React, { useEffect } from "react"
import { useAccount, useDisconnect, useSignMessage } from "wagmi"
import { useWeb3Modal } from "@web3modal/react"

// type Props = {}

const WalletConnectButton = () => {
  const { address, isConnected } = useAccount()
  const { open, isOpen, close } = useWeb3Modal()
  const { disconnect } = useDisconnect()
  // const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
  //   message: "",
  // })

  const handleConnect = (e) => {
    e.preventDefault()
    if (!isConnected) return open()
    console.log("already connected to wallet", address)
  }

  const handleDisconnect = (e) => {
    e.preventDefault()
    if (isConnected) return disconnect()
    console.log("not connected to wallet", address)
  }

  useEffect(() => {
    if (isConnected) {
      console.log("connected to wallet", address)
    }
  }, [isConnected])

  return (
    <div>
      {isConnected ? (
        <button className="w-fit bg-red-500 text-black rounded-lg p-4" onClick={handleDisconnect}>
          Wallet Disconnect
        </button>
      ) : (
        <button className="w-fit bg-green-500 text-black rounded-lg p-4" onClick={handleConnect}>
          Wallet Connect
        </button>
      )}
    </div>
  )
}

export default WalletConnectButton
