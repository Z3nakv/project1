import { z } from "zod";
import type { CategoriesResponseSchema } from "../schemas";

export type Category = z.infer<typeof CategoriesResponseSchema>;