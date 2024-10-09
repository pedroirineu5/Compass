const cryptoJs = require('crypto-js');


class Block {

    constructor(timestamp, transactions, previousHash = '') {
      this.timestamp = timestamp;             
      this.transactions = transactions;       
      this.previousHash = previousHash;       
      this.hash = this.calculateHash();       
      this.nonce = Math.floor(Math.random() * 1000000);
    }
  
    calculateHash() {
      return CryptoJS.SHA256(this.timestamp + this.previousHash + JSON.stringify(this.transactions) + this.nonce).toString();
    }
  
    toString() {
      return `
      ==============================
      Block Information:
      ==============================
      Timestamp     : ${this.timestamp}
      Previous Hash : ${this.previousHash}
      Hash          : ${this.hash}
      Nonce         : ${this.nonce}
      Transactions  : 
        ${this.transactions.map(tx => tx.toString()).join('\n')}
      ==============================
      `;
    }

}

class Transaction {
    constructor(amount, sender, receiver) {
      this.amount = amount;      
      this.sender = sender;       
      this.receiver = receiver;   
    }
  
    
    toString() {
      return `${this.sender}, ${this.amount}, ${this.receiver}`;
    }
}

class Blockchain {
    constructor() {
      this.chain = [this.createGenesisBlock()];   // Inicializa com o bloco gênesis
      this.pendingTransactions = [];              // Lista de transações pendentes
    }
  
    createGenesisBlock() {
      return new Block(Date.now().toString(), [], "0");  // Bloco inicial (vazio)
    }
  
    getLatestBlock() {
      return this.chain[this.chain.length - 1];
    }
  
    // Função para adicionar um novo bloco diretamente, sem mineração
    addBlock() {
      let block = new Block(Date.now().toString(), this.pendingTransactions, this.getLatestBlock().hash);
      this.chain.push(block);
      this.pendingTransactions = [];
    }
  
    createTransaction(transaction) {
      this.pendingTransactions.push(transaction);
    }
  
    getBalanceOfAddress(address) {
      let balance = 0;
  
      for (const block of this.chain) {
        for (const trans of block.transactions) {
          if (trans.sender === address) {
            balance -= trans.amount;
          }
  
          if (trans.receiver === address) {
            balance += trans.amount;
          }
        }
      }
  
      return balance;
    }
  
    
    isChainValid() {
      for (let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];
  
        if (currentBlock.hash !== currentBlock.calculateHash()) {
          return false;
        }
  
        if (currentBlock.previousHash !== previousBlock.hash) {
          return false;
        }
      }
      return true;
    }
  }

  