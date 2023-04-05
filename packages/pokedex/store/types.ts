import { createStore } from "./createStore";

export type AppStore = ReturnType<typeof createStore>;

export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
