/* eslint-disable no-alert */
import { meaningOfLife } from "@pokedex/utils";
import React from "react";

export const Button = () => (
  <button type="button" onClick={() => alert(`the meaning if life is ${meaningOfLife}`)}>
    Click me
  </button>
);
