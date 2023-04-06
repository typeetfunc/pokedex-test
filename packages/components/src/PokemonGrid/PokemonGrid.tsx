import React, { useCallback } from "react";
import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { PaginationModel, Pokemon, isString } from "@pokedex/utils";

export type PokemonsGridProps = {
  pokemons?: Pokemon[];
  paginationModel: PaginationModel;
  loading: boolean;
  total?: number;
  onPokemonClick?: (name: string) => void;
  onPaginationModelChange: (newPaginationModel: PaginationModel) => void;
};

const columns: GridColDef[] = [{ field: "name", headerName: "Name" }];

export const PokemonGrid = ({
  pokemons = [],
  total,
  loading,
  onPokemonClick,
  paginationModel,
  onPaginationModelChange,
}: PokemonsGridProps) => {
  const handleClick = useCallback((val: GridRowParams) => {
    const id = isString(val.id) ? val.id : val.id.toString();

    onPokemonClick && onPokemonClick(id);
  }, []);
  const rows = pokemons.map((item) => ({
    id: item.name,
    name: item.name,
  }));

  return (
    <DataGrid
      onPaginationModelChange={onPaginationModelChange}
      onRowClick={handleClick}
      paginationModel={paginationModel}
      paginationMode="server"
      pagination
      rowCount={total || 0}
      loading={loading}
      rows={rows}
      columns={columns}
    />
  );
};
