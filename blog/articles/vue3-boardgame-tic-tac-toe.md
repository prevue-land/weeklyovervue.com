---
type: article
title: vue3-boardgame Tic Tac Toe
description: Build a classic Tic Tac Toe game using boardgame.io plugin for Vue 3
date: 2022-02-27 20:00
cover: /blog/public/tic-tac-toe-gf7da00999_1280.jpg
---
*Photo by pixel2013 on [Pixabay](https://pixabay.com/images/id-1777859/)*

Hello and welcome back to Weekly OverVue! My name is Mac, and this week I'll show you how to build a Tic Tac Toe game using the **[vue3-boardgame](https://github.com/SaFrMo/vue3-boardgame/)** plugin written by [Sander Moolin](https://github.com/SaFrMo). While this idea may seem generic and unambitious, I've failed to find any proper examples showcasing Vue 3 and [boardgame.io](https://boardgame.io/) together. So why not take the latter's own Tic Tac Toe tutorial, introducing some custom styling and the aforementioned plugin into the mix? With that said, let's get down to the setup.

## Installing packages and removing redundant content

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

Then move over to `App.vue` file in that same folder. Remove the entire `<header>` element inside the `<template>`, as well as the `nav` element styling rule down in the `<style>` tag. Now add `main` element to the `width: 100%; height: 100%` rule, and also `justify-content: center;` to the separate `main` styling rule. And last but not least, let's reset each `h1` tag's top margin for a good measure. It's quite a description, so let me visualise all the changes for you:

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

That's it for our little *demolition job*. From here on, it's all about building upon and working with the baseline we've got.

## Writing custom type definitions for our boardgame.io client

Before we start implementing the [boardgame.io](https://boardgame.io/) client, we need to take a step back to introduce the library we're about to use, as well as its most fundamental concepts. So, boardgame.io describes itself as an *Open Source Game Engine for Turn-Based Games*, enabling one to focus on defining game's actual logic via its **state**, **moves**, or even **phases and stages** for more complex cases. There's also support for **AI** players, **multiplayer** mode, state immutability and **so much more**, but these (along with phases and stages) are outside of this tutorial's scope.

With that out of the way, let's take a moment to actually familiarise ourselves with some of these terms I've just brought up:

* **State** (`G`) represents a *game-specific* data object, which is designed and managed by none other than **you** yourself. In other words, it's pretty much the same as your average Pinia store's state
* **Moves** are essentially functions responsible for altering the aforementioned game state. They can be compared to Vuex mutations, as they manipulate the state directly and **without** causing any side-effects.
* **Context** (`ctx`) provides read-only game metadata such as current turn's, phase's, or player's ID, total number of players, etc. Boardgame.io is responsible for managing it, with us being solely the *consumers* of all that data.

It's high time we got down to the practical part by creating type definitions for our boardgame.io client. Create a `types` folder with an `index.ts` file inside. Let's begin with our state:

```typescript
export type Player = '0' | '1';

export type PossibleCellValue = Player | null;

export type State = {
  cells: PossibleCellValue[];
};

export type SetupFunction = () => State;
```

There's nothing worth explaining here, so let's move on to the context and moves:

```typescript
import type { Ctx, Move } from 'boardgame.io';

// under the state type definitions...

export type GameOver = { winner: Player | 'draw' };

export type CustomCtx = Omit<Ctx, 'currentPlayer' | 'gameover'> & {
  currentPlayer: Player;
  gameover?: GameOver;
};

export type Moves = { markCell: Move<State, CustomCtx> };
```

Now that's a more interesting snippet, especially when it comes to that `CustomCtx` type. But what exactly is going on here? I'll break it down.

First, we make use of a special [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys) utility type to create a clone of boardgame.io's own `Ctx` type, but without the `currentPlayer` and `gameover` fields. We then merge the resulting type with an anonymous one containing the exact same property names we've just excluded, but with different types assigned to them. In other words: we've just overridden specific fields of an existing type object.

## Defining actual client's state/moves and Vue plugin setup

That's about it for the type definition part. Let's move on to writing actual client configuration code! Our Tic Tac Toe game's **state** should only need a simple array of 9 cells, since the original makes use of a 3x3 square board. As for the **moves**, each player needs to be able to mark such cell, unless it's already been taken. This was the spec, here's its code equivalent:

```typescript
import { Client } from 'boardgame.io/client';
import { INVALID_MOVE } from 'boardgame.io/core';

import { State, CustomCtx, Moves, SetupFunction } from './types';

const setup: SetupFunction = () => ({
  cells: new Array(9).fill(null)
});

const moves: Moves = {
  markCell(G, ctx, index) {
    if (G.cells[index] !== null) {
      return INVALID_MOVE;
    }

    G.cells[index] = ctx.currentPlayer;
  }
};

const game = { setup, moves };

export const client = Client<State, CustomCtx>({ game });

export type BoardgameIoClient = typeof client;
```

One thing I believe should be pointed out, is that boardgame.io doesn't actually provide any *public* type annotations for a client instance. Fortunately, we can make amends for it by creating a custom type set to `typeof client`, which I believe is rather self-explanatory. I also reckon it's best for it to be placed separately from all the other types, because in that case I would have to import `client.ts` over at `types/index.ts`, and I find this kind of mutual dependency a bit awkward.

Alright, now that we've tackled the initial client setup, let's register the boardgame.io Vue 3 plugin. Open the `main.ts` file your src folder and modify it like so:

```typescript
import { createApp } from 'vue';
import { boardgamePlugin } from 'vue3-boardgame';

import App from './App.vue';
import router from './router';
import { client } from './client';

const app = createApp(App);

app.use(boardgamePlugin, {
  useProvide: true,
  useMixin: false,
  autostart: false,
  client
});
app.use(router);

app.mount('#app');
```