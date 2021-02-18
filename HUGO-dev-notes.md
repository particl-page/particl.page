# HUGO dev notes

## Basics

- Homepage content lives in `/content/_index.md` (not just `index.md`!) > this causes all the weird behavior
- Different content Types (Posts, Projects, Whatever..) in `/content/` have singular folder names, e.g. `/content/post/`

## Templating

- Every `Page` now has a `Kind` property. Since everything is a `Page` now, the `Kind` is used to differentiate different kinds of pages. Possible values are `page`, `home`, `section`, `taxonomy`, and `taxonomyTerm`.


## Taxonomies

- If you need to add custom metadata to your taxonomy terms, you will need to create a page for that term at /content/<TAXONOMY>/<TERM>/_index.md and add your metadata in it’s front matter.
- Translating taxonomies: https://stackoverflow.com/a/57359213

## Data files

Accessing data from data files (e.g. `/data/authors.yml`), conditionally:

```
{{ range where .Site.Data.authors "name" "==" .Params.Author }}
  <h2>{{ .name }}</h2>
  <p>{{ .bio }}</p>
{{ end }}
```

---

## Usage

### Links

[About]({{< ref "/page/about" >}} "About")

### Footnotes

Reference some footnote[^1] in text.

[^1]: Insert the footnote like this.

---

## Maintenance

- Garbage collection: clean-up unused files (in /resources/_gen/) etc.:

    hugo --gc