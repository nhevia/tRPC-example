### Summary

This is a project to showcase runtime end-to-end type safety using [tRPC](https://trpc.io).

It's composed of a backend server (`server-api`) using Node+Express and a React application (`frontend`) scaffolded with ViteJS.

Types are available in the frontend because the tRPC client can hit `http://localhost:5000/trpc/queryname`-like routes, defined in Express using a router adapter.

### Usage

Note: this project uses worspaces, execute commands from root folder.

1. Install dependencies:  
   `$ npm install`

2. Start both dev servers:  
   `$ npm start`  
note: outputs will be mixed in the same terminal. Alternatively you can start each dev server from their own folder in separate terminals

3. Go to `http://localhost:3000` and you should see the returned `data`. These objects have type safety all the way from the backend, where they are declared. This is achieve using `tRPC` as a wrapper for [tanstack/query](https://github.com/tanstack/query) (asynchronous store).
