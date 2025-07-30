import { z } from "zod";

export const CategoriesResponseSchema = z.object({
    drinks: z.array(
        z.object({
        strCategory: z.string()
    }))
});
