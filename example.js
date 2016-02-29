var preimagebitcoin = require('./preimagebitcoin.js');

var hashInput = 'aaaa';
var sellerPubKey = '0450863AD64A87AE8A2FE83C1AF1A8403CB53F53E486D8511DAD8A04887E5B23522CD470243453A299FA9E77237716103ABC11A1DF38855ED6F2EE187E9C582BA6';
var buyerPubKey = '0450863AD64A87AE8A2FE83C1AF1A8403CB53F53E486D8511DAD8A04887E5B23522CD470243453A299FA9E77237716103ABC11A1DF38855ED6F2EE187E9C582BA6';
var blockHeight = 300000;
var blockToWait = 100;

var hashBuffer = new Buffer(hashInput, 'hex');
var sellerPubKeyBuffer = new Buffer(sellerPubKey, 'hex');
var buyerPubKeyBuffer = new Buffer(buyerPubKey, 'hex');

var result = preimagebitcoin.createPreImageScriptPubKey(hashBuffer, sellerPubKeyBuffer, buyerPubKeyBuffer, 300000, 100);
console.log(result.toString('hex'));
