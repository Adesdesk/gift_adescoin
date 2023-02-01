import React from 'react';
/*import Web3 from 'web3';*/


// connect to metamask
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            Oops!{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              Kindly install Metamask virtual Ethereum wallet, to your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};


export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
        };
      } else {
        return {
          address: "",
        };
      }
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            Oops!{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              Get a virtual Ethereum wallet - Metamask installed, to your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};


// get instance of my contract
/*async function loadContract() {
  return new web3.eth.Contract(contractABI, contractAddress);
}*/