import { z } from "zod";
import type { CategoriesResponseSchema, DrinkAPIResponse, DrinksAPIResponse, SearchFilterSchema } from "../schemas";

export type Category = z.infer<typeof CategoriesResponseSchema>;
export type SearchFilters = z.infer<typeof SearchFilterSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;