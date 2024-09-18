import type React from "react";
import { Breadcrumb } from "antd";
import { useGetMovieInfoMutation } from "../../services/api";

const style = {
  margin: "16px 0",
};

export const PageBreadcrumb: React.FC = () => {
  const [, { data }] = useGetMovieInfoMutation({
    fixedCacheKey: "shared-movie",
  });

  return (
    <Breadcrumb style={style}>
      <Breadcrumb.Item href="/">Поиск фильмов</Breadcrumb.Item>
      {data?.Response === "True" && (
        <Breadcrumb.Item>{data.Title}</Breadcrumb.Item>
      )}
      {data?.Response === "False" && (
        <Breadcrumb.Item>Неизвестный фильм</Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
};
