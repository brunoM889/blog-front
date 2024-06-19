import { create } from "zustand";

export interface AppState {
  theme: boolean; // true = dark, false = light
  lang: boolean; // true = english, false = spanish
  changeTheme: (theme: boolean) => void;
  changeLang: (lang: boolean) => void;
}

export const useAppState = create<AppState>((set) => ({
  theme: true,
  lang: false,
  changeTheme: (theme: boolean) => set({ theme: theme }),
  changeLang: (lang: boolean) => set({ lang: lang }),
}));
