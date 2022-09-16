import express from "express";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";

// this type will reach all the way down to the returned 'data' from
// the fetcher function that we provide to react-query
type Message = {
  id: number;
  text: string;
};
// mock data
const messages: Message[] = [
  {
    id: 1,
    text: "message 1",
  },
  {
    id: 2,
    text: "message 2",
  },
];
// create trpc router: we define our queries here
// will be accessed in the front by the trpc/client
// like 'http://localhost:5000/trpc/getLastMessage'
const appRouter = trpc
  .router()
  .query("hello", {
    resolve() {
      return "Hello from trpc";
    },
  })
  .query("getLastMessage", {
    resolve() {
      return messages.at(-1);
    },
  })
  .query("getMessages", {
    resolve() {
      return messages;
    },
  });

// we'll be importing this type from the frontend consumer
export type AppRouter = typeof appRouter;

const app = express();
app.use(cors());
const port = 5000;

// communication with the consumer via http
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  })
);

app.listen(port, () => {
  console.log("server listening on port", port);
});
