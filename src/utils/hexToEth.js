// const Web3 = require('web3');
import Web3 from "web3"

/**
 * Converts a balance in Wei (hexadecimal format) to Ether.
 * @param {string} balanceInWei - The balance in Wei (hexadecimal format).
 * @returns {string} - The balance in Ether as a string.
 */

export function convertWeiToEther(balanceInWei) {
  const balanceInEther = Web3.utils.fromWei(balanceInWei, 'ether');
  return balanceInEther;
}