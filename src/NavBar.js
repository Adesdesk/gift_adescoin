import React from 'react';
import { useEffect, useState } from "react";
/*import Web3 from 'web3';*/
import {
    connectWallet,
    getCurrentWalletConnected
} from "./utils/Connect.js";


export default function NavBar(props) {
    const [navbar, setNavbar] = useState(false);
    /*const [web3, setWeb3] = useState(null);*/

    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function fetchData() {
            // We await here
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address)
            setStatus(status);
            addWalletListener();
        }
        fetchData();
    }, []);


    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("Write something in the text-field above.");
                } else {
                    setWallet("");
                    setStatus("Please link your Metamask using the <Connect wallet> button.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    Oops!{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        Kindly install Metamask virtual Ethereum wallet, to your
                        browser.
                    </a>
                </p>
            );
        }
    }


    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    return (
        <nav className="w-full bg-fuchsia-800 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <h2 className="text-2xl font-bold text-white">ADCN</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="animate-bounce w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">

                    <button className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100" onClick={connectWalletPressed}>
                        {walletAddress.length > 0 ? (
                            "Connected: " +
                            String(walletAddress).substring(0, 6) +
                            "..." +
                            String(walletAddress).substring(38)
                        ) : (
                            <span>Connect Wallet</span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}