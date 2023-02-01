import NavBar from "./NavBar";
import Footer from "./Footer";
import ParticlesBg from 'particles-bg';


function App() {
  return (
    <>
      <NavBar />
      <div>
        <ParticlesBg color="#ffffff" bg={true} />
        <div className="grid place-items-center container mx-auto rounded-xl shadow border p-8 m-10">
          <p className="text-3xl text-fuchsia-800 font-bold mb-4">
            gift_adescoin
          </p>
          <p className="text-justify text-slate-900 mb-8 text-lg">
            gift_adescoin decentralized application lets you interact with the adescoin smart contract. This contract
            implements a DeFi system via which Adeola gifts his custom token ADCN (adescoin) to deserving members of the public. Beneficiaries 
            of the adescoin cryptocurrency gift can also send designated amounts of the coin with others as they choose, provided 
            their ADCN account balance is not less than 1ADCN.
          </p>
          <div className="w-full max-w-xs">
            <form className="shadow-md rounded px-2 pt-2 pb-2 mb-4">
              <div className="mb-4">
                <label className="block grid place-items-center text-fuchsia-800 text-xl font-bold mb-4" htmlFor="username">
                  Address to gift
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="sample: 0x2tUvr...8Zio91" />
              </div>
              <div className="mb-6">
                <label className="block grid place-items-center text-fuchsia-800 text-xl font-bold mb-2" htmlFor="password">
                  Amount
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="sample: 65" />
                <p className="grid place-items-center text-red-600 text-xs italic">Amount must be a whole number.</p>
              </div>
              <div className="block grid place-items-center">
                <button className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Gift
                </button>
              </div>
            </form>
          </div>

        </div>
      
      </div>
      <Footer />
    </>
  );
}
export default App;