import { lazy, Suspense, useEffect, useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import Skeleton from "../skeleton/Skeleton";

const CardDrink = lazy(() => import("../components/CardDrink"));

export const IndexPage = () => {
  const recipes = useAppStore((state) => state.drinks);
  const fetchCategories = useAppStore((state) => state.fetchCategories)

  const hasdrinks = useMemo(() => recipes.drinks.length, [recipes]);

  useEffect(() => {
    fetchCategories()
  })

  return (
    <div className="mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
        hasdrinks ? (
        <Suspense fallback={<Skeleton design={''} />}>
          {recipes.drinks.map((recipe) => (
              <CardDrink drink={recipe} />
            ))}
        </Suspense>
          ) 
          : (
            <p className="my-10 text-center text-2xl">
            No hay resultados aún, utiliza el formulario para buscar recetas
          </p>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
