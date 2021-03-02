---
label: Tutorial / Pool
date: 2020-04-24T16:13:00-04:00
title: "Staking with Particl Core"
slug: staking-on-pool-particl-core-qt
summary: "Staking setup walkthrough with Particl Core (Qt)"
image: "staking-on-particl-core-min.png"
categories: "Tutorial"
tags:
  - "Staking"
  - "Particl Core"
series:
authors:
  - "xe-non"
aliases:
  - "/howto/staking-on-pool-particl-core-qt"
---

## Set-up pool staking

1. open Particl Core
1. _Window_ > _Staking Setup_
1. paste Pool’s address into **Cold staking change address** field and click `Apply`

> For staking on our [Particl.page Pool](https://pool.particl.page), you would simply enter `pcs1vzuadmp42slqapdm8eevm6g8ntm3hlvgptmyjy`

{{< video
  class=""
  poster=""
  mp4=""
  webm="particl-core-coldstaking-activation.webm"
  ogg=""
>}}

Almost stupidly simple, right? And that’s the point.


### What happens next?

With this setup, each time bunch of your coins stake, they will get “moved” to the Pool. This is the best way to transition to staking on a Pool.

This is, however, not ideal when you have little amounts of coins, as it would take ages for them to stake by themselves. For these cases, there’s “zapping”.


## Zapping coins for instant cold-staking

Instant zapping isn’t available for Particl Core yet, but there’s a workaround.

{{< video
  class=""
  poster=""
  mp4=""
  webm="particl-core-coldstaking-zap.webm"
  ogg=""
>}}


1. Enable Coin Control
    1. _Settings_ > _Options…_
    1. in **Wallet** tab, check “Enable coin control features”
    1. confirm by clicking `OK`
1. Generate new Receiving address and copy it
    1. _Receive_ > click `Request payment`
    1. copy generated address
1. Send some small amount to your newly generated address using all available inputs
    1. _Send_ > under **Coin Control Features** click on `Inputs...`
    1. check all available inputs (you can click the `(un)select all` button) and confirm with `OK`
    1. copy your new address to **Pay to** field
    1. set transaction **Amount** to some small value (like 0.01 PART)
    1. click `Send`

This will send all but those 0.01 PART to staking pool. Once the sent coins mature for staking (about 8 hours), they will start staking automatically on the Pool.
