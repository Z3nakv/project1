import { create } from "zustand";
import { recipesSlice, type RecipesSliceType } from "./recipesSlice";
import { favoriteSlice, type favoriteSliceType } from "./favoritesSlice";
import { notificationSlice, type NotificationSliceType } from "./notificationSlice";
import { createAIslice, type AISliceType } from "./AIslice";

export const useAppStore = create<RecipesSliceType & favoriteSliceType & NotificationSliceType & AISliceType>((...a) => ({
    ...recipesSlice(...a),
    ...favoriteSlice(...a),
    ...notificationSlice(...a),
    ...createAIslice(...a)
}))