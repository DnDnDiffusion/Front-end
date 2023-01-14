import "../styles/globals.css";
// import walletconnect
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { mainnet, goerli } from "wagmi"; // not using wagmi chains bc just goe

const chains = [goerli, mainnet];

// set your_project_id to equal the env variable

const YOUR_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: YOUR_PROJECT_ID }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>

      <Web3Modal projectId={YOUR_PROJECT_ID} ethereumClient={ethereumClient} />
    </>
  );
}

export default MyApp;
