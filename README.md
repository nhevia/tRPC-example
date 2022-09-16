### Summary

This is a project to showcase end-to-end type safety using [tRPC](https://trpc.io).

It's composed of a backend server (`server-api`) using Node+Express and a React application (`frontend`) scaffolded with ViteJS.

Types are available in the frontend because the tRPC client can hit `http://localhost:5000/trpc/queryname`-like routes, defined in Express using a router adapter.

### Usage

1. Install dependencies:

- `$ cd frontend && npm install`
- `$ cd server-api && npm install`

2. Start the development servers:

- `$ cd frontend && npm run dev`
- `$ cd server-api && npm run dev`

3. Go to `http://localhost:3000` and verify you got the `data` object. This object has type safety coming from the backend. This is achieve using `tRPC` as a wrapper for [tanstack/query](https://github.com/tanstack/query) (asynchronous store).
