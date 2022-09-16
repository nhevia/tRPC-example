import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [serverData, setServerData] = useState();

  const getData = async () => {
    const res = await fetch("http://localhost:5000");
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    getData().then((res) => setServerData(res));
  }, []);

  return <div className="App">{JSON.stringify(serverData)}</div>;
}

export default App;
