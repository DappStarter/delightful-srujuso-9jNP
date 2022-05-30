require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad inflict neck fold tuna'; 
let testAccounts = [
"0x1a65bb0e1004515fc17d850a35b30887d6b639f6b7de9e99a1f79f2d622be60b",
"0xf137fa9a858994392f5dc43f08052cb6a55959d131305429d1a93492876e3b75",
"0x771b57e1fa437e2d2e94484a13aaa0fbce09e9abcca15cfa094fe73fd4c0dc79",
"0x936a9df44d900e74c91c2e99467df387f93eb50efb777e129151e5a3459f9791",
"0xa7776b26a0650d62590b649aff3e918b53c17b47c3cc10b422dfa867a01fcc46",
"0x3fa158b7ee643e0247fe8c3e852c274f2c0eb64488a66711abb60da4b947c0f0",
"0x04b28a1a08be2be9c39ba6080f0adb440eb3382a4591dc89e6d2a33a79d3e275",
"0x6aa062ffe540893e295ffc6406e0cf7b343f945326ac8f579cf3549d1f5fa5cb",
"0x67f083c415c96adb2fc7a38cf004dc4f5d8adf1af3f6a0ecd5618845331ab8de",
"0x4f3b76b60f6f8a719aed1c6a69a1b9738079148dce7c44ca7d0b7aead2c694ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

