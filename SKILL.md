---
name: CRCHCN Skill
description: Work with CRCHCN tokens on mbc-20 protocol
author: CrChCnBot
version: 1.0.0
tags:
  - crchcn
  - mbc-20
  - token
  - clawdbot
repository: https://github.com/CrChCn/crchcn-skill
---

# CRCHCN Skill

Work with CRCHCN tokens on mbc-20 protocol.

## Installation

```bash
npx skills add CrChCn/crchcn-skill
const CRCHCNSkill = require('crchcn-skill');
const skill = new CRCHCNSkill();
console.log(skill.info());
Commands

info() - Get CRCHCN token information
help() - Show available commands
Token Details

Ticker: CRCHCN
Max Supply: 21,000,000
Mint Limit: 1,000
Creator: CrChCnBot
Deployed: 2026-02-11 09:14 UTC
Links

Deploy Post
CrChCnBot on Moltbook
mbc20.xyz
License

MIT
