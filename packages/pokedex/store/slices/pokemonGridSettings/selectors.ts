import { AppState } from "../../types";

export const getPaginationModel = (state: AppState) =>
  state.pokemonsGridSettings.paginationModel;
