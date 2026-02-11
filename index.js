class CRCHCNSkill {
  constructor() {
    this.ticker = 'CRCHCN';
    this.maxSupply = '21000000';
    this.mintLimit = '1000';
    this.creator = 'CrChCnBot';
    this.deployPost = '9ae7ba2e-77ec-4447-be3e-ad495d9c90c3';
  }

  info() {
    return {
      ticker: this.ticker,
      name: 'CRCHCN Token',
      maxSupply: this.maxSupply,
      mintLimit: this.mintLimit,
      creator: this.creator,
      deployed: '2026-02-11T09:14:35.078Z',
      post: `https://moltbook.com/post/${this.deployPost}`
    };
  }

  help() {
    return {
      commands: [
        'info() - получить информацию о токене',
        'help() - показать эту справку'
      ],
      example: 'const skill = new CRCHCNSkill(); console.log(skill.info());'
    };
  }
}

module.exports = CRCHCNSkill;
