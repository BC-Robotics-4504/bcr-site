# BCR 4504 Team Website

[![CI](https://github.com/BC-Robotics-4504/bcr-docs/actions/workflows/vercel-prod.yml/badge.svg?branch=master)](https://github.com/BC-Robotics-4504/bcr-docs/actions/workflows/vercel-prod.yml)
[![License](https://img.shields.io/github/license/BC-Robotics-4504/bcr-site?color=blue)](https://github.com/BC-Robotics-4504/bcr-site/blob/main/LICENSE)

Welcome to the **official site** for **FRC Team BCR 4504**.
This site contains resources, guides, and reference material for our team members, mentors, and supporters.

---

## 📂 Project Structure

Our documentation site follows a clear and organized file structure for easy collaboration:

```
.
├── public/ # Static assets served as-is (e.g., favicon, robots.txt)
├── src/
│ ├── assets/ # Images, diagrams, and other media used in docs
│ ├── content/
│ │ └── docs/ # Main documentation content (.md or .mdx files)
│ └── content.config.ts # Content collection configuration
├── astro.config.mjs # Astro configuration file
├── package.json # Project metadata and dependencies
└── tsconfig.json # TypeScript configuration

```

**Key points:**

- Documentation pages are stored in `src/content/docs/`.
- Images and diagrams go in `src/assets/` and can be referenced in Markdown.
- Anything in `public/` is served directly without processing.

---

## Contributing

1. Clone the repo with `git clone https://github.com/BC-Robotics-4504/bcr-docs`
2. Checkout a new branch with `git switch -c {feature_name}`
3. Submit a pull-request to have your contribution merged onto the master branch.

## 🙌 Credits

We’d like to thank the following projects and services that make this documentation possible:

- [Astro](https://astro.build) — For the static site framework.
- [Astrowind]([https://starlight.astro.build](https://github.com/arthelokyo/astrowind)) — For the site template.

