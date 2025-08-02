import { useAppStore } from "../stores/useAppStore"
import type { Drink } from "../types"

    type CardDrinkProps = {
        drink: Drink
    }

const CardDrink = ({drink} : CardDrinkProps) => {
  
  const searchRecipe = useAppStore((state) => state.searchRecipeById);
  const openModal = useAppStore((state) => state.openModal);
  
  return (
    <div className="p-4 rounded-lg shadow-md mb-4 flex flex-col justify-between">
          <img 
          src={drink.strDrinkThumb} 
          alt={drink.strDrink} 
          className="w-full object-cover rounded-lg mb-2"
          />
        <h2 className="text-3xl font-bold">{drink.strDrink}</h2>
        <button 
        className="mt-2 bg-orange-500 text-white py-2 px-4 rounded w-full cursor-pointer hover:bg-orange-800 transition-colors"
        onClick={() => {
          searchRecipe(drink.idDrink)
          openModal()
        }}
        >
          ver receta
        </button>
    </div>
  )
}

export default CardDrink