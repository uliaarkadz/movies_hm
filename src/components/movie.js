import Movies from "./Movies";
import movies from "../movies";

const Movie = () => {
  return (
    <div className="movies">
      {movies.map((v, index) => (
        <Movies
          key={index}
          name={v.name}
          year={v.year}
          rating={v.rating}
          image={v.image}
        />
      ))}
    </div>
  );
};

export default Movie;
