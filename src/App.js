import NavBar from "./NavBar";
import ParticlesBg from 'particles-bg';


function App() {
  return (
    <>
      <NavBar />
      <div>
        <ParticlesBg color="#EC9706" num={100} type="square" bg={true} />
        <div className="grid place-items-center container mx-auto rounded-xl shadow border p-8 m-10">
          <p className="text-3xl text-amber-900 font-bold mb-4">
            gift_adescoin
          </p>
          <p className="text-justify text-amber-700 mb-8 text-lg">
            gift_adescoin decentralized application lets you interact with the adescoin smart contract. This contract
            implements a DeFi system via which Adeola gifts his custom token ADCN (adescoin) to deserving members of the public. Beneficiaries 
            of the adescoin cryptocurrency gift can also send designated amounts of the coin with others as they choose, provided 
            their ADCN account balance is not less than 1ADCN.
          </p>
          <div class="w-full max-w-xs">
            <form class="shadow-md rounded px-2 pt-2 pb-2 mb-4">
              <div class="mb-4">
                <label class="block grid place-items-center text-amber-900 text-xl font-bold mb-4" for="username">
                  Address to gift
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-amber-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="sample: 0x2tUvr...8Zio91" />
              </div>
              <div class="mb-6">
                <label class="block grid place-items-center text-amber-900 text-xl font-bold mb-2" for="password">
                  Amount
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-amber-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="sample: 65" />
                <p class="grid place-items-center text-amber-900 text-xs italic">Amount must be a whole number.</p>
              </div>
              <div class="block grid place-items-center">
                <button class="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Gift
                </button>
              </div>
            </form>
          </div>

        </div>
      <p class="text-center text-gray-500 text-xs">
        &copy;2022 adescoin. All rights reserved.
      </p>
      </div>
    </>
  );
}
export default App;