import { trpc } from "./lib/trpc";

import "./App.css";

function App() {
  // exactly same functionality than useQuery: we can useMutation, etc
  // since it works as a wrapper
  const { data } = trpc.useQuery(["getLastMessage"]);

  // data now is type-aware of the types defined in the backend
  // if they change (or are incorrect) we'll be notified here
  return <div className="App">{data?.id}</div>;
}

export default App;
