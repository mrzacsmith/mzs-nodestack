## MZS NodeStack

This is my first attempt at a node package, to be deployed on NPM.

```js
const nodeStack = require('mzs-nodestack')
```

Format:

```js
const server = express()
nodeStack(server)
```

### Goal

[ ] create a useful node package
[ ] include standard node packages, so only invoke this one package is needed
[ ] MERN standard packages
[ ] make it easy to improve and update

### Notes

Trying to follow the flow in my head, so I `npm i mzs-nodestack` and it should install this and all of the dependencies. I think I need to run `npm i` here so they appear in the package.json so installing in install them as well? Then, i require and invoke the package.
