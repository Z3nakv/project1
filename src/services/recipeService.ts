import axios from "axios";
import { CategoriesResponseSchema, DrinksAPIResponse } from "../schemas";
import type { SearchFilters } from "../types";

export async function getCategories () {
    
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios(url);
    const result = CategoriesResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
    throw new Error('Failed to fetch categories');
};

export async function getRecipes(filters: SearchFilters) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
    const { data } = await axios(url);
    const result = DrinksAPIResponse.safeParse(data);
    if (result.success) {
        return result.data;
    }
    throw new Error('Failed to fetch drinks');
}
