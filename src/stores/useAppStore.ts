import { create } from "zustand";
import { recipesSlice, type RecipesSliceType } from "./recipesSlice";
import { favoriteSlice, type favoriteSliceType } from "./favoritesSlice";

export const useAppStore = create<RecipesSliceType & favoriteSliceType>((...a) => ({
    ...recipesSlice(...a),
    ...favoriteSlice(...a)
}));