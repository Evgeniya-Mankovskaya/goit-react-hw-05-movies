import { useState, useEffect } from "react";
import * as api from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieItem from "../../components/MovieItem/MovieItem";
import { toast } from "react-toastify";

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    api.fetchSearchQuery(searchQuery).then((data) => {
      if (data.results.length === 0) {
        toast.error("Nothing");
        return;
      }
      setMovies(data.results);
    });
  }, [searchQuery]);

  const onClick = (data) => {
    setSearchQuery(data);
  };
  return (
    <>
      <SearchBar onClick={onClick} />
      {movies && <MovieItem movies={movies} />}
    </>
  );
}
