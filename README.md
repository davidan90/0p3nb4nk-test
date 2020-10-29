# 0p3nba4k challenge

## Commands

Install dependencies:

```bash
npm i
```

Dev mode:

```bash
npm start
```

Build:

```bash
npm run build
```

## Notes

- Project created using CRA with the Typescript template to start as fast as possible.
- I did not use Redux or Mobx for the app state managment because the project it's small.
- The root components folder it's created to share commons components. In a real scenario I would created my own npm package sharing the common components.
- I implemented i18n. However I only add spanish language.
- I could add some e2e test with Cypress, Snapshots with Percy or stories with Storybook. Nonetheless, do this stuff take time and I've considered deliver this challenge just without this QA things.
