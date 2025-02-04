export default async function  getSepEth(walletAddress,chain){
    let url=""    
    if(chain==="Sepolia"){
        url = import.meta.env.VITE_SEPOLIA_RPC_URL
    }else{
        url = import.meta.env.VITE_MAINNET_RPC_URL
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "jsonrpc":"2.0",
            "id":1,
            "method":"eth_getBalance",
            "params":[`${walletAddress}`,"latest"]
        })
    });
    const data = await response.json();
    return data
    
}