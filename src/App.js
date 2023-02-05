import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ParticlesBg from 'particles-bg';



function App() {
  return (
    <>
      <NavBar />
      <ParticlesBg color="#ffffff" bg={true} style={{ height: "100vh" }} />
      <div>
        <div className="grid place-items-center container mx-auto rounded-xl shadow border m-11">
          <p className="text-3xl text-rose-900 font-bold mb-4">
            gift_adescoin
          </p>
          <p className="px-3 text-justify text-slate-900 mb-8 text-lg">
            gift_adescoin decentralized application lets you interact with the adescoin smart contract. This contract
            implements a DeFi system via which Adeola gifts his custom token ADCN (adescoin) to deserving members of the public. Beneficiaries 
            of the adescoin cryptocurrency gift can also send designated amounts of the coin with others as they choose, provided 
            their ADCN account balance is not less than 1ADCN.
          </p>
          <div className="w-full max-w-xs">
            <form className="shadow-md rounded px-2 pt-2 pb-2 mb-4">
              <div className="mb-4">
                <label className="block grid place-items-center text-rose-900 text-xl font-bold mb-4" htmlFor="username">
                  Address to gift
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="sample: 0x2tUvr...8Zio91" />
              </div>
              <div className="mb-6">
                <label className="block grid place-items-center text-rose-900 text-xl font-bold mb-2" htmlFor="password">
                  Amount
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-amber-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="sample: 65" />
                <p className="grid place-items-center text-red-600 text-xs italic">Whole number amount only.</p>
              </div>
              <div className="block grid place-items-center">
                <button className="bg-rose-900 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Gift
                </button>
                
              </div>
            </form>
          </div>

        </div>
      
      </div>
      <Footer classname="bottom-0"/>
    </>
  );
}
export default App;