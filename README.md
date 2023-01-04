# Rebuilding Linear's with Next JS 13, Tailwind CSS and TypeScript

Rebuilding [Linear.app](https://linear.app/) with Next JS 13, Tailwind CSS, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Commitlint, PostCSS, Tailwind CSS.

### Features

- [Next.js](https://nextjs.org) for Static Site Generator
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- Easily construct component variants with [CVA](https://github.com/joe-bell/cva)
- Utility for constructing `classname` strings conditionally with [clsx](https://github.com/lukeed/clsx)
- Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Lint git commit with Commitlint
- Write standard compliant commit messages with Commitizen
- Absolute Imports using `@` prefix

### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/thenameiswiiwin/template-next13-tailwind.git linears-clone
cd linears-clone
yarn
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Layouts components, error components, and loading components
│   ├── assets                      # Images and fonts
│   └── components                  # React components
│   └── lib                         # Utility functions
│   ├── pages                       # Next JS Pages
│   ├── styles                      # Styles folder
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```
