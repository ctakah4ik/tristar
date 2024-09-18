import type React from "react";
import { Breadcrumb } from "antd";
import { useGetMovieInfoMutation } from "../../services/api";
import { useParams } from "react-router-dom";

const style = {
  margin: "16px 0",
};

export const PageBreadcrumb: React.FC = () => {
  const { id } = useParams();
  const [, { data }] = useGetMovieInfoMutation({
    fixedCacheKey: "shared-movie",
  });

  return (
    <Breadcrumb style={style}>
      <Breadcrumb.Item href="/">Поиск фильмов</Breadcrumb.Item>
      {id && data?.Response === "True" && (
        <Breadcrumb.Item>{data.Title}</Breadcrumb.Item>
      )}
      {id && data?.Response === "False" && (
        <Breadcrumb.Item>Неизвестный фильм</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};
