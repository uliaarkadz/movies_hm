import logo from "./logo.svg";
import "./App.css";
import movies from "./movies";
import Movie from "./components/movie";

function App() {
  return (
    <div className="App">
      <Movie movies={movies} />
    </div>
  );
}

export default App;
