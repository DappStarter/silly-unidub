require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture struggle rescue pitch modify giraffe light army giggle'; 
let testAccounts = [
"0xf3780cf013bb00ab0be16fde75d6ed6af83bfca35518419cc7ff8f3026849fdc",
"0x1d8886f829ac2935011c6502a980da3e0621f05f1d031ec42f18706cd11b80f2",
"0xad9ee89fa69226a0b39ecd35a9988cf9ad91d64265c6d863ba425032d716c6de",
"0xaf6ecfcb71318793e0054eac459d4e7d0af6a47aeb5c5dba6ced38f43718bb9b",
"0xbc37f21209fb7a972d5fb26a7ea4dbb5295a5dd204267ee31e68901885e591e9",
"0xe39242ec7149764e8cf1636aaadba8d6ec5b53485183b3fdd44b062827c4aa6b",
"0x4167826202c20a7a0963f0a6964e32f03deecf11a4202fdd91dd65ef7f792cce",
"0xfe35adcde06c7bbdecb7b68640549beb5ebded9f4bed24903c4dbf6a9a6b9ad8",
"0x3ba6304275bcfc9f0944e3ead17d370bec6cc260d71db66c14b678aecf88b8b5",
"0xf7923802541ce6767781e1ac44679e53bc52801e2456bcde9e6632e672a29401"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


