import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BASE_URL } from "../api";

import Movies from "./Movies";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  input {
    max-width: 400px;
    width: 100%;
    font-size: 18px;
    padding: 8px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  button {
    padding: 10px;
    font-size: 15px;
    width: 100px;
  }
`;

let previousQuery = '';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = React.useRef();

  const fetchData = async (query) => {
    setLoading(true);
    const res = await axios.get(`${BASE_URL}/search/shows?q=${query}`);
    setMovies(res.data);
    setLoading(false);
  };

  const search = () => {
    if (!inputRef.current) return;
    let query = inputRef.current.value;
    if (previousQuery === query) return;
    fetchData(query);
    previousQuery = query;
  };

  return (
    <Router>
      <Container>
        <SearchContainer>
          <input placeholder="Search Movies..." type="text" ref={inputRef} />
          <button onClick={search}>{loading ? "Loading..." : "Search"}</button>
        </SearchContainer>
        <Switch>
          <Route exact path="/" render={props => <Movies movies={movies} />} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
