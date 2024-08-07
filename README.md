# SimplyGrow UI

A library of React components, hooks and utility functions built with TypeScript and CSS Modules.

# Setup

```bash
npm install simplygrow-ui
```

In your root component, paste the following code:

```bash
import 'simplygrow-ui/dist/index.css';
```

# Components

- ActionButton
- CheckboxInput
- FlexContainer
- FormContainer
- GridContainer
- Header
- Heading
- Input
- LinkButton
- LinkText
- LoadingSpinner
- Modal
- OTPInput
- Paragraph
- Select
- UnorderedList

# Developing

In order to test out the components in a realistic React context while developing, use the simple React app bundled with Rollup. Import any components into `src/app.js` to test them out. To run the React app, run the following terminal commands in two terminal instances at the same time:

```bash
npm run build:watch
```

This will bundle your code with Rollup and re-run the bundle on file changes.

```bash
npm run dev
```

This will spin up a simple server accessed at [localhost:3000](http://localhost:3000) to host the file in `public/index.html`.
