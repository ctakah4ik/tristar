import { MovieInfo } from "../types/movie.ts";

const FIELDS_NAME: Array<keyof MovieInfo> = [
  "Actors",
  "Awards",
  "BoxOffice",
  "Country",
  "DVD",
  "Director",
  "Genre",
  "Language",
  "Metascore",
  "Plot",
  "Production",
  "Rated",
  "Released",
  "Runtime",
  "Website",
  "Writer",
  "Year",
  "imdbID",
  "imdbRating",
  "imdbVotes",
];

export const getMovieFields = (movie?: MovieInfo) => {
  if (!movie) {
    return [];
  }

  return FIELDS_NAME.map((key) => ({ key, value: movie[key] }));
};
