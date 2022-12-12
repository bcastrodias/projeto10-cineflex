import styled from "styled-components";

const Movie = (props) => {
  const onClickPoster = () => props.setSelectedMovie(props.movie);

  return <Poster onClick={onClickPoster} src={props.movie.posterURL}></Poster>;
};

export default Movie;

const Poster = styled.img`
  height: 193px;
  width: 129px;
  left: 38px;
  top: 177px;
  border-radius: 0px;
`;
