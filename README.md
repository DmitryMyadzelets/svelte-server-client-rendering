# svelte-server-client-rendering
Example of the server-side, client-side and static rendering with
[Svelte](https://svelte.dev/). For self-learning.
 
```javascript
npm install
npm run build
npm start
```

## How it works

When you execute `npm run build` you compile and render **static** files. Here
we use the [Rollup](https://rollupjs.org) bundler. It's controlled by the 
`rollup.config.js` file. We have two configurations there: the first compiles 
[Client.svelte](Client.svelte) and creates the `public/client.js` file, the second compiles
[Static.svelte](Static.svelte) and outputs the rendering results to the `static.html` file.

With `npm start` command you start a primitive server written in the [index.js](index.js) file.
The **server-side rendering** occurs when the server is preparing a response to a client.
For the root `/` URL the server creates `html` rendered by the [Server.svelte](Server.svelte). During rendering  it uses the `static.html` which was rendered as a static content. 
For any other URL our server assumes that static files are requested from the [public](public) directory.

The **client-side rendering** happens when a browser loads and executes the `client.js` file.

In the browser you'll see results of the every rendering. It will help you with
understanding where and when it was done.
