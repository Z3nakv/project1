import axios from "axios";
import { CategoriesResponseSchema } from "../schemas";

export async function getCategories () {
    
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios(url);
    const result = CategoriesResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
    throw new Error('Failed to fetch categories');
};
