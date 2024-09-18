import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin, Typography } from "antd";
import { useGetMovieInfoMutation } from "../../services/api";
import { FavoriteMoviesControl } from "../components/common/favorite-movies-control";
import { MovieInfoDetails } from "../components/movie-info-details";

export const MovieInfoPage: React.FC = () => {
  const { id } = useParams();

  const [getMovieInfo, { isLoading, data }] = useGetMovieInfoMutation({
    fixedCacheKey: "shared-movie",
  });

  useEffect(() => {
    if (id) {
      getMovieInfo(id);
    }
  }, [getMovieInfo, id]);

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (data && data.Response === "True") {
    return (
      <div>
        <Typography.Title>
          {data.Title} <FavoriteMoviesControl id={data.imdbID} />
        </Typography.Title>
        <MovieInfoDetails />
      </div>
    );
  }

  return <Typography.Paragraph>Фильм не найден...</Typography.Paragraph>;
};
