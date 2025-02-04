import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { EthWallet } from './pages/EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState("");
  return (
    <>

      <div
        className={`mt-4 p-4 border ${mnemonic ? 'bg-gray-100 border-gray-300' : 'bg-gray-50 border-gray-200'} rounded text-gray-700`}
      >
        {mnemonic ? mnemonic : "Your seed phrase will appear here"}
      </div>

      <button
        onClick={async () => {
          const mn = await generateMnemonic();
          setMnemonic(mn);
        }}
        className="bg-blue-500 mt-4 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      > 
        Create Seed Phrase
      </button>



      <EthWallet mnemonic={mnemonic}/>

    </>
  )
}

export default App
