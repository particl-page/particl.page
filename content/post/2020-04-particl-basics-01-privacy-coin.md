---
date: 2020-04-08T10:58:08-04:00
title: "Particl Basics #1: The privacy coin"
description: "Welcome to our new series of bite-sized “get to know Particl” articles! Let’s at the core of the whole platform — the PART coin."
featured_image: "/images/particl-basics/particl_basics-poster.jpg"
category: "articles"
tags: ["PART coin"]
#series: "Particl Basics"
author: "xe-non"
---

Hello and welcome to our new series of bite-sized "get to know Particl" articles. We'll be introducing all of the innovative and privacy-friendly features Particl has to offer!

> Haven't you heard about Particl before? That's right – it is _that_ private.

Where else to start, than at the core of the whole platform – the cutting-edge PART coin.

## Public PART, "the classic"

Particl's code was forked from Bitcoin back in 2017 and like BTC, the default PART "public" coin is pseudonymous. Unlike BTC though, PART is Segwit-native, which results in higher efficiency of Particl blockchain[^1] from the beginning!

**Public** transactions are the cheapest ones and they are most widely supported (on exchanges and similar services). However from the privacy perspective, they don't offer very much – as mentioned before – they are pseudonymous like Bitcoin.

On the other hand, Public PART coins can stake and bring you _at least 2%_ in staking rewards per year. We will get into staking more in-depth in following articles.

![Public PART coin](/images/particl-basics/01-coin/particl-coin-public.png)

- basic, cheap payments
- accepted anywhere where PART is supported
- grow your savings with hands-off staking with a better interest than in your bank
- "transparent" and auditable


## Blinded PART, "the confidential transactions" (CT)

**Blind** Particl coins are a significant step-up for privacy. Based on the work of Elements Project[^2] (and Bitcoin Core developer Gregory Maxwell), Blind PART hides transaction amounts from any third parties, that aren't involved in the transaction. Any observer can still see who sent coins to whom, but can't see how much.

![Blind PART coin](/images/particl-basics/01-coin/particl-coin-blind.png)

- increased privacy with hidden amounts
- reasonable transaction costs
- capable of smart contracts


## Anonymous PART, "the ninja RingCT"

Keeping the best for last? Most definitely!

You've surely heard about Monero (XMR) before. Built on CryptoNote protocol, XMR pioneered Ring signatures[^3] for untraceable payments.

**Particl was the first coin to bring these privacy improvements on Bitcoin codebase.** In combination with Confidential Transactions (CT), resulting Anonymous PART transactions hide not only the amounts transferred, but also all participants. Observers can see _some_ transaction, but links to its participants are broken. And that's just the way to take care of your financial activities.

![Anonymous PART coin](/images/particl-basics/01-coin/particl-coin-anon.png)

Still not convinced this is a big deal? Both Blind (CT) and Anonymous (RingCT) transactions support **smart contracts**. One of the most practical examples of this is implementation of MAD Escrow[^4] mechanism in Particl Open Marketplace. That, again, is a big topic for a future article, so keep an eye for that.

- highest privacy available – hide everything from prying eyes
- capable of smart contracts

---

## Key takeaways

Each coin type offers different advantages. It's only up to you, how you want to "mix your bag". Having your PART coins split into all three types brings you the most versatility and privacy.

> Privacy in your control.

Particl is a project built for the users. It puts _you_ in control of _your_ digital and financial life. And the PART coin is just the beginning...

---

Let us know your feedback and – if you have – your questions as well. We'll be happy to explain the things we might missed.

You're kindly invited to join our Particl community on [Riot](https://riot.im/app/#/room/#particl:matrix.org), [Discord](https://discord.me/particl), [Telegram](https://t.me/particlproject) and the official [forums](https://particl.community).

And keep in touch with us, Particl.page on [Twitter](https://twitter.com/particl_page), [Medium](https://medium.com/particl-page) or [Plume](https://fediverse.blog/~/Particlpage). We'll be happy to have you!


[^1]: [Particl blockchain](https://particl.wiki/learn/particl-specifications) specifications
[^2]: [Confidential Transactions investigation](https://elementsproject.org/features/confidential-transactions/investigation) by Elements Project
[^3]: CryptoNote [Ring signatures](https://cryptonote.org/inside), [RingCT whitepaper](https://eprint.iacr.org/2015/1098.pdf)
[^4]: ["Mutually Assured Destruction" 2-party escrow](https://particl.wiki/learn/market/mad-escrow) by Particl Project