import CardDrink from "../components/CardDrink";
import { useAppStore } from "../stores/useAppStore"


export const IndexPage = () => {

  const recipes = useAppStore((state) => state.drinks);
  
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      {
        recipes.drinks && recipes.drinks.length === 0 && (
          <p>No recipes found.</p>
        )
      }
      {
        recipes.drinks.map((recipe) => (
          <CardDrink drink={recipe} key={recipe.idDrink} />
        ))
      }
      </div>
  )
}

export default IndexPage