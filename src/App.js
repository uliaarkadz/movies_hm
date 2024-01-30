import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
import Header from "./components/Header";

function App() {
  return (
    <div className="main">
      <Header />
      <Movie />
    </div>
  );
}

export default App;
