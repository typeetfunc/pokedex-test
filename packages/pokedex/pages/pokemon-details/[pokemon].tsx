import { NextPage } from "next";
import { useRouter } from "next/router";
import { useGetPokemonByNameQuery } from "../../store";
import { PokemonStats } from "@pokedex/components/PokemonStats";
export const isString = (val: unknown): val is string => {
  return typeof val === "string";
};

const PokemonPage: NextPage = () => {
  const { query } = useRouter();
  const pokemonName = isString(query.pokemon) ? query.pokemon : "";
  const { data, isLoading } = useGetPokemonByNameQuery(pokemonName);

  return (
    <div style={{ width: "100%", height: 720 }}>
      <PokemonStats
        name={pokemonName}
        stats={data?.stats}
        loading={isLoading}
      />
    </div>
  );
};
export default PokemonPage;
