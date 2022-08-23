---
date: 2022-08-23T21:11:06+02:00
title: "The sad end of an era"
slug: "pool-shutdown"
summary: "How a series of unfortunate events killed our Pool as we knew it"
image: "particl-page_pool-min.jpg"
categories: "News"
tags: 
  - "Pool"
#series:
  #- ""
authors:
  - "xe-non"
#aliases:
  #- ""
---

> Our usual jokes aside, let's get real this time.

## Pool.particl.page shut down

..for now.

August 21, 2022, we're been notified by the community regarding weird behavior of our staking Pool. With the sneaky blockchain fork lurking around lately, we thought this would be a piece of cake.

After a night of investigating and pin-pointing the issue, we went ahead with getting _back on the right track_.


### Dominos falling

What seemed like a relatively easy fix turned out to be a sequence of breaking everything left and right.

Failed Pool update due to a bad dependency. Resyncing of blockchain stuck in endless loop. And finally, our VPS running out of memory. And finally, roll-backing to our backup snapshot was the figurative nail in the digital coffin.


### Seriously?

Unfortunately yes. We were planning to switch to a different VPS provider anyway, even though couple months later.

The whole Pool can be easily reproduced, all the code and wallets are safely backed up.

**Rest assured, your coins are safe!** [The beauty of PART cold-staking is a fact, that your coins never really left your wallet](https://particl.wiki/learn/staking/intro/#cold-staking) and stayed on our Pool.

> **Now what?**
>
> By simply disconnecting from our Pool and sending your coins to your different wallet (or delegating your stake power to a [competing staking Pool](https://particl.wiki/learn/staking/pools/)) you're good to go! Just follow [the staking tutorial](https://particl.page/articles/staking-on-pool/) in reverse.


### The aftermath

We're sorry this ended up like this. Our Pool was running as one of the first (if not _the_ first) community-run Pools for Particl. The backups were there and still yet somehow, we fucked up. And that is on us.

Even though no financial damage was done (not counting a PART or two from missed staking rewards), our reputation took a hit and we're not taking that lightly.

So we're reached the end of this pool. Time to get out and dry up.

