const Bottom = (props) => {
  return (
    <div>
      {props.movie.title}
      <img src={props.movie.posterURL}></img>
    </div>
  );
};

export default Bottom;
