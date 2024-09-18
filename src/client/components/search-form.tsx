import React, { useCallback, useState } from "react";
import { Form, Input, Pagination } from "antd";
import { useGetMoviesByFilterMutation } from "../../services/api";
import { SearchFormResult } from "./search-form-result";

const styleForm = {
  maxWidth: 600,
  with: "100%",
};

export const SearchForm: React.FC = () => {
  const [value, setValue] = useState("");
  const [getMoviesByFilter, { isLoading, data, isSuccess }] =
    useGetMoviesByFilterMutation();

  const handleChangeValue = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setValue(event.target.value);
  }, []);

  const handleSearchMovies = useCallback(() => {
    getMoviesByFilter({ filter: value, page: 1 });
  }, [getMoviesByFilter, value]);

  const handleNavigation = useCallback(
    (page: number) => {
      getMoviesByFilter({ filter: value, page });
    },
    [getMoviesByFilter, value],
  );

  return (
    <>
      <Form
        name="trigger"
        style={styleForm}
        layout="vertical"
        autoComplete="off"
      >
        <Input.Search
          placeholder="Введите название фильма"
          value={value}
          enterButton="Поиск"
          size="large"
          onChange={handleChangeValue}
          onSearch={handleSearchMovies}
          loading={isLoading}
        />
      </Form>
      {isSuccess && <SearchFormResult movies={data.Search} />}
      {data?.Search && (
        <Pagination
          showSizeChanger={false}
          total={+data.totalResults}
          defaultCurrent={data.page}
          onChange={handleNavigation}
        />
      )}
    </>
  );
};
