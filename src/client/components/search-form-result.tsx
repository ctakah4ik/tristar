import React from "react";
import { Row, Typography, Col } from "antd";
import { MovieShortInfo } from "../../types/movie";
import { ShortCard } from "./common/short-card";

const styleRow = {
  padding: "16px 0",
};

type SearchFormResultProps = {
  movies?: MovieShortInfo[];
};

export const SearchFormResult: React.FC<SearchFormResultProps> = ({
  movies,
}) => {
  if (!movies) {
    return <Typography.Paragraph>Ничего не найдено...</Typography.Paragraph>;
  }
  return (
    <Row gutter={[16, 24]} style={styleRow}>
      {movies.map(({ Poster, Title, Year, imdbID }) => {
        return (
          <Col span={6} key={imdbID}>
            <ShortCard
              id={imdbID}
              imgLink={Poster}
              title={Title}
              description={Year}
            />
          </Col>
        );
      })}
    </Row>
  );
};
