import React, { useCallback } from "react";
import { Popover } from "antd";

import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { idsSelector } from "../../../store/models/favorite-movies/selectors";
import { actions } from "../../../store/models/favorite-movies/reducer";

type FavoriteMoviesControlProps = {
  id: string;
};

export const FavoriteMoviesControl: React.FC<FavoriteMoviesControlProps> = ({
  id,
}) => {
  const dispatch = useDispatch();
  const ids = useSelector(idsSelector);

  const handleToggleFavoriteMovies = useCallback(() => {
    const copyIds = [...ids];
    const index = ids.indexOf(id);

    if (index === -1) {
      copyIds.push(id);
    } else {
      copyIds.splice(index, 1);
    }

    dispatch(actions.updateFavoriteMovies(copyIds));
  }, [dispatch, ids, id]);

  if (ids.includes(id)) {
    return (
      <Popover content="Убрать из избранного">
        <StarFilled onClick={handleToggleFavoriteMovies} />
      </Popover>
    );
  }

  return (
    <Popover content="Добавить в избранное">
      <StarOutlined onClick={handleToggleFavoriteMovies} />
    </Popover>
  );
};
