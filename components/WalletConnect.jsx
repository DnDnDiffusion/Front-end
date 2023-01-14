import React, { useEffect } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import WalletButton from "./WalletButton";

// Open modal (if route is not provided, modal opens view based on connection / config status)

const WalletConnect = () => {
  const { connect, isConnected, account } = useAccount();
  const { open, isOpen, close } = useWeb3Modal();

  const handleConnect = () => {
    if (!isConnected) return open();
    console.log("already connected to wallet, ", address);
  };

  if (isConnected) {
    return (
      <div>
        <WalletButton
          isConnected={true}
          onClick={() =>
            console.log("you already connected! go play dnd", isConnected)
          }
        />
      </div>
    );
  }
  return (
    <div>
      <WalletButton isConnected={false} onClick={handleConnect} />
    </div>
  );
};

export default WalletConnect;
