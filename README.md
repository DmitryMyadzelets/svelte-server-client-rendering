# svelte-server-client-rendering
Example of the server-side, client-side and static rendering with Svelte. For
self-learning.
 
```javascript
npm run build
npm start
```

## How it works

When you execute `npm run build` you compile and render **static** files. Here
we use the [Rollup](https://rollupjs.org) bundler. It's controlled by the 
`rollup.config.js` file. We have two configurations there: the first executes
[Client.svelte](Client.svelte) and creates the `public/client.js` file, the second executes
[Static.svelte](Static.svelte) and outputs results to the `static.html` file.

With `npm start` you start a primitive server is written in the [index.js](index.js) file.
The **server-side rendering** occurs when the server runs and is preparing a response to a client.
The server creates `html` rendered by the [Server.svelte](Server.svelte) for the root `/` URL. The `Server.svelete` uses `static.html` which was rendered as a static content. 
For any other URL our server assumes that static files are requested from the [public](public) directory.

The **client-side rendering** happens when a browser loads and executes the `client.js` file.
