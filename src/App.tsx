import { WordcloudGameContextProvider } from "./context/WordcloudGameContext";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <WordcloudGameContextProvider>
      <Dashboard />
    </WordcloudGameContextProvider>
  );
}

export default App;
