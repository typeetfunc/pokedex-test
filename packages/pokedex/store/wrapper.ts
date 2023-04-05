import { createWrapper } from "next-redux-wrapper";
import { createStore } from "./createStore";
import { AppStore } from "./types";

export const wrapper = createWrapper<AppStore>(createStore, { debug: true });
