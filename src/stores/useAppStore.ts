import { create } from "zustand";
import { recipesSlice, type RecipesSliceType } from "./recipesSlice";

export const useAppStore = create<RecipesSliceType>((...a) => ({
    ...recipesSlice(...a),
}));