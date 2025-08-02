import { useMemo } from "react";
import CardDrink from "../components/CardDrink";
import { useAppStore } from "../stores/useAppStore";

export const IndexPage = () => {
  const recipes = useAppStore((state) => state.drinks);

  const hasdrinks = useMemo(() => recipes.drinks.length, [recipes]);

  return (
    <div className="mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {hasdrinks ? (
          recipes.drinks.map((recipe) => (
            <CardDrink drink={recipe} key={recipe.idDrink} />
          ))
        ) : (
          <p className="my-10 text-center text-2xl">
            No hay resultados aún, utiliza el formulario para buscar recetas
          </p>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
