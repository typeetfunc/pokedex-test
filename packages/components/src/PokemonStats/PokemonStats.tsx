import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PokemonDetails, capitalizeFirstLetter } from "@pokedex/utils";
import Typography from "@mui/material/Typography";

export type PokemonStatsProps = {
  name: PokemonDetails["name"];
  stats: PokemonDetails["stats"];
  loading: boolean;
};

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "value", headerName: "Value" },
  { field: "effort", headerName: "Effort" },
];

export const PokemonStats = ({
  name,
  stats = [],
  loading,
}: PokemonStatsProps) => {
  const rows = stats.map((stat) => ({
    id: stat.stat.name,
    name: stat.stat.name,
    value: stat.base_stat,
    effort: stat.effort,
  }));

  return (
    <>
      <Typography variant="h1" component="h2">
        Stats of {capitalizeFirstLetter(name)}
      </Typography>
      <DataGrid
        hideFooter={true}
        loading={loading}
        rows={rows}
        columns={columns}
      />
    </>
  );
};
