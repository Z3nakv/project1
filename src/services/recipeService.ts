import axios from "axios";
import api from "../lib/axios";
import { CategoriesResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../schemas";
import type { Drink, SearchFilters } from "../types";


export default {

        async getCategories () {
        
        const url = "/list.php?c=list";
        const { data } = await api(url);
        const result = CategoriesResponseSchema.safeParse(data);
        if (result.success) {
            return result.data;
        }
        throw new Error('Failed to fetch categories');
    }

}


export async function getRecipes(filters: SearchFilters) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
    const { data } = await axios(url);
    const result = DrinksAPIResponse.safeParse(data);
    if (result.success) {
        return result.data;
    }
    throw new Error('Failed to fetch drinks');
}

export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const { data } = await axios(url);
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
    if (result.success) {
        return result.data;
    }
    throw new Error('Failed to fetch drink by ID');

}
