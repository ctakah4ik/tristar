import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoriteMoviesState = {
  ids: string[];
};
const initialState: FavoriteMoviesState = {
  ids: [],
};

export const {
  reducer: favoriteMoviesReducer,
  name,
  actions,
} = createSlice({
  name: "favorite-movies",
  initialState,
  reducers: {
    clearState(state) {
      state.ids = [];
    },
    updateFavoriteMovies(state, action: PayloadAction<string[]>) {
      state.ids = action.payload;
    },
  },
});
