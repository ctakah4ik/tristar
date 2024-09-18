import React, { useMemo } from "react";
import { List, Space } from "antd";
import { useGetMovieInfoMutation } from "../../services/api";
import { getMovieFields } from "../../utils/get-movie-fields";
import { MovieRatingInfo } from "./movie-rating-info";

export const MovieInfoDetails: React.FC = () => {
  const [, { data }] = useGetMovieInfoMutation({
    fixedCacheKey: "shared-movie",
  });
  const fields = useMemo(() => getMovieFields(data), [data]);

  if (!data) {
    return null;
  }

  return (
    <Space align="start" size="middle">
      <div>
        <img src={data.Poster} alt="movie picture" />
        <MovieRatingInfo ratings={data.Ratings} />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={fields}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.key} />
            {String(item.value)}
          </List.Item>
        )}
      />
    </Space>
  );
};
