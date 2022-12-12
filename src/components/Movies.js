import Axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import styled from "styled-components";

const API = "https://mock-api.driven.com.br/api/v8/cineflex/movies";

const Movies = (props) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    Axios.get(API)
      .then((result) => {
        setMovies(result.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {movies?.map((filme) => {
        return (
          <Movie setSelectedMovie={props.setSelectedMovie} movie={filme} />
        );
      })}
    </div>
  );
};

export default Movies;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
