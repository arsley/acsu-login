# ACSU Login

ACSU authenticate from console with Node/JavaScript:tada:

## Prerequisites

- node
- yarn (recommended) of npm

## Setup

```
yarn
# or
npm i
```

## Usage

Type

```
yarn acsulogin
# or
npm run acsulogin
# or
node login.js
```

then will show:

```
Education number > *your education number*
Password > *your password (printed '*')*
```

## Build

```
yarn build:mac
# or
yarn build:win
```

See `package.json "scripts": { ... }` (no linux compilation setting).

This will create binary file `acin`.
Move it to specified location from $PATH (i.e. /usr/local/bin).

## Dependencies

- axios (Accsess to login page)
- readlineSync (Intaractive interface)
- chalk (CLI coloring)
