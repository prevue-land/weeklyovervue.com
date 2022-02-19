---
type: article
title: vue3-boardgame Tic Tac Toe
description: Build a classic Tic Tac Toe game using boardgame.io plugin for Vue 3
date: 2022-02-20 20:00
cover: /blog/public/tic-tac-toe-gf7da00999_1280.jpg
---
*Photo by pixel2013 on [Pixabay](https://pixabay.com/images/id-1777859/)*

Hello and welcome back to Weekly OverVue! My name is Mac, and this week I'll show you how to build a Tic Tac Toe game using the **[vue3-boardgame](https://github.com/SaFrMo/vue3-boardgame/)** plugin written by [Sander Moolin](https://github.com/SaFrMo). While this idea may seem generic and unambitious, I've failed to find any proper examples showcasing Vue 3 and [boardgame.io](https://boardgame.io/) together. So why not take the latter's own Tic Tac Toe tutorial, introducing some custom styling and the aforementioned plugin into the mix? With that said, let's get down to the setup.

## Project configuration

Begin by cloning the *Blank Canvas* template into a `tic-tac-toe` folder (feel free to choose any other name if you want) and installing all the dependencies, while also removing Pinia:

```shell
$ git clone https://github.com/weekly-overvue/blank-canvas.git tic-tac-toe
$ cd tic-tac-toe
$ npm install
$ npm uninstall --save pinia
```

Once that's done, open up your favourite code editor and go to the `main.ts` file in `src` directory. Go ahead and remove these lines:

```typescript
// ...
import { createPinia } from 'pinia';

// ...

app.use(createPinia());
```

Then move over to `App.vue` file in that same folder. Remove the entire `<header>` element inside the `<template>`, as well as the `nav` element styling rule down in the `<style>` tag. Now add `main` element to the `width: 100%; height: 100%` rule, and also `justify-content: center;` to the separate `main` styling rule. And last but not least, let's reset each `h1` tag's top margin for a good measure. That's quite a description, so let me visualise all the changes for you:

```css
html,
body,
#app,
main {
  width: 100vw;
  height: 100vh;
}

/* ... */

h1 {
  margin-top: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```