import "./App.css";
import Box from "./Components/Box/Box";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Box/>
      </HashRouter>
    </>
  );
}

export default App;
