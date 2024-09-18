import { RootState } from "../../index";

import { stateSelector } from "../../selectors";

export const favoriteMoviesSelector = (state: RootState) =>
  stateSelector(state).favoriteMovies;

export const idsSelector = (state: RootState) =>
  favoriteMoviesSelector(state).ids;
