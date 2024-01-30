const Movies = (props) => {
  return (
    <div className="movie">
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="text">
        <div>
          <b>TITLE: </b>
          {props.name}
        </div>
        <div>
          <b>YEAR: </b>
          {props.year}
        </div>
        <div>
          <b>RATING: </b>
          {props.rating}
        </div>
      </div>
    </div>
  );
};

// export the component
export default Movies;
