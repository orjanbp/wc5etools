<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <img alt="Gatsby" src="https://i.imgur.com/pMEkhlR.png" width="128" />
</p>
<h1 align="center">
  Warcraft 5E Tools
</h1>

This is the Github repository for a collection of tools, all developed for an unofficial third-party *Warcraft* supplement for *Dungeons & Dragons 5th Edition*. Everything in the supplement is provided for free, as in "free beer", and everything in this toolset is open source for expansion and modification.

## External Links

[Warcraft 5E Books](https://drive.google.com/drive/folders/1kVoAMR8TiO3CXFYcigFN2B6zk62xcnv9])

[Warcraft 5E Subreddit](https://www.reddit.com/r/wc5e/])

## What's under the hood?

The project uses [Gatsby.js](https://www.gatsbyjs.org/) as its JS framework, built from reusable components and served as a static website. Other packages include:

- [Font Awesome](https://www.npmjs.com/package/font-awesome)
- [Prettier](https://prettier.io/)
- [Remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [Styled Components](https://www.styled-components.com/)
- [Typefaces](https://github.com/KyleAMathews/typefaces)

The project uses the following folder structure:

    .
    /parser
    /src
        /components
            /_css
            /_partials
            /[module-name]
                /views
      /images
      /markdown-pages
      /pages
      /templates

1. **`/parser`**: This directory contains a Node app for transpiling the data in the original project books to markdown pages that can be used in this project.

2. **`/components`**: This directory contains all components that are used on other pages.

3. **`/_css`**: This directory contains all static CSS files (boilerplates, etc.) that are used to lay the style grounds.

4. **`/_partials`**: This directory contains the most generic, reusable React components.

5. **`/[module-name]`**: Each project has a directory named after itself (e.g. `/bestiary`), into which its unique components go.

6. **`/views`**: This directory contains all components inside a module that are composed views, rather than reusable components. Two different views of the same Bestiary app page, for example.

7. **`/images`**: This directory contains all static images.

8. **`/markdown-pages`**: This directory contains all static markdown pages, that are converted to Gatsby pages via remark.

9. **`/pages`**: This directory contains all app pages, that aren't built from a markdown page. Each app will have its own page here, rendering the views of that app.

10. **`/templates`**: This directory contains all templates used to convert markdown pages.
