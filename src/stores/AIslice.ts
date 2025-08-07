import type { StateCreator } from "zustand"
import AIService from "../services/AIService"

export type AISliceType = {
    recipe: string
    isGenerating: boolean
    generateRecipe: (prompt: string) => void
}

export const createAIslice: StateCreator<AISliceType> = (set) => ({
    recipe: '',
    isGenerating: false,
    generateRecipe: async (prompt) => {
        set({recipe:'', isGenerating: true});
        const data = await AIService.generateRecipe(prompt);
        
        for await (const textPart of data) {
            set((state) => ({
                recipe: state.recipe + textPart
            }))
        }
        set({isGenerating: false});
    }
})