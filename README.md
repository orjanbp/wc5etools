<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <img alt="Warcraft Logo" src="https://i.imgur.com/pMEkhlR.png" width="128" />
</p>
<h1 align="center">
  Warcraft 5E Tools
</h1>

This is the Github repository for a collection of tools, all developed for an unofficial third-party *Warcraft* supplement for *Dungeons & Dragons 5th Edition*. Everything in the supplement is provided for free, and everything in this toolset is open source for making pull requests to modify or expand on it.


<p align="center">
  <a href="https://orjanbp.github.io/wc5etools/" target="_blank">
      <img alt="Open WC5ETools" src="https://i.imgur.com/LflPfQA.png" />
  </a>
  <a href="https://github.com/orjanbp/wc5etools/issues" target="_blank">
      <img alt="Post an Issue" src="https://i.imgur.com/GBc9rcj.png" />
  </a>
</p>


## External Links

📚 [Warcraft 5E Books](https://drive.google.com/drive/folders/1kVoAMR8TiO3CXFYcigFN2B6zk62xcnv9)

💬 [Warcraft 5E Subreddit](https://www.reddit.com/r/wc5e/)

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
      /applications
          /components
          /stores
          /utils
          /views
      /components
          /_css
          /_partials
      /images
      /markdown-pages
      /pages
      /templates

1. **`/parser`**: This directory contains a Node app for transpiling the data in the original project books to markdown pages that can be used in this project.

2. **`/applications`**: Each app project that is part of this toolkit sits in its own folder in this directory.

    1. **`/components`**: Reusable components that are unique for an application are contained here.

    2. **`/stores`**: Each app has its data stores placed in a /stores/ folder within that app directory.

    2. **`/utils`**: This directory contains functions important to the app, that are self-contained enough to extract to their own files. Separate from components, as they export functions -- not JSX elements.

    2. **`/views`**: This directory contains all components inside an application that are composed views, rather than reusable components. Two different views of the same Bestiary app page, for example.

3. **`/components`**: This directory contains all components that can be reused across the whole website.

    1. **`/_css`**: This directory contains all static CSS files (boilerplates, etc.) that are used to lay the style grounds.

    2. **`/_partials`**: This directory contains the most generic, reusable React components.


4. **`/images`**: This directory contains all static images.

5. **`/markdown-pages`**: This directory contains all static markdown pages, that are converted to Gatsby pages via remark.

6. **`/pages`**: This directory contains all app pages, that aren't built from a markdown page. Each app will have its own page here, rendering the views of that app.

7. **`/templates`**: This directory contains all templates used to convert markdown pages.

## Legal

### Dungeons & Dragons 5th Edition SRD

> Permission to copy, modify and distribute the files collectively known as the System Reference Document 5.1 ("SRD5") is granted solely through the use of the Open Gaming License, Version 1.0a.
>
> This material is being released using the Open Gaming License Version 1.0a and you should read and understand the terms of that license before using this material.

### World of Warcraft

> ©2004 Blizzard Entertainment, Inc. All rights reserved. World of Warcraft, Warcraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
