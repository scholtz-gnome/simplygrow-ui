# SimplyGrow UI

A library of React components, hooks and utility functions built with TypeScript and CSS Modules.

- [Usage](#usage)
  - [Install package](#install-package)
  - [Global CSS](#global-css)
  - [`<UIProvider />` Component](#uiprovider-component)
    - [Next.js](#nextjs)
    - [Create React App](#create-react-app)
- [Components](#components)
- [Developing](#developing)

# Usage

## Install package

```bash
npm install simplygrow-ui
```

## Global CSS

In your root component/layout, paste the following code:

```typescript
import 'simplygrow-ui/dist/esm/index.css';
```

## UIProvider component

In your root component/layout, import the `<UIProvider />` component and wrap your React children (as well as any other React context providers involving UI). This allows you to select the SimplyGrow app you are using, which will update the colours of all components.

### Next.js

```typescript
import { UIProvider } from 'simplygrow-ui';

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <UIProvider appTheme={'skillbook'}>
          <main>{children}</main>
        </UIProvider>
      </body>
    </html>
  )
}

export default RootLayout
```

### Create React App

```typescript
import { UIProvider } from 'simplygrow-ui';

function App({ children }) {
  return (
    <UIProvider appTheme={'peopleflow'}>
      {children}
    </UIProvider>
  );
}

export default App
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
