import React from "react";
import { Typography } from "antd";
import { SearchForm } from "../components/search-form";

export const MainPage: React.FC = () => {
  return (
    <div>
      <Typography.Title>Поиск фильмов</Typography.Title>
      <SearchForm />
    </div>
  );
};
