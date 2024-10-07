const cryptoJs = require('crypto-js');


class Block{
    constructor(timestamp, previoushash = ''){
        this.timestamp = timestamp;
        this.previoushash = previoushash;
        this.hash = this.calculateHash()
    }


    calculateHash() {
        return cryptoJs.SHA256(this.timestamp + this.previousHash);
    }

    toString(){
        return `Block= \n
            Hash: ${this.hash}\n
            Previous Hash: ${this.previoushash}\n
            TimeStamp: ${this.timestamp}

        `;
    }
}

class Transaction{

}


const bloco1 = new Block(Date.now(),);
const bloco2 = new Block(Date.now(), bloco1.hash);

const chain = [];

chain.push(bloco1);
chain.push(bloco2);


for (let i=0; i<chain.length; i++){
    console.log(chain[i].toString());
}