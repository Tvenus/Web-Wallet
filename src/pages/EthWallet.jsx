import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import getSepEth from "../utils/getSepoliaBalance";
import { convertWeiToEther } from "../utils/hexToEth";

export const EthWallet = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [chain, setChain] = useState("MainNet");

    const handleNetworkChange = (event) => {
        setChain(event.target.value);
    };

    return (
        <div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={async function () {
                        const seed = await mnemonicToSeed(mnemonic);
                        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                        const hdNode = HDNodeWallet.fromSeed(seed);
                        const child = hdNode.derivePath(derivationPath);
                        const privateKey = child.privateKey;
                        const wallet = new Wallet(privateKey);
                        setCurrentIndex(currentIndex + 1);
                        const data = await getSepEth(wallet.address, chain);
                        let { result } = data;
                        result = convertWeiToEther(result);
                        setAddresses([...addresses, { address: wallet.address, privateKey: wallet.privateKey, result }]);
                    }}
                    className="bg-blue-500 mt-4 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Generate Wallet
                </button>

                <select
                    value={chain}
                    onChange={handleNetworkChange}
                    className="bg-gray-200 border border-gray-300 rounded px-2 py-1"
                >
                    <option value="MainNet">MainNet</option>
                    <option value="Sepolia">Sepolia</option>
                </select>
            </div>

            <div className="mt-4 space-y-2">
                {addresses.map((wallet, index) => (
                    <div key={index} className="p-4 border bg-gray-100 border-gray-300 rounded">
                        <p><strong>Address:</strong> {wallet.address}</p>
                        <p><strong>Private Key:</strong> {wallet.privateKey}</p>
                        <p><strong>Balance:</strong> {wallet.result} ETH</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
