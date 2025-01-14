import { FindMyUserResponse } from "@/providers/generate";
import * as React from "react";

export type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

export type Lang = "en" | "es";

export interface AppContextModel {
  lang?: Lang;
  setLang?: SetValue<Lang | undefined>;
  user?: FindMyUserResponse | null;
  setUser: (user: FindMyUserResponse | null) => void;
  logout: () => void;
}
