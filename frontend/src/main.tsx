import { useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./lib/trpc";
import App from "./App";

const client = new QueryClient();
// This should work instead of using useState
// const trpcClient = trpc.createClient({ url: "http://localhost:5000/trpc" });

function Main() {
  // communicate with server with the exposed trpc url
  const [trpcClient] = useState(() =>
    trpc.createClient({ url: "http://localhost:5000/trpc" })
  );

  // trpc provider needs to wrap react-query client provider
  return (
    <trpc.Provider client={trpcClient} queryClient={client}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Main />
  // </React.StrictMode>
);
