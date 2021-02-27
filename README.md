# particl.page

## Build

Assets are compiled using Webpack in `src/` directory:

```
cd src/
yarn install
yarn build
```

Building the whole site via Hugo happens automatically after commiting to `master` on GitHub.

For local development, install Hugo locally and run dev server via:

```
hugo server -D
```


## TODO

- [ ] custom fonts
- [ ] 404

after launch:
- [ ] check social sharing buttons


## Shortcodes reference

Links:

```
[xxxxxxx]({{< ref "xxxx/xxxx.md" >}})
```

Image:

```
{{< figure
  title=""
  caption="Description"
  src="/images/image.png"
  link="/images/image.png"
  attrlink=""
  attr=""
>}}
```

Video:

```
{{< video
  class=""
  poster=""
  mp4="/video.mp4"
  webm="/video.webm"
  ogg="/video.ogg"
>}}
```




