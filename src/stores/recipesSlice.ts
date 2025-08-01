
import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/recipeService"
import type { Category, Drinks, SearchFilters } from "../types"

export type RecipesSliceType = {
    categories: Category
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
}
export const recipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks:{
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })},
    searchRecipes: async (filters) => {
            const drinks = await getRecipes(filters)
            set({
                drinks
            })
        }
})