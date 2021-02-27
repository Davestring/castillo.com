# Castillo Casa

Web application developed with [React.js](https://reactjs.org/) using [Next](https://nextjs.org/) framework for Castillo Casa: an elegant place to spend your holidays.

## Contents

- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Appendices](#appendices)
- [Authors](#Authors)

## Dependencies

![https://img.shields.io/badge/React-+17.0.1-red.svg](https://img.shields.io/badge/React-+17.0.1-red.svg)
![https://img.shields.io/badge/Redux-+10.0.7-next.svg](https://img.shields.io/badge/Next-+10.0.7-black.svg)

## Configuration

Make sure that you have Node.js v12.18.0 and yarn v1.22.5 or above installed.

### Project structure

```bash
castillo-next-app
    ├── src
    │   ├── components
    │   ├── images
    |   ├── pages
    │   ├── styles
    │   └── utils
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── LICENSE
    ├── next-env.d.ts
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock
```

### Development

```bash
yarn dev
```

Starts the development server running on [`http://localhost:3000`](http://localhost:3000/)

## Appendices

### Appendix A - Execution

> Install the project dependencies:

```bash
yarn install
```

> To install a new dependency with the exact version flag:

```bash
yarn add dependency-name
```

> Run project

```bash
yarn dev
```

### Appendix B - VSCODE auto-fix

To have all the development environment automated we have a [settings.json](./.vscode/settings.json) file with the following configuration:

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript",
        "typescript"
    ],
    "editor.rulers": [
        80
    ]
}
```

## Authors

- David Martinez - [Frontend Developer](mailto:davestringm@gmail.com)