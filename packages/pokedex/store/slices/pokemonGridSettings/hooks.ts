import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../types";
import { useCallback } from "react";
import { setPaginationModel } from "./slice";
import { getPaginationModel } from "./selectors";
import { PaginationModel } from "@pokedex/utils";

export const usePaginationModel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const paginationModel = useSelector(getPaginationModel);

  const handleSetPaginationModel = useCallback(
    (newPaginationModel: PaginationModel) => {
      dispatch(setPaginationModel(newPaginationModel));
    },
    [dispatch]
  );

  return {
    paginationModel,
    handleSetPaginationModel,
    apiParams: {
      limit: paginationModel.pageSize,
      offset: paginationModel.pageSize * paginationModel.page,
    },
  };
};
