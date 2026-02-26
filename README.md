# necolors
A simple color package based on typescript enums

It's a simple system that was started by jslogsystem and allows to quickly use colors based on standard consoleColors or minecraftPallete system.

## support

it supports:
* esm
* cjs
* typescript colors
* normal javascript


## what it exports?

* ansiEscape -> quick lookup for an ansi escape code (without [)
* consoleColors -> consoleColors pallete
* generateAnsiColor -> generating an rgb ansi color
* combineColors -> ability to merge colors
* minecraftColorPallete -> minecraft inspired pallete

It also exports types that can be used to be sure that we're dealing with colors like consoleColor

## Why not just use chalk?

Our jslogsystem also used chalk, but we needed a faster module for 'echo' command and templates that still had all colors we needed and still supported typescript.

While using typescript enums is discouraged by some people, we decided that it's the best way to make it also non-typescript compatible.

## bulding


You have to build both esm, js version and types.

The esm version should be located in ``./dist/esm/index.mjs`` and cjs version should be located in ``./dist/cjs/index.js``.

Typescript types should be extracted to ``./dist/types/index.d.ts``

So the structure of files should look like:
* dist
    * cjs
        * index.js
    * esm
        * index.mjs
    * types
        * index.d.ts
* package.json


You can use provided tsconfig.json and package.json for bulding, just change the destination and javascript type (cjs/esm).