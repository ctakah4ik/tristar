import React from "react";
import { List, Typography } from "antd";
import { Rating } from "../../types/movie.ts";

type MovieRatingInfoProps = {
  ratings?: Rating[];
};

export const MovieRatingInfo: React.FC<MovieRatingInfoProps> = ({
  ratings,
}) => {
  if (!ratings) {
    return null;
  }

  return (
    <>
      <Typography.Title level={4}>Рейтинги:</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={ratings}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.Source} />
            {String(item.Value)}
          </List.Item>
        )}
      />
    </>
  );
};
