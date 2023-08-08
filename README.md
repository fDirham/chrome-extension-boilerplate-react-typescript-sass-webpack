## Overview

This repo contains boilerplate code to create chrome extensions with React + Typescript + SASS + babel. Unlike other boilerplate code, this one focuses on injecting a UI into the webpage and does not contain code for the popup.

Created this for practice but also because I couldn't find any boilerplate code that suits my needs. Feel free to use for your projects.

## Getting started

1. Clone the repo.
2. Run `npm install` or `yarn install`
3. Run `npm run build`. This will build files for the chrome extension to work.
4. Make sure developer mode is on and click Load Unpacked
5. Open the `src/extension` folder
6. Enable this extension

Whenever a change is made and webpack rebuilds everything, you need to reload the extension from the manage extensions page. Or get the `chrome extension reloader` chrome extension to make things easier. Any changes to webpack itself merits a restart of the `npm run dev` command. Any changes to `manifest.json` merits a complete chrome extension reload by packing and unpacking.

## Dev tools

Run `npm run serve`. This will run webpack serve. Head to `localhost:8080` or whatever port is indicated, and components defined in `<RootComponent>` will be rendered without the need to toggle. Any changes to any components or their children defined in `<RootComponent>` will auto reload the preview.

## How the extension works

1. On page load, `content scripts` inject a shadow root into the DOM
2. `content scripts` render a root react component within the shadow root filled with our react components. This root component is hidden at first.
3. When the user clicks on the extension icon, `background scripts` sends a message to `content scripts` to show the component.

### Note on styling

I had the most trouble setting up CSS and SCSS modules since webpack loaders kept injecting the styles into the header, which the shadow root can't access. I created a React component, `StyleWrapper` that handles encapsulating styles, see the `TestComponent` for an example as how to use it.

The `StyleWrapper` component works by taking in a string representing CSS as a prop. This string is available simply by importing a `.css` or `.scss` file thanks to webpack configs. It then processes it to encapsulate the styles and then renders it within a `<style>` tag. You can use standard `.scss` files as modules this way when combined with the `useLocalStyle` hook.

If anyone knows of a better way, feel free to submit a PR
