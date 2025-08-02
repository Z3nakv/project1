import type { StateCreator } from "zustand"
import type { Recipe } from "../types"

export type favoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorites: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
}

export const favoriteSlice: StateCreator<favoriteSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorites: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            }));
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }));
        }
    },
    favoriteExists: (id) => {
        const favorites = get().favorites;
        return favorites.some(favorite => favorite.idDrink === id);
    }
})