import { trpc } from "./lib/trpc";

import "./App.css";

function App() {
  // exactly same functionality than useQuery: we can useMutation, etc
  // since it works as a wrapper
  const { data: messagesData } = trpc.useQuery(["getMessages"]);
  const { data: lastMessageData } = trpc.useQuery(["getLastMessage"]);

  // data now is type-aware of the types defined in the backend
  // if they change (or are incorrect) we'll be notified here
  return (
    <div className="App">
      <div>Last message: {lastMessageData?.text}</div>

      <ul>
        All messages:{" "}
        {messagesData?.map((m) => (
          <li key={m.id}>{m.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
