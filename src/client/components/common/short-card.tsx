import React from "react";
import { Card } from "antd";

import { Link } from "react-router-dom";

import { FavoriteMoviesControl } from "./favorite-movies-control";
type ShortCardProps = {
  id: string;
  imgLink: string;
  title: string;
  description: string;
};

export const ShortCard: React.FC<ShortCardProps> = ({
  imgLink,
  title,
  description,
  id,
}) => {
  return (
    <Card
      cover={
        <Link to={id}>
          <img alt="example" style={{ width: "100%" }} src={imgLink} />
        </Link>
      }
      actions={[<FavoriteMoviesControl id={id} key={id} />]}
    >
      <Card.Meta
        title={<Link to={id}>{title}</Link>}
        description={description}
      />
    </Card>
  );
};
