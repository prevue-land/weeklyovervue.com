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

Now, begin by cloning the *Blank Canvas* template into a `tic-tac-toe` folder (feel free to choose any other name if you want) and installing all the dependencies, while also removing Pinia:

```shell
$ git clone https://github.com/weekly-overvue/blank-canvas.git tic-tac-toe
$ cd tic-tac-toe
$ npm install
$ npm uninstall --save pinia
```