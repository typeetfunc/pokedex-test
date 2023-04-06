import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useGetPokemonsQuery, usePaginationModel } from "../store";
import { PokemonGrid } from "@pokedex/components/PokemonGrid";

const App = () => {
  const router = useRouter();
  const { paginationModel, handleSetPaginationModel, apiParams } =
    usePaginationModel();

  const goToPokemon = useCallback(
    (name: string) => {
      router.push(`/pokemon-details/${name}`);
    },
    [router]
  );

  const { data, isLoading } = useGetPokemonsQuery(apiParams);

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ width: "100%", height: 720 }}>
        <h1>List of pokemons</h1>
        <PokemonGrid
          onPaginationModelChange={handleSetPaginationModel}
          paginationModel={paginationModel}
          onPokemonClick={goToPokemon}
          pokemons={data?.results}
          total={data?.count}
          loading={isLoading}
        />
      </div>
    </>
  );
};

export default App;
