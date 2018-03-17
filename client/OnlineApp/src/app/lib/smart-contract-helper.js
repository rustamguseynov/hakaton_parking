if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// abi - is an interface from remix
var abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "getCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getBasicData",
        "outputs": [
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "number",
                "type": "uint256"
            },
            {
                "name": "availableForSale",
                "type": "bool"
            },
            {
                "name": "price",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "Buy",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "CancelSell",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
            },
            {
                "name": "price",
                "type": "uint256"
            }
        ],
        "name": "Sell",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];

var contract = web3.eth.contract(abi);

export function getContractWrapper() {
    var mycontract = contract.at("0x284a45f36c4be12cd0d22639d304b6cc5586db48");

    return mycontract;
}

