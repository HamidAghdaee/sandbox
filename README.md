# Sandbox

This is a great starting point for everyone interested in building React based
apps **while using Cloudflare's component library** and styles. It uses
[next.js](https://github.com/zeit/next.js/) - a framework for server-rendered or
statically-exported React apps for painless setup and
[fela](https://github.com/rofrischmann/fela) as a CSS-in-JS solution. You might
find useful this
[CSS vs CSS in JS guide](https://github.com/tajo/fela-workshop).

## Installation

It assumes you have the latest node and yarn installed.

```
git clone https://github.com/tajo/sandbox
cd sandbox
yarn install
yarn dev
open http://localhost:3000
```

## How to start

Start editing `/pages`. You can add more
[cf-ux](https://cf-ux.s3.cfdata.org/index.html) packages via yarn:

```js
yarn add @cloudflare/cf-component-calendar
```

Tip: You can directly copy&paste "source code" from cf-ux examples and it will
work.
