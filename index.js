const token = require('./crchcn-token');

class CRCHCNSkill {
  constructor() {
    this.token = token;
    this.ticker = 'CRCHCN';
  }

  info() {
    return this.token.info();
  }

  createUser(username) {
    return this.token.createUser(username);
  }

  getBalance(address) {
    return this.token.getBalance(address);
  }

  mint(address, amount) {
    return this.token.mint(address, amount);
  }

  transfer(from, to, amount, privateKey) {
    return this.token.transfer(from, to, amount, privateKey);
  }

  sign(message, privateKey) {
    return this.token.sign(message, privateKey);
  }

  verify(message, signature, publicKey) {
    return this.token.verify(message, signature, publicKey);
  }

  getAllBalances() {
    return this.token.getAllBalances();
  }

  getMerkleRoot() {
    return this.token.getMerkleRoot();
  }

  getProof(address) {
    return this.token.getProof(address);
  }

  verifyProof(address, balance, proof, root) {
    return this.token.verifyProof(address, balance, proof, root);
  }

  help() {
    return {
      commands: [
        'info() - информация о токене',
        'createUser(username) - создать пользователя',
        'getBalance(address) - проверить баланс',
        'mint(address, amount) - майнить токены',
        'transfer(from, to, amount, privateKey) - перевести токены',
        'sign(message, privateKey) - подписать сообщение',
        'verify(message, signature, publicKey) - проверить подпись',
        'getAllBalances() - все балансы',
        'getMerkleRoot() - корень Merkle дерева',
        'getProof(address) - доказательство баланса',
        'verifyProof(address, balance, proof, root) - проверить доказательство'
      ],
      example: 'const skill = new CRCHCNSkill(); console.log(skill.info());'
    };
  }
}

module.exports = CRCHCNSkill;
