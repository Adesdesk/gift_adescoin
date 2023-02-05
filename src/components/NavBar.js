import React from 'react';
import { useEffect, useState } from "react";
/*import Web3 from 'web3';*/
import {
    connectWallet,
    getCurrentWalletConnected
} from "../utils/Connect.js";


export default function NavBar() {
    /*const [web3, setWeb3] = useState(null);*/

    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function fetchData() {
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
                    setStatus("This wallet can now authorize transactions..");
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
                    <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
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
        <nav className="w-full bg-rose-900 shadow">
            <div className="flex py-2 justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
                <div className="relative flex items-center justify-between py-0 md:py-0 md:block">
                <a href="/">
                    <img className="w-full shrink w-20 h-20 py-0 px-0" src={require('./adescoin.png')} alt="adescoin" />
                    </a>
                </div>

                <button className="absolute bottom-2 top-3 right-6 h-10 px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100" onClick={connectWalletPressed}>
                    {walletAddress.length > 0 ? (
                        "Connected: " +
                        String(walletAddress).substring(0, 6) +
                        "..." +
                        String(walletAddress).substring(38)
                    ) : (
                        <span>Connect Wallet
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}