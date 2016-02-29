var bitcoin = require('bitcoinjs-lib');

function createPreImageScriptPubKey(hashBuffer, sellerPubKeyBuffer, buyerPubKeyBuffer, blockHeight, blocksToWait) {
    var chunks = [
        bitcoin.opcodes.OP_SHA256, 
        hashBuffer, bitcoin.opcodes.OP_EQUAL, 
        bitcoin.opcodes.OP_IF, 
            sellerPubKeyBuffer, 
        bitcoin.opcodes.OP_ELSE, 
            new Buffer(blockHeight + blocksToWait), bitcoin.opcodes.OP_CHECKLOCKTIMEVERIFY, bitcoin.opcodes.OP_DROP,
            buyerPubKeyBuffer,
        bitcoin.opcodes.OP_ENDIF,
        bitcoin.opcodes.OP_CHECKSIG
    ];
    var compiled = bitcoin.script.compile(chunks);
    var scriptHashOutput = bitcoin.script.scriptHashOutput(bitcoin.crypto.hash160(compiled));
    return scriptHashOutput;
}

module.exports = {
    createPreImageScriptPubKey: createPreImageScriptPubKey
};
