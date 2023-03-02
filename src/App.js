import "./App.scss";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Project from "./routes/project";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Home />
      <Routes>
        <Route path="/projects/:project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
