# particl.page

[Particl.page](https://particl.page) is a community-run effort to grow Particl ecosystem and offer useful user-centric tools. Now with articles and projects built by the community.

To submit a new article/tutorial or a project, please open a new Issue and follow the instructions there.


## Development

Install Node.js, Yarn and Hugo (if you haven't already). Fetch project requirements:

    yarn install

For local development, start Hugo server (required) and if you're planning on changing styles or javascript, run Webpack as well (optional):

    yarn hugo
    yarn dev

After you've done your changes, push to Github and submit a new PR.


## TODO

- [ ] custom fonts

- [x] projects > ecosystem
  - [ ] demarkets
  - [x] wizardswap
  - [ ] partyman
  - [x] localparticl
  - [ ] private coldstaking script by Ben

- pages
  - [ ] why particl
  - [ ] where to buy

- nice to have's
  - [ ] notification banner for important news/info (under hero?)
  - [ ] comments
  - [ ] found a bug? Edit on GH

after launch:
- [ ] ping other projects for links back

---

## Shortcode cheatsheet

**Images/Figures**

```
{{< img src="theonion.jpg" alt="Screenshot of the Onion homepage" >}}
```

```
{{< figure
  title=""
  caption="Supply of Particl (PART) coins up to year 2060"
  src="particl-coin-supply.png"
  link="particl-coin-supply.png"
>}}
```

**Buttons**

```
{{< button href="https://example.com" class="is-primary is-outlined" title="Example link" target="_blank" >}}
Button's text
{{< /button >}}
```

