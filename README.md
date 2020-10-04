# Digital Diary

### Target
This website aims to be a collection of all my learning in the world of product, in terms of my experiments (projects/ product launches) to my learnings and philosophy around creating products. Will contain things in terms of
1. **Blogs** around products, UX, brand, research and business _(To be built)_
2. **Portfolio** of products I built since beginning of my career
3. **Information** about me around work, books etc
4. **Books** I read and my insights out of it _(To be built)_
5. **Purchase** include artwork available for purchase on Gumroad _(To be built)_

### Site Specs
- Made using Jekyll. It is a simple, blog-aware, static site generator for personal, project, or organization sites written in Ruby. It takes text written in markup language and uses layouts to create a static website. Currently on `Jekyll Version - 4.1.1`

- Bundler is used along with Jekyll. It can be a great tool to use with Jekyll because it tracks dependencies on a per-project basis.

- Liquid is the templating language to process pages on the site. Liquid can output and modify variables, have logic statements inside the pages and loop over content.

- YAML is a format that relies on white spacing to separate out the various elements of content. Jekyll allows to use Liquid with YAML as a way to parse through the data. Storing items for the table of contents is one of the most common uses of YAML with Jekyll.


---


### Architecture

| Components  | Files                                                                                                              |
| ----------- |:-------------------------------------------------------------------------------------------------------------------|
| _data       | `about.html`, `blogs.html`, `contact.yml`, `nav.yml`, `projects.yml`                                               |
| _includes   | `about.html`, `blogs.html`, `footer.html`, `head.html`, `header.html`, `nav.html`, `projects.html`, `scripts.html` |
| _layouts    | `blogs.html`, `contact.html`, `default.html`                                                                       |


---

### Run in Local System
Clone the repository in the local system. Then in terminal, write `bundle exec jekyll serve`

### Guidelines
Please follow the guidelines for contribution to keep code clean
1. Add images in **PNG** format
2. Modify output through `Liquid` [Fliters](https://shopify.dev/docs/themes/liquid/reference/filters "Liquid Filters")
3. In CSS use `rem` for unit

### Conribution
To set this up, please go through the basics of git first. After that,

1. Clone this repository
2. Create your own branch
3. Work on the changes
4. Run it on your local server
5. Check if things are working fine
6. Make a Pull Request
