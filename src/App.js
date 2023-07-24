import "./App.css";

import Increment from "./components/Increment";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Increment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
