import React from "react";
import styled from "styled-components";

import MovieCard from "./MovieCard";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Movie = ({ movies }) => (
  <CardsWrapper>
    {movies.map(movie => (
      <MovieCard key={movie.show.id} movie={movie.show} />
    ))}
  </CardsWrapper>
);

export default Movie;
