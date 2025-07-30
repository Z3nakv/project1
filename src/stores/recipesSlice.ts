
import type { StateCreator } from "zustand"
import { getCategories } from "../services/recipeService"
import type { Category } from "../types"

export type RecipesSliceType = {
    categories: Category
    fetchCategories: () => Promise<void>
}
export const recipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })}
})