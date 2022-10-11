# Casa Castillo

Casa Castillo is one of the best lodging options in the area through excellence in service, security and avant-garde, achieving a pleasant and unforgettable stay for our clients.

## Contents

- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Appendices](#appendices)

## Dependencies

![https://img.shields.io/badge/TypeScript-4.7.2-blue.svg](https://img.shields.io/badge/TypeScript-4.7.2-blue.svg)

![https://img.shields.io/badge/React-18.1.0-red.svg](https://img.shields.io/badge/React-18.1.0-red.svg)

![https://img.shields.io/badge/i18next-21.8.4-green.svg](https://img.shields.io/badge/i18next-21.8.4-green.svg)

## Configuration

### Environment Variables

Inside the root folder create an `.env` file with the following keys:

|        Key        |      Value       |              Description              | Required |
| :---------------: | :--------------: | :-----------------------------------: | :------: |
| REACT_APP_API_URL | http://127.0.0.1 | Api URL for the Casa Castillo backend |   True   |

### Development Server

Before running the development server we need to install the project dependencies:

```bash
yarn install
```

We can run the development server with the next command:

```bash
yarn start:app
```

The command above will run a development server at [` http://127.0.0.1:3000/`](http://127.0.0.1:3000/)

### Production Build

To create the project production build we can use the following command:

```bash
yarn build:app
```

Once the project build is done, it's ready to publish in any deployment service.

### Storybook

To run storybook execute the following command:

```bash
yarn start:sb
```

The command above will run a server at [` http://127.0.0.1:6006/`](http://127.0.0.1:6006/)

To create the storybook production build execute:

```bash
yarn build:sb
```

## Appendices

### VSCODE settings file

To have all the development environment automated we have a [settings.json](./.vscode/settings.json) file with the following configuration:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.rulers": [80],
  "eslint.packageManager": "yarn",
  "eslint.validate": ["javascript", "typescript", "ts", "tsx"],
  "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false
}
```
