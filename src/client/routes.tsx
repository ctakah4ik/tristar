import { createBrowserRouter, RouteProps } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { MovieInfoPage } from "./pages/movie-info-page";

export type Route = Pick<RouteProps, "path" | "element">;

export const ROUTES: Route[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:id",
    element: <MovieInfoPage />,
  },
];

export const router = createBrowserRouter(ROUTES);
