
import type { StateCreator } from "zustand"
import recipeService, { getRecipeById, getRecipes } from "../services/recipeService"
import type { Category, Drink, Drinks, Recipe, SearchFilters } from "../types"

export type RecipesSliceType = {
    categories: Category
    drinks: Drinks
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
    searchRecipeById: (id: Drink['idDrink']) => Promise<void>
    openModal: () => void
    closeModal: () => void
}
export const recipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks:{
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await recipeService.getCategories()
        set(() => ({
            categories
        }))
    },
    searchRecipes: async (filters) => {
            const drinks = await getRecipes(filters)
            set({
                drinks
            })
        },
    searchRecipeById: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe
        })
    },
    openModal: () => set({ modal: true }),
    closeModal: () => set({ 
        modal: false,
        selectedRecipe: {} as Recipe
    })
})