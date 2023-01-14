import React from "react";

const WalletButton = (isConnected) => {
  return (
    <button
      id="Connect-Wallet"
      //   onClick={() => console.log("open")}
      type="button"
      className="text-black bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-600 hover:bg-[#F87171] hover:text-white dark:focus:ring-red-800"
    >
      {isConnected ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
};

export default WalletButton;
