import type { StateCreator } from "zustand"
import type { Recipe } from "../types"
import { notificationSlice, type NotificationSliceType } from "./notificationSlice"
import type { RecipesSliceType } from "./recipesSlice"

export type favoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorites: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
}

export const favoriteSlice: StateCreator<favoriteSliceType & RecipesSliceType & NotificationSliceType, [], [], favoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorites: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            }));
            notificationSlice(set, get, api).showNotification({
                text: 'Recipe removed from favorites',
                error: true
            });
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }));
            notificationSlice(set, get, api).showNotification({
                text: 'Recipe added to favorites',
                error: false
            });
        }
    },
    favoriteExists: (id) => {
        const favorites = get().favorites;
        return favorites.some(favorite => favorite.idDrink === id);
    }
})