import "./App.scss";
import Navigation from "./components/navigation/navigation";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <Home />
    </div>
  );
}

export default App;
