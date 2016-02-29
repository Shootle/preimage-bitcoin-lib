# preimage-bitcoin-lib
##Node.JS implementation of Zero-Knowledge Contingent Payment

This library contains the code necessary to create a scriptPubKey as described in [The first successful Zero-Knowledge Contingent Payment](https://bitcoincore.org/en/2016/02/26/zero-knowledge-contingent-payments-announcement/).

See an example in **example.js**.
Use as a module by requiring **preimagebitcoin.js**.

# TODO
- Add method to generate the spend scriptSig.
- Add method to build the buyer transaction.
- Add method to build the seller final transaction.
